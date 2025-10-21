// assets/js/trainingplan.js
import { PROGRAMS } from "../../data/programs.js";
import { money, sum } from "../../data/utils/helpers.js";

/**
 * Map program names to the course modules that belong to that program.
 * Add entries here as you wire more programs.
 */
const PROGRAM_COURSE_REGISTRY = {
  "Advanced Emergency Medical Technician": [
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1202.js",
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1904.js",
  ],
  // "Automation Technology": [ "…/course1.js", "…/course2.js" ],
  // "Automotive Technology": [ "…" ],
};

/* ---------- DOM ---------- */
const programSelect = document.getElementById("programSelect");
const printBtn = document.getElementById("printBtn");

const programTitle = document.getElementById("programTitle");
const summarySection = document.getElementById("summarySection");
const summaryBody = document.getElementById("summaryBody");

const booksSection = document.getElementById("booksSection");
const booksBody = document.getElementById("booksBody");

const toolsSection = document.getElementById("toolsSection");
const toolsBody = document.getElementById("toolsBody");

const certsSection = document.getElementById("certsSection");
const certsBody = document.getElementById("certsBody");

const otherSection = document.getElementById("otherSection");
const otherBody = document.getElementById("otherBody");

/* ---------- UI population ---------- */
function populatePrograms() {
  programSelect.innerHTML = `<option value="">Select a program…</option>`;
  PROGRAMS.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.name;
    opt.textContent = p.name;
    programSelect.appendChild(opt);
  });
}
populatePrograms();

/* ---------- Utilities ---------- */
const decodeModule = (mod) => {
  // Accept various export shapes (array default, object default, named)
  const candidates = [
    mod?.default,
    mod?.course,
    mod?.courses,
    mod?.advancedEmergencyMedicalTechnician,
  ];
  const data = candidates.find(Boolean);
  return Array.isArray(data) ? data : (data ? [data] : []);
};

function clearTables() {
  summaryBody.innerHTML = "";
  booksBody.innerHTML = "";
  toolsBody.innerHTML = "";
  certsBody.innerHTML = "";
  otherBody.innerHTML = "";

  [summarySection, booksSection, toolsSection, certsSection, otherSection]
    .forEach(sec => sec.hidden = true);
}

/** Normalize item arrays: allow {title, price}, {name, price}, strings, or empty */
function normalizeItems(arr = []) {
  return (arr || [])
    .map(x => {
      if (x == null) return null;
      if (typeof x === "string") return { title: x, price: 0 };
      const title = x.title ?? x.name ?? "";
      const price = Number(x.price ?? 0) || 0;
      if (!title && price === 0) return null;
      return { title, price };
    })
    .filter(Boolean);
}

/** Render a 2-col table body from [{title, price}] */
function renderItemRows(tbodyEl, items) {
  if (!items.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="muted" colspan="2">No data provided</td>`;
    tbodyEl.appendChild(tr);
    return 0;
  }
  let total = 0;
  items.forEach(it => {
    total += it.price || 0;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${it.title || "-"}</td>
      <td style="text-align:right;">${money(it.price || 0)}</td>
    `;
    tbodyEl.appendChild(tr);
  });
  // total row
  const trTotal = document.createElement("tr");
  trTotal.innerHTML = `
    <td style="text-align:right; font-weight:600;">Subtotal</td>
    <td style="text-align:right; font-weight:600;">${money(total)}</td>
  `;
  tbodyEl.appendChild(trTotal);
  return total;
}

/* ---------- Main: program selection ---------- */
programSelect.addEventListener("change", async () => {
  clearTables();
  const programName = programSelect.value;
  if (!programName) return;

  const programMeta = PROGRAMS.find(p => p.name === programName);
  const coursePaths = PROGRAM_COURSE_REGISTRY[programName] || [];

  programTitle.textContent = `${programName} ` +
    `(Credit Hours Required: ${programMeta?.program_credit_hours ?? "N/A"}, CIP: ${programMeta?.CIP ?? "N/A"})`;

  if (!coursePaths.length) {
    summarySection.hidden = false;
    summaryBody.innerHTML = `
      <tr><td colspan="8" class="muted">No course files wired for this program yet.</td></tr>
    `;
    return;
  }

  // Load all course modules and collect courses
  let allCourses = [];
  for (const rawPath of coursePaths) {
    const path = encodeURI(rawPath);
    try {
      const mod = await import(/* @vite-ignore */ path);
      const courses = decodeModule(mod); // array of course objects
      allCourses = allCourses.concat(courses);
    } catch (e) {
      console.error("Failed to import course:", rawPath, e);
    }
  }
  // If nothing loaded, show message
  if (!allCourses.length) {
    summarySection.hidden = false;
    summaryBody.innerHTML = `
      <tr><td colspan="8" class="muted">Could not load any course data for this program.</td></tr>
    `;
    return;
  }

  /* ---------- Aggregate across courses ---------- */
  // Hours & base tuition/fees
  const totalCreditHours = (allCourses || []).reduce((t, c) => t + (Number(c.courseCredits) || 0), 0);
  const totalClockHours  = (allCourses || []).reduce((t, c) => t + (Number(c.courseClockHours) || 0), 0);
  const tuitionTotal     = (allCourses || []).reduce((t, c) => t + (Number(c.courseTuition) || 0), 0);
  const courseFeeTotal   = (allCourses || []).reduce((t, c) => t + (Number(c.courseFee) || 0), 0);

  // Itemized arrays (normalize mixed shapes)
  const allBooks = normalizeItems(allCourses.flatMap(c => c.courseBooks || []));
  const allTools = normalizeItems(allCourses.flatMap(c => c.courseTools || []));
  const allCerts = normalizeItems(allCourses.flatMap(c => c.courseCertifications || []));
  const allOther = normalizeItems(allCourses.flatMap(c => c.otherAssociatedCosts || []));

  const bookCost = sum(allBooks);
  const toolCost = sum(allTools);
  const certCost = sum(allCerts);
  const otherCost = sum(allOther);
  const grandTotal = tuitionTotal + courseFeeTotal + bookCost + toolCost + certCost + otherCost;

  /* ---------- Render Summary (First Table) ---------- */
  summarySection.hidden = false;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${totalCreditHours}</td>
    <td>${totalClockHours}</td>
    <td>${money(tuitionTotal)}</td>
    <td>${money(courseFeeTotal)}</td>
    <td>${money(bookCost)}</td>
    <td>${money(toolCost)}</td>
    <td>${money(certCost)}</td>
    <td><strong>${money(grandTotal)}</strong></td>
  `;
  summaryBody.appendChild(tr);

  /* ---------- Render Item Tables ---------- */
  booksSection.hidden = false;
  renderItemRows(booksBody, allBooks);

  toolsSection.hidden = false;
  renderItemRows(toolsBody, allTools);

  certsSection.hidden = false;
  renderItemRows(certsBody, allCerts);

  otherSection.hidden = false;
  renderItemRows(otherBody, allOther);
});

/* ---------- Print ---------- */
printBtn.addEventListener("click", () => window.print());
