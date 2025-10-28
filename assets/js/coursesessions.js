// assets/js/coursesessions.js
// ES Module with multiple time slots per day + Program/Course dropdowns + dynamic import of course files.

const dayLabels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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
function minutesTo12h(mins){
  let h = Math.floor(mins/60), m = mins%60; const ampm = h>=12? 'PM':'AM';
  h = h%12; if(h===0) h=12; return `${h}:${pad(m)} ${ampm}`;
}
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
        <button class="smallbtn addslot" data-add="${d}" type="button">+ Add time</button>
      </div>
      <div class="slots" data-slots="${d}"></div>
    </div>
  `).join('');

  // seed one empty slot for each day
  DAYS.forEach(d => {
    if (!state.times[d] || state.times[d].length === 0) {
      addSlot(d, "", "");
    } else {
      // re-render existing slots (e.g., after selecting a course)
      const arr = state.times[d];
      state.times[d] = []; // will be repopulated by addSlot
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

  // push into state
  const slot = { start: startVal || "", end: endVal || "" };
  state.times[day].push(slot);
  const index = state.times[day].length - 1;

  const row = document.createElement('div');
  row.className = 'slotrow';
  row.setAttribute('data-slot-day', day);
  row.setAttribute('data-slot-idx', String(index));
  row.innerHTML = `
    <div>
      <label class="tinylabel">Start</label>
      <input type="text" placeholder="9:00 AM" value="${slot.start}">
    </div>
    <div>
      <label class="tinylabel">End</label>
      <input type="text" placeholder="1:00 PM" value="${slot.end}">
    </div>
    <div>
      <button class="smallbtn removebtn" type="button">Remove</button>
    </div>
  `;

  // wire inputs
  const inputs = row.querySelectorAll('input');
  inputs[0].addEventListener('input', e => {
    slot.start = e.target.value;
  });
  inputs[1].addEventListener('input', e => {
    slot.end = e.target.value;
  });

  // remove button
  row.querySelector('.removebtn').addEventListener('click', () => {
    // remove from state
    const arr = state.times[day];
    const i = Array.from(slotsEl.children).indexOf(row);
    if (i >= 0) { arr.splice(i, 1); }
    row.remove();
    // ensure at least one slot row remains to keep UI approachable
    if (slotsEl.children.length === 0) addSlot(day, "", "");
  });

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

function setDateIfValid(inputEl, mmddyyyy){
  const re = /^(\d{2})-(\d{2})-(\d{4})$/; // MM-DD-YYYY
  if (re.test(mmddyyyy)){
    const m = re.exec(mmddyyyy);
    inputEl.value = `${m[3]}-${m[1]}-${m[2]}`; // -> yyyy-mm-dd
  }
}

function applyCourseDefaults(course){
  // 1) clock hours
  setTargetHours(course?.courseClockHours);

  // 2) classroom hours block (dates + day windows)
  const ch = Array.isArray(course?.courseClassroomHours) ? course.courseClassroomHours[0] : null;
  if (ch){
    const startDateEl = document.getElementById('startDate');
    const endDateEl   = document.getElementById('endDate');

    if (ch.startDate) setDateIfValid(startDateEl, ch.startDate);
    if (ch.endDate)   setDateIfValid(endDateEl,   ch.endDate);

    // For each day, if string like "9:00 AM - 5:00 PM", set a single slot.
    DAYS.forEach(d=>{
      const v = ch[d];
      if (typeof v === 'string' && v.includes('-')){
        const [st, en] = v.split('-').map(s=>s.trim());
        state.times[d] = [{ start: st, end: en }];
      } else {
        state.times[d] = []; // clear if not present
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

// ---- Generate / Export ----
function generate(){
  const s = parseDateISO(document.getElementById('startDate').value);
  const e = parseDateISO(document.getElementById('endDate').value);
  const tbody = document.querySelector('#table tbody');
  const tfoot = document.querySelector('#table tfoot');
  const cal = document.getElementById('calendar');
  const compareBlock = document.getElementById('compareBlock');
  tbody.innerHTML=''; cal.innerHTML=''; compareBlock.innerHTML='';
  state.rows=[]; state.total=0;

  if(!s || !e || e<s){ tbody.innerHTML = `<tr><td colspan="6">Enter a valid date range.</td></tr>`; tfoot.style.display='none'; return; }

  const days = eachDay(s,e);
  let dayNum=0; let running=0;

  for(const d of days){
    const dow = dayLabels[d.getDay()];
    if(!wkDays.has(dow)) continue; // skip Sundays
    const slots = state.times[dow] || [];
    let totalMins = 0;

    // Sum each valid slot for that day
    for (const {start, end} of slots){
      const startM = timeToMinutes(start);
      const endM   = timeToMinutes(end);
      if(startM==null || endM==null || endM<=startM) continue;
      totalMins += (endM - startM);
    }

    if (totalMins <= 0) continue;

    const hrs = minutesToHrs(totalMins);
    running = Math.round((running + hrs)*100)/100;
    dayNum += 1;

    state.rows.push({ day:dayNum, date:new Date(d), hours:hrs, running });

    // Table row (note: we show combined start/end not relevant; we keep hours per day)
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${dayNum}</td>
      <td>${formatDateHuman(d)}</td>
      <td colspan="2">Multiple slots</td>
      <td>${hrs}</td>
      <td>${running}</td>`;
    tbody.appendChild(tr);

    // Calendar card
    const cd = document.createElement('div'); cd.className='calday';
    cd.innerHTML = `
      <div class="meta">Day ${dayNum}</div>
      <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
      <div class="meta">${hrs} hrs • run: ${running}</div>`;
    cal.appendChild(cd);
  }

  state.total = running;
  if(state.rows.length===0){
    tbody.innerHTML = `<tr><td colspan="6">No sessions. Add times and try again.</td></tr>`;
    tfoot.style.display='none';
  } else {
    document.getElementById('totalHours').textContent = state.total;
    tfoot.style.display='table-footer-group';
  }

  // Compare to target
  const t = Number(targetHoursEl.value);
  if(!isNaN(t) && t>0){
    const diff = Math.round((t - state.total)*100)/100;
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
