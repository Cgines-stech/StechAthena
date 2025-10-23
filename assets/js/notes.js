// assets/js/notes.js
const STORAGE_KEY = "athena:updateNotes";

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}
function fmtDate(d) {
  // Friendly timestamp
  return new Date(d).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}

function renderNotes(listEl, notes) {
  listEl.innerHTML = "";
  if (!notes.length) {
    const li = document.createElement("li");
    li.className = "note";
    li.innerHTML = `<p class="note-text muted" style="margin:0;">No notes yet.</p>`;
    listEl.appendChild(li);
    return;
  }
  notes
    .slice()              // shallow copy
    .sort((a,b) => b.createdAt - a.createdAt) // newest first
    .forEach((n, idx) => {
      const li = document.createElement("li");
      li.className = "note";
      li.innerHTML = `
        <div class="note-meta">
          <span>${fmtDate(n.createdAt)}</span>
        </div>
        <p class="note-text">${escapeHtml(n.text)}</p>
        <div class="note-actions">
          <button type="button" data-action="delete" data-id="${n.id}">Delete</button>
        </div>
      `;
      listEl.appendChild(li);
    });
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function init() {
  const form = document.getElementById("notesForm");
  const textarea = document.getElementById("noteText");
  const listEl = document.getElementById("notesList");

  let notes = loadNotes();
  renderNotes(listEl, notes);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = (textarea.value || "").trim();
    if (!text) return;
    const note = { id: crypto.randomUUID?.() || String(Date.now()), text, createdAt: Date.now() };
    notes.push(note);
    saveNotes(notes);
    textarea.value = "";
    renderNotes(listEl, notes);
  });

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === "delete") {
      notes = notes.filter(n => String(n.id) !== String(id));
      saveNotes(notes);
      renderNotes(listEl, notes);
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
