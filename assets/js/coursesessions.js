/* assets/js/coursesessions.js */
// ES Module with multiple time slots per day + Program/Course dropdowns,
// dynamic import of course files, per-date Overrides (add/edit/remove),
// Visual Month Calendar, instructor loader/editor, High School flag,
// Notes, and Externship/Clinical preset with lockable UI.

import { campusClosedDates } from "./baddates.js";
import { saveCourseSession } from "./coursesessions.store.js";

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
function renderSlotLines(slots){
  if (!Array.isArray(slots) || !slots.length) return '';
  const items = slots.map(s => `<li>${s.start} - ${s.end}</li>`).join('');
  return `<ul class="slotslist">${items}</ul>`;
}
function isoOf(d){
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}
function firstOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
function lastOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0); }

// ---- State ----
const state = {
  times: Object.fromEntries(DAYS.map(d => [d, [] /* array of {start,end} */])),
  rows:[],
  total:0,
  coursesCache: new Map(),
  // Overrides keyed by ISO date "YYYY-MM-DD": { type: 'add'|'edit'|'remove', slots?: [{start,end}] }
  overrides: Object.create(null),
  // Instructors loaded from program file, editable before save
  instructors: [], // [{ name, email, title }]
  // Flags
  externshipClinical: false,
  _savedTimesPattern: null,
  _progToken: 0,
};

// ---- UI refs ----
const programSelect = document.getElementById('programSelect');
const courseSelect  = document.getElementById('courseSelect');
const targetHoursEl = document.getElementById('targetHours');
const targetTag     = document.getElementById('targetTag');
const daysContainer = document.getElementById('daysContainer');
const displayNameEl = document.getElementById('displayName');
const isHighSchoolEl = document.getElementById('isHighSchool');
const notesEl = document.getElementById('notes');
const externshipEl = document.getElementById('externshipClinical');

// ---- Small helpers ----
function setDisabled(el, yes){
  if(!el) return;
  if(yes) el.setAttribute('disabled','disabled');
  else el.removeAttribute('disabled');
}

// ---- Render Days with slot controls ----
function renderDays(){
  daysContainer.innerHTML = DAYS.map(d => `
    <div class="daybox" data-daybox="${d}">
      <div class="header">
        <div class="tag">${d}</div>
      </div>
      <div class="slots" data-slots="${d}"></div>
      <div class="addrow">
        <button class="smallbtn addslot" data-add="${d}" type="button" ${state.externshipClinical ? 'disabled' : ''}>+Add Addition Time</button>
      </div>
    </div>
  `).join('');

  // seed UI
  DAYS.forEach(d => {
    const arr = state.times[d] || [];
    if (arr.length === 0 && !state.externshipClinical){
      // show an empty slot line for convenience when editable
      addSlot(d, "", "");
    } else if (arr.length){
      const copy = arr.slice();
      state.times[d] = [];
      copy.forEach(s => addSlot(d, s.start || "", s.end || ""));
    }
  });

  // add-slot buttons
  daysContainer.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', () => {
      if (state.externshipClinical) return; // locked
      const day = btn.getAttribute('data-add');
      addSlot(day, "", "");
    });
  });
}

function addSlot(day, startVal, endVal){
  const slotsEl = daysContainer.querySelector(`[data-slots="${day}"]`);
  if(!slotsEl) return;

  const slot = { start: startVal || "", end: endVal || "" };
  state.times[day] = state.times[day] || [];
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
  if (state.externshipClinical) {
    inputs.forEach(i => i.setAttribute('disabled','disabled'));
  } else {
    inputs[0].addEventListener('input', e => { slot.start = e.target.value; });
    inputs[1].addEventListener('input', e => { slot.end   = e.target.value;  });
  }

  slotsEl.appendChild(row);
}

/** ---------------- Instructors: load + edit ---------------- */
async function loadInstructorsForProgram(programName){
  if (!programName) {
    state.instructors = [];
    renderInstructors();
    return;
  }
  const rel = `../../data/programs/${programName}/instructors.js`;
  try {
    const mod = await import(encodePath(rel));
    const arr = Array.isArray(mod.default) ? mod.default : (mod.default ? [mod.default] : []);
    state.instructors = arr.map(x => ({
      name: x?.name || "",
      email: x?.email || "",
      title: x?.title || "",
    }));
  } catch (e) {
    console.warn("No instructors.js or failed to load for program:", programName, e);
    state.instructors = []; // allow manual entry
  }
  renderInstructors();
}

