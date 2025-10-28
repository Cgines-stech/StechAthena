// assets/js/coursesessions.js

// Course Hours Scheduler (Vanilla JS)
// Splits from the single-file version. Pairs with coursesession.html and assets/css/coursesessions.css

(function(){
  const dayLabels = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const wkDays = new Set(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]); // exclude Sunday

  function parseDateISO(v){ // expects yyyy-mm-dd
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
    // 12h like 9:00 AM or 5 PM
    let m = s.match(/^(\d{1,2})(?::(\d{2}))?\s*([AaPp][Mm])$/);
    if(m){
      let hh = Number(m[1])%12; const mm = Number(m[2]||'0');
      if((m[3]||'').toLowerCase()==='pm') hh += 12;
      return hh*60+mm;
    }
    // 24h like 17:30 or 7:00
    m = s.match(/^(\d{1,2}):(\d{2})$/);
    if(m){ return Number(m[1])*60 + Number(m[2]); }
    // plain hour like 9 or 17
    m = s.match(/^(\d{1,2})$/);
    if(m){ return Number(m[1])*60; }
    return null;
  }

  function minutesToHrs(mins){ return Math.round((mins/60)*100)/100; }

  function minutesTo12h(mins){
    let h = Math.floor(mins/60), m = mins%60; const ampm = h>=12? 'PM':'AM'; h = h%12; if(h===0) h=12; return `${h}:${pad(m)} ${ampm}`;
  }

  function eachDay(start,end){
    const days=[]; const d=new Date(start.getFullYear(), start.getMonth(), start.getDate());
    while(d<=end){ days.push(new Date(d)); d.setDate(d.getDate()+1); }
    return days;
  }

  const state = { times: { Monday:{}, Tuesday:{}, Wednesday:{}, Thursday:{}, Friday:{}, Saturday:{} }, rows:[], total:0 };

  function updateTargetTag(){
    const t = Number(document.getElementById('targetHours').value);
    const tag = document.getElementById('targetTag');
    if(!isNaN(t) && t>0){ tag.style.display='inline-block'; tag.textContent = `Target: ${t} hrs`; }
    else { tag.style.display='none'; }
  }

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
    const t = Number(document.getElementById('targetHours').value);
    if(!isNaN(t) && t>0){
      const diff = Math.round((t - state.total)*100)/100;
      if(diff >= 0){ compareBlock.innerHTML = `<span class="good">Remaining to target: ${diff} hrs</span>`; }
      else { compareBlock.innerHTML = `<span class="bad">Over target by: ${Math.abs(diff)} hrs</span>`; }
    }
  }

  function attachEvents(){
    // Hook up time inputs
    document.querySelectorAll('[data-day]').forEach(inp=>{
      inp.addEventListener('input', e=>{
        const day=e.target.getAttribute('data-day');
        const field=e.target.getAttribute('data-field');
        if(!state.times[day]) state.times[day] = {};
        state.times[day][field]=e.target.value;
      })
    })

    document.getElementById('clearBtn').addEventListener('click', ()=>{
      document.getElementById('paste').value='';
    });

    // Parse pasted course JS text
    document.getElementById('parseBtn').addEventListener('click', ()=>{
      const text = document.getElementById('paste').value || '';
      const hrs = /courseClockHours\s*:\s*(\d+(?:\.\d+)?)/.exec(text);
      if(hrs){ document.getElementById('targetHours').value = hrs[1]; }

      const arr = /courseClassroomHours\s*:\s*\[((.|\n)*?)\]/.exec(text);
      if(arr){
        const obj = /\{([\s\S]*?)\}/.exec(arr[1]);
        if(obj){
          const inner = obj[1];
          const get = (key)=>{ const r = new RegExp(`${key}\\s*:\\s*"([^"]*)"`); const m=inner.match(r); return m?m[1]:'' };
          const sd = get('startDate');
          const ed = get('endDate');
          // MM-DD-YYYY
          const mmddyyyy = /^(\d{2})-(\d{2})-(\d{4})$/;
          if(mmddyyyy.test(sd)){
            const m = mmddyyyy.exec(sd); document.getElementById('startDate').value = `${m[3]}-${m[1]}-${m[2]}`;
          }
          if(mmddyyyy.test(ed)){
            const m = mmddyyyy.exec(ed); document.getElementById('endDate').value = `${m[3]}-${m[1]}-${m[2]}`;
          }
          ;['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].forEach(d=>{
            const mm = inner.match(new RegExp(`${d}\\s*:\\s*"([^"]*)"`));
            const val = mm?mm[1]:'';
            const startInp = document.querySelector(`input[data-day="${d}"][data-field="start"]`);
            const endInp   = document.querySelector(`input[data-day="${d}"][data-field="end"]`);
            if(val && val.includes('-')){
              const parts = val.split('-').map(s=>s.trim());
              startInp.value = parts[0]; endInp.value = parts[1];
              state.times[d] = { start:parts[0], end:parts[1] };
            }
          })
        }
      }
      updateTargetTag();
    });

    document.getElementById('targetHours').addEventListener('input', updateTargetTag);

    document.getElementById('generateBtn').addEventListener('click', generate);
    document.getElementById('exportBtn').addEventListener('click', ()=>{
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
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', attachEvents);
  } else {
    attachEvents();
  }
})();
