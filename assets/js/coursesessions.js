/* coursesessions.js */
// ES Module with multiple time slots per day + Program/Course dropdowns,
// dynamic import of course files, per-date Overrides (add/edit/remove),
// Visual Month Calendar, and a Share Link snapshot system with compression
// + auto-generate on shared link load.

import { campusClosedDates } from "./baddates.js";

const dayLabels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // UI-editable days (Sunday omitted)
const wkDays = new Set(DAYS);

/** ---- Registries: update paths as needed for your repo ---- */
const PROGRAM_FILE_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/program.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/program.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/program.js",
};

const PROGRAM_COURSE_REGISTRY = {
  "Advanced Emergency Medical Technician": [
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1202.js",
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1904.js",
  ],
  "Automation Technology": [
    "../../data/programs/Automation Technology/TEAM 1010.js",
    "../../data/programs/Automation Technology/TEAM 1040.js",
    "../../data/programs/Automation Technology/TEAM 1050.js",
    "../../data/programs/Automation Technology/TEAM 1060.js",
    "../../data/programs/Automation Technology/TEAM 1070.js",
    "../../data/programs/Automation Technology/TEAM 1030.js",
    "../../data/programs/Automation Technology/TEAM 1020.js",
    "../../data/programs/Automation Technology/TEAM 1080.js",
    "../../data/programs/Automation Technology/TEAM 2005.js",
    "../../data/programs/Automation Technology/TEAM 2210.js",
    "../../data/programs/Automation Technology/TEAM 1510.js",
    "../../data/programs/Automation Technology/TEAM 1640.js",
  ],
  "Automotive Technology": [
    "../../data/programs/Automotive Technology/TEAU 1050.js",
    "../../data/programs/Automotive Technology/TEAU 1600.js",
    "../../data/programs/Automotive Technology/TEAU 1800.js",
    "../../data/programs/Automotive Technology/TEAU 1055.js",
    "../../data/programs/Automotive Technology/TEAU 2640.js",
    "../../data/programs/Automotive Technology/TEAU 2840.js",
    "../../data/programs/Automotive Technology/TEAU 1740.js",
    "../../data/programs/Automotive Technology/TEAU 1500.js",
    "../../data/programs/Automotive Technology/TEAU 1340.js",
    "../../data/programs/Automotive Technology/TEAU 1400.js",
    "../../data/programs/Automotive Technology/TEAU 1240.js",
    "../../data/programs/Automotive Technology/TEAU 1140.js",
    "../../data/programs/Automotive Technology/TEAU 2910.js",
    "../../data/programs/Automotive Technology/TEAU 2911.js",
    "../../data/programs/Automotive Technology/TEAU 2912.js",
    "../../data/programs/Automotive Technology/TEAU 2913.js",
    "../../data/programs/Automotive Technology/TEAU 2914.js",
    "../../data/programs/Automotive Technology/TEAU 2915.js",
  ],
};

function encodePath(p){ return p.replace(/ /g, "%20"); }

// ---- Date & time helpers ----
function parseDateISO(v){
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v||"");
  if(!m) return null;
  const d = new Date(Number(m[1]), Number(m[2])-1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}
