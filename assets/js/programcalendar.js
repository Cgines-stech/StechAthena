// assets/js/programcalendar.js
import { listCourseSessions } from "./coursesessions.store.js";

// Helpers
function safeDate(ts) {
  if (!ts) return null;
  if (ts.toDate) { try { return ts.toDate(); } catch {} }
  if (typeof ts === "string") { const d = new Date(ts); return isNaN(d) ? null : d; }
  if (ts instanceof Date) return ts;
  return null;
}
function fmt(d) {
  return d ? d.toLocaleDateString(undefined, { month:'short', day:'2-digit', year:'numeric' }) : "—";
}
function el(tag, html, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

const programSel = document.getElementById("programFilter");
const refreshBtn = document.getElementById("refreshBtn");
const resultsEl  = document.getElementById("results");
const countTag   = document.getElementById("countTag");

async function bootstrapPrograms() {
  try {
    const recent = await listCourseSessions({ max: 200 });
    const programs = Array.from(new Set(recent.map(d => d.program).filter(Boolean))).sort();

    programSel.innerHTML = programs.length
      ? programs.map(p => `<option value="${p}">${p}</option>`).join("")
      : `<option value="">(no programs found)</option>`;
  } catch (e) {
    console.error(e);
    programSel.innerHTML = `<option value="">(error loading programs)</option>`;
  }
}

function renderSessions(docs) {
  resultsEl.innerHTML = "";

  if (!docs.length) {
    resultsEl.appendChild(el("div", "No sessions found for this program.", "empty"));
    countTag.style.display = "none";
    return;
  }

  countTag.textContent = `${docs.length} session${docs.length===1?"":"s"}`;
  countTag.style.display = "inline-block";

  for (const d of docs) {
    const rows = Array.isArray(d.rows) ? d.rows : [];
    const firstDateISO = rows[0]?.date || null;
    const lastDateISO  = rows[rows.length - 1]?.date || firstDateISO;

    const first = firstDateISO ? new Date(firstDateISO) : null;
    const last  = lastDateISO ? new Date(lastDateISO) : null;

    const updatedAt = safeDate(d.updatedAt);
    const updatedStr = updatedAt ? `${fmt(updatedAt)}` : "—";

    const firstSlots = rows[0]?.slots || [];
    const slotPreview = firstSlots.length
      ? firstSlots.map(s => `${s.start}–${s.end}`).join(" | ")
      : "—";

    const card = el("div", null, "sesscard");
    const head = el("div", null, "sesshead");
    head.appendChild(el("div",
      `<strong>${d.course || "(untitled course)"}</strong><div class="sessmeta">${d.program || ""}</div>`
    ));
    head.appendChild(el("div", `Total: <strong>${d.total ?? "—"}</strong> hrs`, "pill"));
    card.appendChild(head);

    card.appendChild(el("div",
      `<div class="sessmeta">Range: ${fmt(first)} – ${fmt(last)}</div>`
    ));
    card.appendChild(el("div",
      `<div class="sessmeta">Updated: ${updatedStr}</div>`
    ));
    card.appendChild(el("div",
      `<div class="sessmeta">Example slots (Day 1): ${slotPreview}</div>`
    ));

    resultsEl.appendChild(card);
  }
}

async function loadForSelectedProgram() {
  const program = programSel.value || "";
  if (!program) { renderSessions([]); return; }

  try {
    const docs = await listCourseSessions({ program, max: 200 });
    renderSessions(docs);
  } catch (e) {
    console.error(e);
    resultsEl.innerHTML = "";
    resultsEl.appendChild(el("div", "Error loading sessions.", "empty"));
    countTag.style.display = "none";
  }
}

// Wire up
refreshBtn.addEventListener("click", loadForSelectedProgram);

// Auto-load
await bootstrapPrograms();
await loadForSelectedProgram();
