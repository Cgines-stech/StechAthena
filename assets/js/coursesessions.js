// ES Module with multiple time slots per day + Program/Course dropdowns,
// dynamic import of course files, and per-date Overrides (add/edit/remove).

import { campusClosedDates } from "./baddates.js";

const dayLabels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // UI-editable days
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

  // No per-slot remove button (per earlier request). We keep at least one slot visible by default.

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
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
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

  // If the overrides panel isn't present, skip wiring.
  if(!typeSel || !dateEl || !addBtn){
    return;
  }

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
    // leave fields as-is; user may add several
  });

  renderOverridesList();
}

// ---- Generate / Export ----
function generate(){
  const s = parseDateISO(document.getElementById('startDate').value);
  const e = parseDateISO(document.getElementById('endDate').value);
  const cal = document.getElementById('calendar');
  const compareBlock = document.getElementById('compareBlock');
  cal.innerHTML = '';
  compareBlock.innerHTML = '';
  state.rows = [];
  state.total = 0;

  if (!s || !e || e < s) {
    cal.innerHTML = `<div class="calday closed">Enter a valid date range.</div>`;
    return;
  }

  const days = eachDay(s, e);
  let dayNum = 0;
  let running = 0;

  for (const d of days) {
    const dow = dayLabels[d.getDay()];
    const iso = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

    // Campus closed always wins
    const dStr = `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}-${d.getFullYear()}`;
    if (campusClosedDates.some(c => c.date === dStr)) {
      const cd = document.createElement('div');
      cd.className = 'calday closed';
      cd.innerHTML = `
        <div class="meta">Closed</div>
        <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        <div class="meta">Campus Closed</div>
      `;
      cal.appendChild(cd);
      continue;
    }

    const ov = state.overrides[iso];

    // Decide which slots to use:
    // - remove: skip
    // - edit: use override slots (even if it’s Sunday)
    // - add: include date using override slots (even if not in wkDays)
    // - default: if weekday allowed, use pattern for that weekday
    let slotsToUse = [];
    let useDay = false;

    if (ov?.type === 'remove') {
      const cd = document.createElement('div');
      cd.className = 'calday closed';
      cd.innerHTML = `
        <div class="meta">Removed</div>
        <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
        <div class="meta">Removed by override</div>
      `;
      cal.appendChild(cd);
      continue;
    } else if (ov?.type === 'edit') {
      slotsToUse = ov.slots || [];
      useDay = slotsToUse.length > 0;
    } else if (ov?.type === 'add') {
      slotsToUse = ov.slots || [];
      useDay = slotsToUse.length > 0;
    } else if (wkDays.has(dow)) {
      slotsToUse = state.times[dow] || [];
      useDay = true;
    } else {
      continue; // non-weekday and no override
    }

    // Sum valid minutes
    let totalMins = 0;
    for (const { start, end } of slotsToUse) {
      const startM = timeToMinutes(start);
      const endM   = timeToMinutes(end);
      if (startM == null || endM == null || endM <= startM) continue;
      totalMins += (endM - startM);
    }
    if (!useDay || totalMins <= 0) {
      continue; // nothing to render
    }

    const hrs = minutesToHrs(totalMins);
    running = Math.round((running + hrs) * 100) / 100;
    dayNum += 1;

    state.rows.push({ day: dayNum, date: new Date(d), hours: hrs, running });

    // Calendar card
    const cd = document.createElement('div');
    cd.className = 'calday';
    cd.innerHTML = `
      <div class="meta">Day ${dayNum}${ov ? ` • ${ov.type.toUpperCase()}` : ''}</div>
      <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
      <div class="meta">${hrs} hrs • run: ${running}</div>
    `;
    cal.appendChild(cd);
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

// Buttons
document.getElementById('generateBtn').addEventListener('click', generate);
document.getElementById('exportBtn').addEventListener('click', exportCSV);

// Boot
renderDays();
initPrograms();
setupOverridesUI(); // safe if overrides panel is not present