function formatDateHuman(d){
  return d.toLocaleDateString(undefined, { weekday:'short', month:'short', day:'2-digit', year:'numeric' });
}
function monthYearLabel(d){
  return d.toLocaleDateString(undefined, { month:'long', year:'numeric' });
}
function pad(n){ return String(n).padStart(2,'0'); }
function timeToMinutes(str){
  if(!str) return null;
  const s = str.trim();
  let m = s.match(/^(\d{1,2})(?::(\d{2}))?\s*([AaPp][Mm])$/);
  if(m){
    let hh = Number(m[1])%12; const mm = Number(m[2]||'0');
    if((m[3]||'').toLowerCase()==='pm') hh += 12;
    return hh*60+mm;
  }
  m = s.match(/^(\d{1,2}):(\d{2})$/);
  if(m){ return Number(m[1])*60 + Number(m[2]); }
  m = s.match(/^(\d{1,2})$/);
  if(m){ return Number(m[1])*60; }
  return null;
}
function minutesToHrs(mins){ return Math.round((mins/60)*100)/100; }
function eachDay(start,end){
  const days=[]; const d=new Date(start.getFullYear(), start.getMonth(), start.getDate());
  while(d<=end){ days.push(new Date(d)); d.setDate(d.getDate()+1); }
  return days;
}
function isCampusClosedDate(d){
  const dStr = `${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${d.getFullYear()}`;
  return campusClosedDates.some(c => c.date === dStr);
}
function isoOf(d){
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}
function firstOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
function lastOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0); }
function renderSlotLines(slots){
  if (!Array.isArray(slots) || !slots.length) return '';
  const items = slots.map(s => `<li>${s.start} - ${s.end}</li>`).join('');
  return `<ul class="slotslist">${items}</ul>`;
}

/* LZString (URI component only) — MIT — trimmed build */
/* eslint-disable */
const LZString = (() => {
  function mapInit(dict, ch) {
    if (!cache[dict]) {
      cache[dict] = {};
      for (let i = 0; i < dict.length; i++) cache[dict][dict.charAt(i)] = i;
    }
    return cache[dict][ch];
  }
  const fcc = String.fromCharCode;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
  const cache = {};
  const api = {
    compressToEncodedURIComponent: function (input) {
      if (input == null) return "";
      return api._compress(input, 6, function (a) { return alphabet.charAt(a); });
    },
    decompressFromEncodedURIComponent: function (input) {
      if (input == null) return "";
      if (input === "") return null;
      return api._decompress(input.length, 32, function (idx) { return mapInit(alphabet, input.charAt(idx)); });
    },
    _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
      let i, value,
        context_dictionary = {},
        context_dictionaryToCreate = {},
        context_c = "",
        context_wc = "",
        context_w = "",
        context_enlargeIn = 2,
        context_dictSize = 3,
        context_numBits = 2,
        context_data = [],
        context_data_val = 0,
        context_data_position = 0;

      for (let ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);
        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }
        context_wc = context_w + context_c;
        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 8; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            } else {
              value = 1;
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1) | value;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = 0;
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 16; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, ++context_numBits);
            }
            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, ++context_numBits);
          }
          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      }

      if (context_w !== "") {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i = 0; i < 8; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i = 0; i < 16; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, ++context_numBits);
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i = 0; i < context_numBits; i++) {
            context_data_val = (context_data_val << 1) | (value & 1);
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, ++context_numBits);
        }
      }

      value = 2;
      for (i = 0; i < context_numBits; i++) {
        context_data_val = (context_data_val << 1) | (value & 1);
        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val));
          context_data_val = 0;
        } else {
          context_data_position++;
        }
        value = value >> 1;
      }

      while (true) {
        context_data_val = (context_data_val << 1);
        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val));
          break;
        } else {
          context_data_position++;
        }
      }
      return context_data.join("");
    },
    _decompress: function (length, resetValue, getNextValue) {
      let dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = { val: getNextValue(0), position: resetValue, index: 1 };

      for (i = 0; i < 3; i += 1) dictionary[i] = i;

      bits = 0; maxpower = Math.pow(2, 2); power = 1;
      while (power != maxpower) {
        resb = data.val & data.position; data.position >>= 1;
        if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
        bits |= (resb > 0 ? 1 : 0) * power; power <<= 1;
      }

      switch (next = bits) {
        case 0:
          bits = 0; maxpower = Math.pow(2, 8); power = 1;
          while (power != maxpower) {
            resb = data.val & data.position; data.position >>= 1;
            if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
            bits |= (resb > 0 ? 1 : 0) * power; power <<= 1;
          }
          c = fcc(bits);
          break;
        case 1:
          bits = 0; maxpower = Math.pow(2, 16); power = 1;
          while (power != maxpower) {
            resb = data.val & data.position; data.position >>= 1;
            if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
            bits |= (resb > 0 ? 1 : 0) * power; power <<= 1;
          }
          c = fcc(bits);
          break;
        case 2:
          return "";
      }

      dictionary[3] = c;
      w = c;
      result.push(c);

      while (true) {
        if (data.index > length) return "";
        bits = 0; maxpower = Math.pow(2, numBits); power = 1;
        while (power != maxpower) {
          resb = data.val & data.position; data.position >>= 1;
          if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
          bits |= (resb > 0 ? 1 : 0) * power; power <<= 1;
        }

        switch (next = bits) {
          case 0:
            bits = 0; maxpower = Math.pow(2, 8); power = 1;
            while (power != maxpower) {
              resb = data.val & data.position; data.position >>= 1;
              if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
              bits |= (resb > 0 ? 1 : 0) * power; power <<= 1;
            }
            dictionary[dictSize++] = fcc(bits); next = dictSize - 1; enlargeIn--;
            break;
          case 1:
            bits = 0; maxpower = Math.pow(2, 16); power = 1;
            while (power != maxpower) {
              resb = data.val & data.position; data.position >>= 1;
              if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
              bits |= (resb > 0 ? 1 : 0) * power; power <<= 1;
            }
            dictionary[dictSize++] = fcc(bits); next = dictSize - 1; enlargeIn--;
            break;
          case 2:
            return result.join("");
        }

        if (enlargeIn == 0) { enlargeIn = Math.pow(2, numBits); numBits++; }

        let entryStr;
        if (dictionary[next]) {
          entryStr = dictionary[next];
        } else {
          if (next !== dictSize) return null;
          entryStr = w + w.charAt(0);
        }
        result.push(entryStr);

        dictionary[dictSize++] = w + entryStr.charAt(0);
        enlargeIn--;
        w = entryStr;

        if (enlargeIn == 0) { enlargeIn = Math.pow(2, numBits); numBits++; }
      }
    }
  };
  return api;
})();
/* eslint-enable */