function renderInstructors(){
  const wrap = document.getElementById("instructorList");
  if (!wrap) return;
  if (!Array.isArray(state.instructors) || state.instructors.length === 0){
    wrap.innerHTML = `<div class="hint">No instructors loaded. Use “+ Add Instructor”.</div>`;
    wireInstructorAddBtn();
    return;
  }

  wrap.innerHTML = state.instructors.map((ins, idx) => `
    <div class="row" data-ins-idx="${idx}" style="align-items:end; gap:10px; margin-bottom:8px">
      <div><label class="tinylabel">Name</label><input type="text" value="${ins.name || ""}" placeholder="Jane Doe"></div>
      <div><label class="tinylabel">Email</label><input type="text" value="${ins.email || ""}" placeholder="jdoe@stech.edu"></div>
      <div><label class="tinylabel">Title</label><input type="text" value="${ins.title || ""}" placeholder="Instructor"></div>
      <div><button class="smallbtn danger" type="button" data-del-ins="${idx}">Remove</button></div>
    </div>
  `).join("");

  // wire inputs
  wrap.querySelectorAll("[data-ins-idx]").forEach(row => {
    const idx = Number(row.getAttribute("data-ins-idx"));
    const inputs = row.querySelectorAll("input");
    inputs[0]?.addEventListener("input", e => state.instructors[idx].name  = e.target.value);
    inputs[1]?.addEventListener("input", e => state.instructors[idx].email = e.target.value);
    inputs[2]?.addEventListener("input", e => state.instructors[idx].title = e.target.value);
  });

  // wire remove buttons
  wrap.querySelectorAll("[data-del-ins]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-del-ins"));
      state.instructors.splice(idx, 1);
      renderInstructors();
    });
  });

  wireInstructorAddBtn();
}

function wireInstructorAddBtn(){
  const addBtn = document.getElementById("addInstructorBtn");
  if (!addBtn) return;
  addBtn.onclick = () => {
    state.instructors.push({ name:"", email:"", title:"Instructor" });
    renderInstructors();
  };
}

// ---- Program/Course dynamic import ----
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
  // Respect externship lock: do not overwrite preset times
  if (state.externshipClinical) return;

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

    // For each day, if string like "9:00 AM - 5:00 PM", set a single slot.
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

    renderDays(); // re-render UI with those defaults
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

async function onProgramChange(){
  const prog = programSelect.value;

  // token to avoid race conditions if user changes program quickly
  state._progToken = (state._progToken || 0) + 1;
  const token = state._progToken;

  // UI pre-state
  const files = PROGRAM_COURSE_REGISTRY[prog] || [];
  courseSelect.disabled = true;
  courseSelect.innerHTML = `<option>Loading courses…</option>`;

  const loadCoursesPromise = (async () => {
    const loaded = [];
    for (const relPath of files){
      try {
        const mod = await import(encodePath(relPath));
        const arr = Array.isArray(mod.default) ? mod.default : [mod.default];
        const course = arr[0] || {};
        const label = [course.courseNumber, course.courseName]
          .filter(Boolean)
          .join(' — ') || relPath.split('/').pop();
        state.coursesCache.set(relPath, course);
        loaded.push({ path: relPath, label });
      } catch (e) {
        const filename = relPath.split('/').pop();
        loaded.push({ path: relPath, label: `⚠ ${filename} (load error)` });
        console.error('Import failed:', relPath, e);
      }
    }
    return loaded;
  })();

  const [loaded] = await Promise.all([
    loadCoursesPromise,
    loadInstructorsForProgram(prog)
  ]);

  if (token !== state._progToken) return; // stale

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
  if(!el) return; // HTML not present
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

  if(!typeSel || !dateEl || !addBtn){
    return; // panel absent
  }

  const syncTimesVisibility = () => {
    const t = typeSel.value;
    if(timesRow) timesRow.style.display = (t === 'remove') ? 'none' : '';
  };
  syncTimesVisibility();
  typeSel.addEventListener('change', syncTimesVisibility);

  addBtn.addEventListener('click', () => {
    if (state.externshipClinical) return; // locked

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
        alert('Add at least one valid time slot like "12:00 PM - 8:00 PM".');
        return;
      }
      state.overrides[iso] = { type: t, slots };
    }

    renderOverridesList();
  });

  renderOverridesList();
}

