// assets/js/programcalendar.js
import { listCourseSessions } from "./coursesessions.store.js";

// ---------- helpers ----------
function safeDate(ts) {
  if (!ts) return null;
  if (ts.toDate) { try { return ts.toDate(); } catch {} }
  if (typeof ts === "string") { const d = new Date(ts); return isNaN(d) ? null : d; }
  if (ts instanceof Date) return ts;
  return null;
}
function fmtShort(d) {
  return d ? d.toLocaleDateString(undefined, { month:'short', day:'2-digit', year:'numeric' }) : "—";
}
function monthYearLabel(d){
  return d.toLocaleDateString(undefined, { month:'long', year:'numeric' });
}
function firstOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
function lastOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0); }
function isoOf(d){
  const pad = (n)=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}
function el(tag, html, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function isTimeFilled(v) {
  if (v == null) return false;
  const s = String(v).trim();
  if (!s || s === "?" || s === "-") return false;
  // Accept common formats like "9", "9:00", "9:00 AM", "09:00", etc.
  return /am|pm/i.test(s) || /^\d{1,2}(:\d{2})?$/.test(s);
}

// ---------- DOM refs ----------
const programSel = document.getElementById("programFilter");
const refreshBtn = document.getElementById("refreshBtn");
const countTag   = document.getElementById("countTag");
const sessionListEl = document.getElementById("sessionList");
const legendEl   = document.getElementById("legend");
const monthGrid  = document.getElementById("monthGrid");

// ---------- state ----------
let allDocs = [];          // all sessions for current program
const selected = new Map(); // id -> doc
const palette = [
  "#6EA8FE", "#45D19F", "#FFB86B", "#FF6B6B", "#C792EA",
  "#8BE9FD", "#FFD166", "#80CBC4", "#F78C6C", "#A3BE8C"
];
function colorForId(id) {
  // stable-ish hash to pick a palette index
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

// ---------- data loading ----------
async function bootstrapPrograms() {
  const recent = await listCourseSessions({ max: 200 });
  const programs = Array.from(new Set(recent.map(d => d.program).filter(Boolean))).sort();

  programSel.innerHTML = programs.length
    ? programs.map(p => `<option value="${p}">${p}</option>`).join("")
    : `<option value="">(no programs found)</option>`;
}

async function loadForSelectedProgram() {
  selected.clear();
  legendEl.innerHTML = "";
  monthGrid.innerHTML = "";
  sessionListEl.innerHTML = "";

  const program = programSel.value || "";
  if (!program) {
    countTag.style.display = "none";
    return;
  }

  allDocs = await listCourseSessions({ program, max: 200 });

  countTag.textContent = `${allDocs.length} session${allDocs.length===1?"":"s"}`;
  countTag.style.display = "inline-block";

  renderSessionChecklist(allDocs);
}

// ---------- UI: session checklist ----------
function renderSessionChecklist(docs) {
  sessionListEl.innerHTML = "";

  if (!docs.length) {
    sessionListEl.appendChild(el("div", "No sessions found for this program.", "empty"));
    return;
  }

  for (const d of docs) {
    const rows = Array.isArray(d.rows) ? d.rows : [];
    const firstISO = rows[0]?.date || null;
    const lastISO  = rows[rows.length-1]?.date || firstISO;

    const row = el("div", null, "sessrow");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = d.id || d.__id || Math.random().toString(36).slice(2);

    const right = document.createElement("div");
    const title = el("div", d.course || "(untitled course)", "title");
    const meta  = el("div",
      `<span class="meta">${d.program || ""}</span> · <span class="meta">Range: ${fmtShort(firstISO ? new Date(firstISO) : null)} – ${fmtShort(lastISO ? new Date(lastISO) : null)}</span>`
    );

    right.appendChild(title);
    right.appendChild(meta);

    row.appendChild(checkbox);
    row.appendChild(right);
    sessionListEl.appendChild(row);

    checkbox.addEventListener("change", () => onToggle(checkbox.checked, d, checkbox.dataset.id));
  }
}

// ---------- selection handling ----------
function onToggle(checked, doc, id) {
  if (checked) {
    selected.set(id, { ...doc, _color: colorForId(id), _id: id });
  } else {
    selected.delete(id);
  }
  renderLegend();
  renderVisualCalendar();
}

function renderLegend() {
  legendEl.innerHTML = "";
  if (!selected.size) return;

  for (const { _id, _color, course } of selected.values()) {
    const chip = el("div", null, "chip");
    const dot  = el("span", "", "dot");
    dot.style.background = _color;
    chip.appendChild(dot);
    chip.appendChild(document.createTextNode(course || "(untitled course)"));
    legendEl.appendChild(chip);
  }
}

// ---------- calendar renderer ----------
function renderVisualCalendar() {
  monthGrid.innerHTML = "";
  if (!selected.size) return;

  // Build date -> array of entries from each selected session
  const byIso = Object.create(null);
  let start = null, end = null;

  for (const doc of selected.values()) {
  const rows = Array.isArray(doc.rows) ? doc.rows : [];
  for (const r of rows) {
    const iso = r.date; // YYYY-MM-DD
    if (!iso) continue;

    const d = new Date(iso);
    if (!start || d < start) start = d;
    if (!end || d > end) end = d;

    const slots = Array.isArray(r.slots) ? r.slots : [];
    const cleanSlots = slots.filter(s => isTimeFilled(s.start) && isTimeFilled(s.end));

    if (!byIso[iso]) byIso[iso] = [];

    if (cleanSlots.length) {
      // Render only valid time ranges
      for (const s of cleanSlots) {
        const line1 = `${doc.course || "(untitled)"}: ${s.start} – ${s.end}`;
        const line2 = `Run: ${r.running ?? "—"} hrs`;
        byIso[iso].push({
          color: doc._color,
          course: doc.course || "(untitled)",
          lines: [line1, line2]
        });
      }
    } else if (r?.hours || r?.running) {
      // No explicit times, but we do have hours/running — show a summary
      const l1 = `${doc.course || "(untitled)"}`;
      const l2 = `Hours: ${r.hours ?? "—"} • Run: ${r.running ?? "—"} hrs`;
      byIso[iso].push({
        color: doc._color,
        course: doc.course || "(untitled)",
        lines: [l1, l2]
      });
    }
    // else: no valid times and no hours info — render nothing for this date
  }
}


  if (!start || !end) return;

  renderMonthGrid(start, end, byIso);
}

function renderMonthGrid(s, e, map) {
  monthGrid.innerHTML = "";

  const startMonth = new Date(s.getFullYear(), s.getMonth(), 1);
  const endMonth   = new Date(e.getFullYear(), e.getMonth(), 1);

  for (let cur = new Date(startMonth); cur <= endMonth; cur.setMonth(cur.getMonth()+1)) {
    const first = firstOfMonth(cur);
    const last  = lastOfMonth(cur);

    const monthEl = document.createElement('div');
    monthEl.className = 'month';

    // Header
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
    for (let i=0; i<first.getDay(); i++) {
      const blank = document.createElement('div');
      blank.className = 'daycell inactive';
      weekEl.appendChild(blank);
    }

    // Days
    for (let day=1; day<=last.getDate(); day++) {
      const d = new Date(first.getFullYear(), first.getMonth(), day);
      const iso = isoOf(d);
      const cell = document.createElement('div');
      cell.className = 'daycell';
      cell.innerHTML = `<div class="date-num">${day}</div>`;

      const entries = map[iso] || [];
      for (const ent of entries) {
        const wrap = el("div", null, "entry");
        wrap.style.borderLeftColor = ent.color;

        // Line 1: title + times (bold)
        const l1 = el("div", ent.lines[0] || "", "line1");
        // Line 2: running total
        const l2 = el("div", ent.lines[1] || "", "line2");

        wrap.appendChild(l1);
        wrap.appendChild(l2);
        cell.appendChild(wrap);
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
    monthGrid.appendChild(monthEl);
  }
}

// ---------- wire up ----------
refreshBtn.addEventListener("click", loadForSelectedProgram);

// boot
await bootstrapPrograms();
await loadForSelectedProgram();