// ---- Share link helpers (compressed + URL-safe) ----
function encodeForUrl(obj){
  const json = JSON.stringify(obj);
  return LZString.compressToEncodedURIComponent(json);
}
function decodeFromUrl(comp){
  const json = LZString.decompressFromEncodedURIComponent(comp);
  return JSON.parse(json);
}

// --- Date normalization helpers (handle both YYYY-MM-DD and MM-DD-YYYY) ---
function normalizeToISODate(s) {
  if (!s) return "";
  // already ISO?
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  // MM-DD-YYYY -> YYYY-MM-DD
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(s);
  if (m) return `${m[3]}-${m[1]}-${m[2]}`;
  return ""; // unknown/invalid
}

function haveValidDateRangeFromInputs() {
  const sd = parseDateISO(document.getElementById('startDate')?.value || "");
  const ed = parseDateISO(document.getElementById('endDate')?.value || "");
  return !!(sd && ed && ed >= sd);
}

// ---- State ----
const state = {
  times: Object.fromEntries(DAYS.map(d => [d, [] /* array of {start,end} */])),
  rows:[],
  total:0,
  coursesCache: new Map(),
  // Overrides keyed by ISO date "YYYY-MM-DD": { type: 'add'|'edit'|'remove', slots?: [{start,end}] }
  overrides: Object.create(null),
};

// ---- UI refs ----
const programSelect = document.getElementById('programSelect');
const courseSelect  = document.getElementById('courseSelect');
const targetHoursEl = document.getElementById('targetHours');
const targetTag     = document.getElementById('targetTag');
const daysContainer = document.getElementById('daysContainer');

