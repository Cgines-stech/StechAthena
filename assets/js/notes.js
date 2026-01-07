// assets/js/notes.js
const LOGBOOK_URL = "assets/js/logbook.json";

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderLogbook(listEl, entries) {
  listEl.innerHTML = "";

  if (!entries.length) {
    listEl.innerHTML =
      `<li class="log-entry muted">No log entries available.</li>`;
    return;
  }

  // Sort newest first
  entries
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(entry => {
      const li = document.createElement("li");
      li.className = "log-entry";
      li.innerHTML = `
        <span class="log-date">Date: ${escapeHtml(entry.date)}</span>
        <span class="log-separator"> — </span>
        <span class="log-text">${escapeHtml(entry.note)}</span>
      `;
      listEl.appendChild(li);
    });
}

async function init() {
  const listEl = document.getElementById("logbook");

  try {
    const res = await fetch(LOGBOOK_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    const entries = await res.json();
    renderLogbook(listEl, entries);
  } catch (err) {
    console.error(err);
    listEl.innerHTML =
      `<li class="log-entry muted">Unable to load project log.</li>`;
  }
}

document.addEventListener("DOMContentLoaded", init);
