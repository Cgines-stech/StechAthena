// assets/js/notes.js
const STORAGE_KEY = "athena:updateNotes"; // used only in dev to stage new notes locally
const NOTES_URL   = "assets/data/update-notes.json";

// Dev mode: show editing UI only on localhost/127.0.0.1 or with ?dev=1
const DEV = (
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.search.includes("dev=1")
);

function fmtDate(d) {
  return new Date(d).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}

function escapeHtml(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderNotes(listEl, notes, {showActions = false} = {}) {
  listEl.innerHTML = "";
  if (!notes.length) {
    const li = document.createElement("li");
    li.className = "note";
    li.innerHTML = `<p class="note-text muted" style="margin:0;">No notes yet.</p>`;
    listEl.appendChild(li);
    return;
  }

  notes
    .slice()
    .sort((a,b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
    .forEach(n => {
      const li = document.createElement("li");
      li.className = "note";
      li.innerHTML = `
        <div class="note-meta">
          <span>${fmtDate(n.createdAt)}</span>
          <span>#${escapeHtml(n.id || "")}</span>
        </div>
        <p class="note-text">${escapeHtml(n.text)}</p>
        ${showActions ? `
          <div class="note-actions">
            <button class="btn" type="button" data-action="delete" data-id="${n.id}">Delete</button>
          </div>` : ``}
      `;
      listEl.appendChild(li);
    });
}

// ---- Data sources ----

// In production: fetch JSON (read-only).
async function fetchReadOnlyNotes() {
  const res = await fetch(NOTES_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load notes: ${res.status}`);
  return res.json();
}

// In dev: prefer localStorage (so you can draft notes without touching the JSON).
function loadDevNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveDevNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// ---- Init ----
async function init() {
  const form = document.getElementById("notesForm");
  const textarea = document.getElementById("noteText");
  const listEl = document.getElementById("notesList");
  const readOnlyHint = document.getElementById("notesReadOnlyHint");

  if (DEV) {
    // Show authoring UI and use localStorage as a scratchpad during development.
    form.hidden = false;
    form.removeAttribute("hidden");
    readOnlyHint.style.display = "none";

    let notes = loadDevNotes();
    renderNotes(listEl, notes, { showActions: true });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = (textarea.value || "").trim();
      if (!text) return;
      const note = {
        id: crypto.randomUUID?.() || String(Date.now()),
        text,
        createdAt: Date.now()
      };
      notes.push(note);
      saveDevNotes(notes);
      textarea.value = "";
      renderNotes(listEl, notes, { showActions: true });
    });

    listEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action='delete']");
      if (!btn) return;
      const id = btn.dataset.id;
      notes = notes.filter(n => String(n.id) !== String(id));
      saveDevNotes(notes);
      renderNotes(listEl, notes, { showActions: true });
    });

    // Handy dev tip in console.
    console.info(
      "%cAthena Notes (DEV)",
      "background:#16bcee;color:#003a46;padding:2px 6px;border-radius:4px",
      "Draft your notes here. When ready, copy them into assets/data/update-notes.json for production."
    );
  } else {
    // Production: read-only JSON, no buttons, no form.
    try {
      const notes = await fetchReadOnlyNotes();
      renderNotes(listEl, notes, { showActions: false });
    } catch (err) {
      console.error(err);
      // Fail gracefully
      listEl.innerHTML = `<li class="note"><p class="note-text muted" style="margin:0;">Unable to load notes.</p></li>`;
    }
  }
}

document.addEventListener("DOMContentLoaded", init);