// ---- Render Days with slot controls ----
function renderDays(){
  daysContainer.innerHTML = DAYS.map(d => `
    <div class="daybox" data-daybox="${d}">
      <div class="header">
        <div class="tag">${d}</div>
      </div>
      <div class="slots" data-slots="${d}"></div>
      <div class="addrow">
        <button class="smallbtn addslot" data-add="${d}" type="button">+Add Addition Time</button>
      </div>
    </div>
  `).join('');

  // seed one empty slot for each day (Saturday forced blank)
  DAYS.forEach(d => {
    const shouldForceBlank = d === "Saturday";
    if (shouldForceBlank) {
      state.times[d] = [];
    }
    if (!state.times[d] || state.times[d].length === 0) {
      addSlot(d, "", "");
    } else {
      const arr = state.times[d];
      state.times[d] = [];
      arr.forEach(s => addSlot(d, s.start || "", s.end || ""));
    }
  });

  // add-slot buttons
  daysContainer.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', () => {
      const day = btn.getAttribute('data-add');
      addSlot(day, "", "");
    });
  });
}

function addSlot(day, startVal, endVal){
  const slotsEl = daysContainer.querySelector(`[data-slots="${day}"]`);
  if(!slotsEl) return;

  const slot = { start: startVal || "", end: endVal || "" };
  state.times[day].push(slot);

  const row = document.createElement('div');
  row.className = 'slotrow';
  row.setAttribute('data-slot-day', day);
  row.setAttribute('data-slot-idx', String(state.times[day].length - 1));
  row.innerHTML = `
    <div>
      <label class="tinylabel">Start</label>
      <input type="text" placeholder="9:00 AM" value="${slot.start}">
    </div>
    <div>
      <label class="tinylabel">End</label>
      <input type="text" placeholder="1:00 PM" value="${slot.end}">
    </div>
  `;

  const inputs = row.querySelectorAll('input');
  inputs[0].addEventListener('input', e => { slot.start = e.target.value; });
  inputs[1].addEventListener('input', e => { slot.end   = e.target.value;  });

  slotsEl.appendChild(row);
}

// ---- Program/Course dynamic import ----

function initPrograms(){
  const programs = Object.keys(PROGRAM_COURSE_REGISTRY).sort();
  programSelect.innerHTML = programs.map(p => `<option value="${p}">${p}</option>`).join('');
  programSelect.addEventListener('change', onProgramChange);
  onProgramChange();
}

async function onProgramChange(){
  const prog = programSelect.value;
  const files = PROGRAM_COURSE_REGISTRY[prog] || [];
  courseSelect.disabled = true;
  courseSelect.innerHTML = `<option>Loading courses…</option>`;

  const loaded = [];
  for (const relPath of files){
    try {
      const mod = await import(encodePath(relPath));
      const arr = Array.isArray(mod.default) ? mod.default : [mod.default];
      const course = arr[0] || {};
      const label = [course.courseNumber, course.courseName].filter(Boolean).join(' — ') || relPath.split('/').pop();
      state.coursesCache.set(relPath, course);
      loaded.push({ path: relPath, label });
    } catch (e) {
      const filename = relPath.split('/').pop();
      loaded.push({ path: relPath, label: `⚠ ${filename} (load error)` });
      console.error('Import failed:', relPath, e);
    }
  }

  courseSelect.innerHTML = loaded.map(c => `<option value="${c.path}">${c.label}</option>`).join('');
  courseSelect.disabled = loaded.length === 0;
  courseSelect.onchange = onCourseChange;

  if (loaded.length > 0){
    courseSelect.value = loaded[0].path;
    onCourseChange();
  } else {
    setTargetHours(null);
  }
}

function setTargetHours(val){
  if(val == null || isNaN(Number(val))){
    targetHoursEl.value = '';
    targetTag.style.display = 'none';
  } else {
    targetHoursEl.value = String(val);
    targetTag.style.display='inline-block';
    targetTag.textContent = `Target: ${val} hrs`;
  }
}

