// assets/js/coursesessions.js
// ES Module: populates Program/Course selectors by dynamically importing course files.
// Also handles schedule generation, CSV export, and target-hour comparison.

const dayLabels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const wkDays = new Set(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]); // exclude Sunday

/** ---- Registries: map program names to module paths ----
 * Add your programs/courses here. Paths are relative to coursesession.html.
 * If your actual tree differs, adjust these paths accordingly.
 */
const PROGRAM_FILE_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/program.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/program.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/program.js",
};

// List of course module files per program (each module exports a default array with one object)
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

function encodePath(p) {
  // safely encode spaces for GitHub Pages
  return p.replace(/ /g, "%20");
}

// ------- date & time helpers -------
function parseDateISO(v){
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v||"");
  if(!m) return null;
  const d = new Date(Number(m[1]), Number(m[2])-1, Number(m[3]));
  if(Number.isNaN(d.getTime())) return null; return d;
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

// ------- app state -------
const state = {
  times: { Monday:{}, Tuesday:{}, Wednesday:{}, Thursday:{}, Friday:{}, Saturday:{} },
  rows:[],
  total:0,
  coursesCache: new Map(), // key: module path, value: course object
};

// ------- UI refs -------
const programSelect = document.getElementById('programSelect');
const courseSelect  = document.getElementById('courseSelect');
const targetHoursEl = document.getElementById('targetHours');
const targetTag     = document.getElementById('targetTag');

// Hook up time inputs to state
document.querySelectorAll('[data-day]').forEach(inp=>{
  inp.addEventListener('input', e=>{
    const day=e.target.getAttribute('data-day');
    const field=e.target.getAttribute('data-field');
    if(!state.times[day]) state.times[day] = {};
    state.times[day][field]=e.target.value;
  })
});

// init program dropdown
function initPrograms(){
  const programs = Object.keys(PROGRAM_COURSE_REGISTRY).sort();
  programSelect.innerHTML = programs.map(p => `<option value="${p}">${p}</option>`).join('');
  programSelect.addEventListener('change', onProgramChange);
  onProgramChange(); // load first
}

async function onProgramChange(){
  const prog = programSelect.value;
  const files = PROGRAM_COURSE_REGISTRY[prog] || [];
  courseSelect.disabled = true;
  courseSelect.innerHTML = `<option>Loading courses…</option>`;

  // load each course module to build labels
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
      // Leave a fallback option with the filename so you can spot path issues
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
    // clear course-linked UI
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

    // Copy Mon–Sat "9:00 AM - 5:00 PM" style times into inputs/state
    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].forEach(d=>{
      const v = ch[d];
      const startInp = document.querySelector(`input[data-day="${d}"][data-field="start"]`);
      const endInp   = document.querySelector(`input[data-day="${d}"][data-field="end"]`);
      if (typeof v === 'string' && v.includes('-')){
        const [st, en] = v.split('-').map(s=>s.trim());
        startInp.value = st; endInp.value = en;
        state.times[d] = { start:st, end:en };
      } else {
        // clear if not present
        if (startInp) startInp.value = '';
        if (endInp)   endInp.value   = '';
        state.times[d] = {};
      }
    });
  }
}

async function onCourseChange(){
  const path = courseSelect.value;
  // try cache first
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

// ------- Generate / Export logic -------
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
    const cfg = state.times[dow]||{};
    const startM = timeToMinutes(cfg.start||'');
    const endM   = timeToMinutes(cfg.end||'');
    if(startM==null || endM==null || endM<=startM) continue;
    const mins = endM - startM;
    const hrs = minutesToHrs(mins);
    running = Math.round((running + hrs)*100)/100;
    dayNum += 1;

    state.rows.push({ day:dayNum, date:new Date(d), startM, endM, hours:hrs, running });

    // Table row
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${dayNum}</td>
      <td>${formatDateHuman(d)}</td>
      <td>${minutesTo12h(startM)}</td>
      <td>${minutesTo12h(endM)}</td>
      <td>${hrs}</td>
      <td>${running}</td>`;
    tbody.appendChild(tr);

    // Calendar card
    const cd = document.createElement('div'); cd.className='calday';
    cd.innerHTML = `
      <div class="meta">Day ${dayNum}</div>
      <div class="date">${d.toLocaleDateString(undefined,{ weekday:'short', month:'short', day:'numeric'})}</div>
      <div class="meta">${minutesTo12h(startM)} – ${minutesTo12h(endM)}</div>
      <div class="meta">${hrs} hrs • run: ${running}</div>`;
    cal.appendChild(cd);
  }

  state.total = running;
  if(state.rows.length===0){
    tbody.innerHTML = `<tr><td colspan="6">No sessions. Fill weekday times and try again.</td></tr>`;
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
    minutesTo12h(r.startM),
    minutesTo12h(r.endM),
    r.hours,
    r.running
  ]);
  const all = [headers, ...rows];
  const csv = all.map(row => row.map(cell => '"'+String(cell).replaceAll('"','""')+'"').join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'course_schedule.csv'; a.click(); URL.revokeObjectURL(url);
}

// wire buttons
document.getElementById('generateBtn').addEventListener('click', generate);
document.getElementById('exportBtn').addEventListener('click', exportCSV);

// boot
initPrograms();