// ---- Externship/Clinical preset ----
function applyExternshipPreset(enabled){
  state.externshipClinical = !!enabled;

  const startDateEl = document.getElementById('startDate');
  const endDateEl   = document.getElementById('endDate');

  const typeSel = document.getElementById('overrideType');
  const dateEl  = document.getElementById('overrideDate');
  const timesEl = document.getElementById('overrideTimes');
  const addBtn  = document.getElementById('addOverrideBtn');

  if (enabled){
    if (!state._savedTimesPattern){
      state._savedTimesPattern = JSON.parse(JSON.stringify(state.times));
    }
    // Auto-fill Mon–Fri 12–8; Saturday blank
    DAYS.forEach(d => {
      if (["Monday","Tuesday","Wednesday","Thursday","Friday"].includes(d)){
        state.times[d] = [{ start:"12:00 PM", end:"8:00 PM" }];
      } else {
        state.times[d] = [];
      }
    });

    // Lock inputs
    setDisabled(startDateEl, true);
    setDisabled(endDateEl,   true);
    setDisabled(typeSel,     true);
    setDisabled(dateEl,      true);
    setDisabled(timesEl,     true);
    setDisabled(addBtn,      true);
  } else {
    if (state._savedTimesPattern){
      state.times = state._savedTimesPattern;
      state._savedTimesPattern = null;
    }
    setDisabled(startDateEl, false);
    setDisabled(endDateEl,   false);
    setDisabled(typeSel,     false);
    setDisabled(dateEl,      false);
    setDisabled(timesEl,     false);
    setDisabled(addBtn,      false);
  }

  renderDays();
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

    const leadBlanks = first.getDay();
    for(let i=0;i<leadBlanks;i++){
      const blank = document.createElement('div');
      blank.className = 'daycell inactive';
      weekEl.appendChild(blank);
    }

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
          if (entry.slots?.length) {
            cell.innerHTML += renderSlotLines(entry.slots);
          }
        } else if (entry.status === 'normal') {
          cell.classList.add('has-schedule');
          if (entry.slots?.length) {
            cell.innerHTML += renderSlotLines(entry.slots);
          }
        }
      }

      weekEl.appendChild(cell);

      if (d.getDay() === 6) {
        weeksFrag.appendChild(weekEl);
        weekEl = document.createElement('div');
        weekEl.className = 'week';
      }
    }

    const lastDow = lastOfMonth(cur).getDay();
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
    cal.innerHTML = `<div class='calday closed'>Enter a valid date range.</div>`;
    document.getElementById('monthGrid')?.replaceChildren();
    return;
  }

  const days = eachDay(s, e);
  let dayNum = 0;
  let running = 0;

  for (const d of days) {
    const dow = dayLabels[d.getDay()];
    const iso = isoOf(d);
    const ov = state.externshipClinical ? null : (state.overrides[iso] || null);

    // 1) Override: remove
    if (ov?.type === 'remove') {
      const cd = document.createElement('div');
      cd.className = 'calday closed override override-remove';
      cd.innerHTML = `
        <div class='meta'>Removed</div>
        <div class='date'>${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        <div class='meta'>Removed by override</div>
      `;
      cal.appendChild(cd);
      monthEntries[iso] = { status:'override-remove' };
      continue;
    }

    // 2) Override: add/edit (wins over campusClosed + weekday rules)
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

      state.rows.push({
        day: dayNum,
        date: new Date(d),
        hours: hrs,
        running,
        slots: slotsToUse.map(s => ({ start: s.start, end: s.end })),
        overridden: true
      });

      const cd = document.createElement('div');
      cd.className = `calday override override-${ov.type}`;
      cd.innerHTML = `
        <div class='meta'>Day ${dayNum} • ${ov.type.toUpperCase()}</div>
        <div class='date'>${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        ${renderSlotLines(slotsToUse)}
        <div class='meta'>${hrs} hrs • run: ${running}</div>
      `;
      cal.appendChild(cd);

      monthEntries[iso] = { status:'override-' + ov.type, slots: slotsToUse.slice() };
      continue;
    }

    // 3) No override => campus closed?
    if (isCampusClosedDate(d)) {
      const cd = document.createElement('div');
      cd.className = 'calday closed';
      cd.innerHTML = `
        <div class='meta'>Closed</div>
        <div class='date'>${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        <div class='meta'>Campus Closed</div>
      `;
      cal.appendChild(cd);
      monthEntries[iso] = { status:'closed' };
      continue;
    }

    // 4) Normal weekday pattern (Mon–Sat set; Sundays skipped)
    if (!wkDays.has(dow)) {
      continue;
    }

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

    state.rows.push({
      day: dayNum,
      date: new Date(d),
      hours: hrs,
      running,
      slots: slots.map(s => ({ start: s.start, end: s.end })),
      overridden: false
    });

    const cd = document.createElement('div');
    cd.className = 'calday';
    cd.innerHTML = `
      <div class='meta'>Day ${dayNum}</div>
      <div class='date'>${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
      <div class='meta'>${hrs} hrs • run: ${running}</div>
    `;
    cal.appendChild(cd);

    monthEntries[iso] = { status:'normal', slots: slots.slice() };
  }

  state.total = running;

  if (state.rows.length === 0) {
    cal.innerHTML = `<div class='calday closed'>No sessions. Add times and try again.</div>`;
  }

  const t = Number(targetHoursEl.value);
  if (!isNaN(t) && t > 0) {
    const diff = Math.round((t - state.total) * 100) / 100;
    compareBlock.innerHTML = diff >= 0
      ? `<span class='good'>Remaining to target: ${diff} hrs</span>`
      : `<span class='bad'>Over target by: ${Math.abs(diff)} hrs</span>`;
  }

  renderMonthCalendars(s, e, monthEntries);
}