function applyCourseDefaults(course){
  // 1) clock hours
  setTargetHours(course?.courseClockHours);

  // 2) classroom hours block (times only — no date autofill)
  const ch = Array.isArray(course?.courseClassroomHours) ? course.courseClassroomHours[0] : null;
  if (ch){
    // clear any prefilled date values (we keep Start/End blank)
    const startDateEl = document.getElementById('startDate');
    const endDateEl   = document.getElementById('endDate');
    if (startDateEl) startDateEl.value = '';
    if (endDateEl)   endDateEl.value   = '';

    DAYS.forEach(d => {
      if (d === "Saturday") {
        state.times[d] = []; // force Saturday blank
        return;
      }
      const v = ch[d];
      if (typeof v === 'string' && v.includes('-')){
        const [st, en] = v.split('-').map(s=>s.trim());
        state.times[d] = [{ start: st, end: en }];
      } else {
        state.times[d] = [];
      }
    });

    renderDays();
  }
}

async function onCourseChange(){
  const path = courseSelect.value;
  let course = state.coursesCache.get(path);
  if (!course){
    try {
      const mod = await import(encodePath(path));
      const arr = Array.isArray(mod.default) ? mod.default : [mod.default];
      course = arr[0] || {};
      state.coursesCache.set(path, course);
    } catch (e) {
      console.error('Import failed on selection:', path, e);
    }
  }
  applyCourseDefaults(course);
}

// Target hours tag live update
targetHoursEl.addEventListener('input', ()=>{
  const t = Number(targetHoursEl.value);
  if(!isNaN(t) && t>0){
    targetTag.style.display='inline-block';
    targetTag.textContent = `Target: ${t} hrs`;
  } else {
    targetTag.style.display='none';
  }
});

// ---- Overrides UI + helpers (safe if HTML controls are absent) ----

