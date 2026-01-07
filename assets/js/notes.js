// assets/js/notes.js
const LOGBOOK_URL = "assets/js/logbook.json";

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderLogbook(listEl, days) {
  listEl.innerHTML = "";

  if (!days.length) {
    listEl.innerHTML =
      `<li class="log-entry muted">No log entries available.</li>`;
    return;
  }

  days
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(day => {
      const li = document.createElement("li");
      li.className = "log-day";

      const items = day.entries
        .map(e => `<li>${escapeHtml(e)}</li>`)
        .join("");

      li.innerHTML = `
        <div class="log-date">Date: ${escapeHtml(day.date)}</div>
        <ul class="log-items">
          ${items}
        </ul>
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