function exportCSV(){
  if(!state.rows.length){ alert('Nothing to export. Generate first.'); return; }
  const headers = ['Day','Date','Start Time(s)','Overridden','Hours','Running Total'];
  const rows = state.rows.map(r=>{
    const startEndJoined = (r.slots || []).map(s => `${s.start} - ${s.end}`).join(' | ') || '—';
    return [
      r.day,
      formatDateHuman(r.date),
      startEndJoined,
      r.overridden ? 'Yes' : 'No',
      r.hours,
      r.running
    ];
  });
  const all = [headers, ...rows];
  const csv = all.map(row => row.map(cell => '"'+String(cell).replaceAll('"','""')+'"').join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'course_schedule.csv'; a.click(); URL.revokeObjectURL(url);
}

// ---- Payload for Firestore ----
function hasAnyOverrides(){
  return Object.keys(state.overrides || {}).length > 0;
}

function collectPayloadForFirestore() {
  const program = document.getElementById('programSelect').value || '';
  const coursePath = document.getElementById('courseSelect').value || '';
  const courseLabel = document.getElementById('courseSelect').selectedOptions?.[0]?.textContent || '';
  const displayName = displayNameEl?.value?.trim() || null;

  const startISO = document.getElementById('startDate').value || '';
  const endISO   = document.getElementById('endDate').value || '';

  const isHighSchool = !!isHighSchoolEl?.checked;
  const notes = (notesEl?.value || '').trim() || null;

  const instructors = (state.instructors || []).map(x => ({
    name: (x.name || '').trim(),
    email: (x.email || '').trim(),
    title: (x.title || '').trim(),
  })).filter(x => x.name || x.email);

  return {
    program,
    course: courseLabel || coursePath,
    targetHours: Number(targetHoursEl.value) || null,
    startDate: startISO,
    endDate: endISO,
    displayName,

    // Flags & notes & instructors
    highSchool: isHighSchool,
    externshipClinical: !!state.externshipClinical,
    notes,
    instructors,

    // rows now carry overridden flag per day
    rows: state.rows.map(r => ({
      day: r.day,
      date: r.date.toISOString().split('T')[0],
      hours: r.hours,
      running: r.running,
      overridden: !!r.overridden,
      slots: (r.slots || []).map(s => ({ start: s.start, end: s.end }))
    })),

    total: state.total,

    hasOverrides: hasAnyOverrides(),
    overrides: state.overrides,

    version: 3,
  };
}

async function saveAfterGenerate() {
  try {
    if (!state.rows.length) {
      alert('Generate first so we have rows and totals to save.');
      return;
    }
    const payload = collectPayloadForFirestore();
    const id = await saveCourseSession(payload);
    alert(`Saved! ID: ${id}`);
  } catch (e) {
    console.error(e);
    alert(e.message || 'Failed to save. Are you signed in?');
  }
}

// Buttons
const genBtn = document.getElementById('generateBtn');
const exportBtn = document.getElementById('exportBtn');
const saveBtn = document.getElementById('saveBtn');

genBtn?.addEventListener('click', generate);
exportBtn?.addEventListener('click', exportCSV);
saveBtn?.addEventListener('click', saveAfterGenerate);

// Boot wiring
function initPrograms(){
  const programs = Object.keys(PROGRAM_COURSE_REGISTRY).sort();
  programSelect.innerHTML = programs.map(p => `<option value="${p}">${p}</option>`).join('');
  programSelect.addEventListener('change', onProgramChange);
  onProgramChange();
}

function setupOverridesUIWrapper(){
  setupOverridesUI(); // safe if overrides panel is not present
}

// Externship checkbox wiring
externshipEl?.addEventListener('change', (e) => {
  applyExternshipPreset(!!e.target.checked);
});

// Initial renders
renderDays();
initPrograms();
setupOverridesUIWrapper();
applyExternshipPreset(!!externshipEl?.checked);