function isoFromDateInput(v){
  const d = parseDateISO(v);
  if(!d) return null;
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function parseOverrideSlots(text){
  // Accept multiple lines like: "9:00 AM - 12:00 PM"
  const chunks = String(text||'').split(/\n|;/).map(s => s.trim()).filter(Boolean);
  const slots = [];
  for(const c of chunks){
    if(!c.includes('-')) continue;
    const [st,en] = c.split('-').map(s=>s.trim());
    if(timeToMinutes(st) != null && timeToMinutes(en) != null){
      slots.push({ start: st, end: en });
    }
  }
  return slots;
}

function renderOverridesList(){
  const el = document.getElementById('overridesList');
  if(!el) return;
  const keys = Object.keys(state.overrides).sort();
  if(keys.length === 0){
    el.innerHTML = `<div class="hint">No overrides added yet.</div>`;
    return;
  }
  el.innerHTML = keys.map(k => {
    const o = state.overrides[k];
    const lines = (o.slots||[]).map(s => `${s.start} - ${s.end}`).join('\n');
    return `
      <div class="ovcard" data-ov="${k}">
        <div class="ovmeta">${o.type.toUpperCase()} • ${formatDateHuman(parseDateISO(k))}</div>
        ${o.type !== 'remove' ? `<pre class="ovtimes">${lines || '—'}</pre>` : ''}
        <div class="ovactions">
          <button class="smallbtn danger" data-del="${k}" type="button">Delete Override</button>
        </div>
      </div>
    `;
  }).join('');

  el.querySelectorAll('[data-del]').forEach(btn=>{
    btn.addEventListener('click', () => {
      const k = btn.getAttribute('data-del');
      delete state.overrides[k];
      renderOverridesList();
    });
  });
}

function setupOverridesUI(){
  const typeSel = document.getElementById('overrideType');
  const dateEl  = document.getElementById('overrideDate');
  const timesEl = document.getElementById('overrideTimes');
  const timesRow= document.getElementById('overrideTimesRow');
  const addBtn  = document.getElementById('addOverrideBtn');
  if(!typeSel || !dateEl || !addBtn) return;

  const syncTimesVisibility = () => {
    const t = typeSel.value;
    if(timesRow) timesRow.style.display = (t === 'remove') ? 'none' : '';
  };
  syncTimesVisibility();
  typeSel.addEventListener('change', syncTimesVisibility);

  addBtn.addEventListener('click', () => {
    const t = typeSel.value;
    const iso = isoFromDateInput(dateEl.value);
    if(!t || !iso){
      alert('Choose a type and a valid date.');
      return;
    }

    if(t === 'remove'){
      state.overrides[iso] = { type: 'remove' };
    } else {
      const slots = parseOverrideSlots(timesEl?.value);
      if(!slots || slots.length === 0){
        alert('Add at least one valid time slot like "9:00 AM - 12:00 PM".');
        return;
      }
      state.overrides[iso] = { type: t, slots };
    }

    renderOverridesList();
  });

  renderOverridesList();
}

// ---- Visual Month Calendar ----

function renderMonthCalendars(s, e, entriesByIso){
  const grid = document.getElementById('monthGrid');
  if(!grid) return;
  grid.innerHTML = '';

  const startMonth = new Date(s.getFullYear(), s.getMonth(), 1);
  const endMonth   = new Date(e.getFullYear(), e.getMonth(), 1);

  for (let cur = new Date(startMonth); cur <= endMonth; cur.setMonth(cur.getMonth()+1)) {
    const first = firstOfMonth(cur);
    const last  = lastOfMonth(cur);

    const monthEl = document.createElement('div');
    monthEl.className = 'month';

    monthEl.innerHTML = `
      <div class="month-header">
        <div class="month-title">${monthYearLabel(first)}</div>
      </div>
      <div class="weekday-row">
        ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(w=>`<div class="weekday">${w}</div>`).join('')}
      </div>
    `;

    const weeksFrag = document.createDocumentFragment();
    let weekEl = document.createElement('div');
    weekEl.className = 'week';

    // Leading blanks
    const leadBlanks = first.getDay();
    for(let i=0;i<leadBlanks;i++){
      const blank = document.createElement('div');
      blank.className = 'daycell inactive';
      weekEl.appendChild(blank);
    }

    // Days of month
    for(let day=1; day<=last.getDate(); day++){
      const d = new Date(first.getFullYear(), first.getMonth(), day);
      const iso = isoOf(d);
      const entry = entriesByIso[iso] || null;

      const cell = document.createElement('div');
      cell.className = 'daycell';
      cell.innerHTML = `<div class="date-num">${day}</div>`;

      if (entry) {
        if (entry.status === 'closed') {
          cell.classList.add('closed');
        } else if (entry.status.startsWith('override-')) {
          cell.classList.add('override', entry.status);
          if (entry.slots?.length) cell.innerHTML += renderSlotLines(entry.slots);
        } else if (entry.status === 'normal') {
          cell.classList.add('has-schedule');
          if (entry.slots?.length) cell.innerHTML += renderSlotLines(entry.slots);
        }
      }

      weekEl.appendChild(cell);

      if (d.getDay() === 6) {
        weeksFrag.appendChild(weekEl);
        weekEl = document.createElement('div');
        weekEl.className = 'week';
      }
    }

    // Trailing blanks
    const lastDow = last.getDay();
    if (lastDow !== 6) {
      for (let i=lastDow+1; i<=6; i++) {
        const blank = document.createElement('div');
        blank.className = 'daycell inactive';
        weekEl.appendChild(blank);
      }
    }
    weeksFrag.appendChild(weekEl);

    monthEl.appendChild(weeksFrag);
    grid.appendChild(monthEl);
  }
}

// ---- Generate / Export ----
function generate(){
  const s = parseDateISO(document.getElementById('startDate').value);
  const e = parseDateISO(document.getElementById('endDate').value);
  const cal = document.getElementById('calendar');
  const compareBlock = document.getElementById('compareBlock');
  cal.innerHTML = '';
  compareBlock.innerHTML = '';
  const monthEntries = {}; // iso -> { status: 'normal'|'closed'|'override-add'|'override-edit'|'override-remove', slots?:[] }

  state.rows = [];
  state.total = 0;

  if (!s || !e || e < s) {
    cal.innerHTML = `<div class="calday closed">Enter a valid date range.</div>`;
    document.getElementById('monthGrid')?.replaceChildren();
    return;
  }

  const days = eachDay(s, e);
  let dayNum = 0;
  let running = 0;

  for (const d of days) {
    const dow = dayLabels[d.getDay()];
    const iso = isoOf(d);
    const ov = state.overrides[iso] || null;

    // 1) Remove override
    if (ov?.type === 'remove') {
      const cd = document.createElement('div');
      cd.className = 'calday closed override override-remove';
      cd.innerHTML = `
        <div class="meta">Removed</div>
        <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        <div class="meta">Removed by override</div>
      `;
      cal.appendChild(cd);
      monthEntries[iso] = { status:'override-remove' };
      continue;
    }

    // 2) Add/Edit override (wins over campus closed + weekday)
    if (ov?.type === 'add' || ov?.type === 'edit') {
      const slotsToUse = ov.slots || [];
      let totalMins = 0;
      for (const { start, end } of slotsToUse) {
        const startM = timeToMinutes(start);
        const endM   = timeToMinutes(end);
        if (startM == null || endM == null || endM <= startM) continue;
        totalMins += (endM - startM);
      }
      if (totalMins <= 0) {
        monthEntries[iso] = { status:'override-' + ov.type, slots: [] };
        continue;
      }

      const hrs = minutesToHrs(totalMins);
      running = Math.round((running + hrs) * 100) / 100;
      dayNum += 1;
      state.rows.push({ day: dayNum, date: new Date(d), hours: hrs, running });

      const cd = document.createElement('div');
      cd.className = `calday override override-${ov.type}`;
      cd.innerHTML = `
        <div class="meta">Day ${dayNum} • ${ov.type.toUpperCase()}</div>
        <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        ${renderSlotLines(slotsToUse)}
        <div class="meta">${hrs} hrs • run: ${running}</div>
      `;
      cal.appendChild(cd);

      monthEntries[iso] = { status:'override-' + ov.type, slots: slotsToUse.slice() };
      continue;
    }

    // 3) Campus closed?
    if (isCampusClosedDate(d)) {
      const cd = document.createElement('div');
      cd.className = 'calday closed';
      cd.innerHTML = `
        <div class="meta">Closed</div>
        <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        <div class="meta">Campus Closed</div>
      `;
      cal.appendChild(cd);
      monthEntries[iso] = { status:'closed' };
      continue;
    }

    // 4) Normal weekday pattern (Sun skipped)
    if (!wkDays.has(dow)) continue;

    const slots = state.times[dow] || [];
    let totalMins = 0;
    for (const { start, end } of slots) {
      const startM = timeToMinutes(start);
      const endM   = timeToMinutes(end);
      if (startM == null || endM == null || endM <= startM) continue;
      totalMins += (endM - startM);
    }
    if (totalMins <= 0) continue;

    const hrs = minutesToHrs(totalMins);
    running = Math.round((running + hrs) * 100) / 100;
    dayNum += 1;

    state.rows.push({ day: dayNum, date: new Date(d), hours: hrs, running });

    const cd = document.createElement('div');
    cd.className = 'calday';
    cd.innerHTML = `
      <div class="meta">Day ${dayNum}</div>
      <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
      <div class="meta">${hrs} hrs • run: ${running}</div>
    `;
    cal.appendChild(cd);

    monthEntries[iso] = { status:'normal', slots: slots.slice() };
  }

  state.total = running;

  if (state.rows.length === 0) {
    cal.innerHTML = `<div class="calday closed">No sessions. Add times and try again.</div>`;
  }

  const t = Number(targetHoursEl.value);
  if (!isNaN(t) && t > 0) {
    const diff = Math.round((t - state.total) * 100) / 100;
    compareBlock.innerHTML = diff >= 0
      ? `<span class="good">Remaining to target: ${diff} hrs</span>`
      : `<span class="bad">Over target by: ${Math.abs(diff)} hrs</span>`;
  }

  renderMonthCalendars(s, e, monthEntries);
}

function exportCSV(){
  if(!state.rows.length){ alert('Nothing to export. Generate first.'); return; }
  const headers = ['Day','Date','Start Time','End Time','Hours','Running Total'];
  const rows = state.rows.map(r=>[
    r.day,
    formatDateHuman(r.date),
    'Multiple',
    'Multiple',
    r.hours,
    r.running
  ]);
  const all = [headers, ...rows];
  const csv = all.map(row => row.map(cell => '"'+String(cell).replaceAll('"','""')+'"').join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'course_schedule.csv'; a.click(); URL.revokeObjectURL(url);
}

// ---- Share Link: build/apply/wire ----
function buildSnapshot(){
  const startRaw = document.getElementById('startDate')?.value || '';
  const endRaw   = document.getElementById('endDate')?.value   || '';
  const startISO = normalizeToISODate(startRaw);
  const endISO   = normalizeToISODate(endRaw);
  return {
    program: programSelect?.value || null,
    coursePath: courseSelect?.value || null,
    targetHours: targetHoursEl?.value || '',
    startDate: startISO,  // always ISO in snapshot
    endDate: endISO,      // always ISO in snapshot
    times: state.times,
    overrides: state.overrides,
    version: 2
  };
}

function applySnapshot(snap){
  if(!snap || typeof snap !== 'object') return;

  // selections
  if (snap.program && programSelect) programSelect.value = snap.program;
  if (snap.coursePath && courseSelect) {
    if (![...courseSelect.options].some(o => o.value === snap.coursePath)) {
      const opt = document.createElement('option');
      opt.value = snap.coursePath;
      opt.textContent = snap.coursePath.split('/').pop();
      courseSelect.appendChild(opt);
    }
    courseSelect.value = snap.coursePath;
  }

  // fields (normalize dates to ISO for <input type="date">)
  if (typeof snap.targetHours !== 'undefined') {
    targetHoursEl.value = String(snap.targetHours || '');
    targetTag.style.display = snap.targetHours ? 'inline-block' : 'none';
    if (snap.targetHours) targetTag.textContent = `Target: ${snap.targetHours} hrs`;
  }
  const startEl = document.getElementById('startDate');
  const endEl   = document.getElementById('endDate');
  if (startEl) startEl.value = normalizeToISODate(snap.startDate || '');
  if (endEl)   endEl.value   = normalizeToISODate(snap.endDate   || '');

  // deep state
  if (snap.times)      state.times = JSON.parse(JSON.stringify(snap.times));
  if (snap.overrides)  state.overrides = JSON.parse(JSON.stringify(snap.overrides));

  renderDays();
  renderOverridesList();
}

function wireShareLink(){
  const btn = document.getElementById('shareLinkBtn');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const snap = buildSnapshot();
    const payload = encodeForUrl(snap);
    const url = `${location.origin}${location.pathname}?s=${payload}`;
    navigator.clipboard.writeText(url).then(
      () => alert('Share link copied to clipboard!'),
      () => { prompt('Copy this link:', url); }
    );
  });
}

function loadSnapshotFromUrl(){
  const params = new URLSearchParams(location.search);
  const s = params.get('s');
  if(!s) return;
  try{
    const snap = decodeFromUrl(s);
    applySnapshot(snap);

    // Only auto-generate if both dates are valid ISO and range is correct
    if (haveValidDateRangeFromInputs()) {
      generate();
    } else {
      // Optional: gentle hint so users know what to do next
      console.warn('Snapshot loaded, but dates were missing/invalid. Waiting for user to set a valid range.');
    }
  } catch(err){
    console.error('Failed to load shared snapshot:', err);
    alert('This share link appears invalid or corrupted.');
  }
}

// Buttons
document.getElementById('generateBtn').addEventListener('click', generate);
document.getElementById('exportBtn').addEventListener('click', exportCSV);
wireShareLink(); // Copy Share Link button

// Boot
renderDays();
initPrograms();
setupOverridesUI(); // safe if overrides panel is not present
loadSnapshotFromUrl(); // apply + auto-generate if provided
