import { PROGRAMS } from "../../data/programs.js";
import { money, sum } from "../../data/utils/helpers.js";

/** Map program names to course module paths */
const PROGRAM_COURSE_REGISTRY = {
  "Advanced Emergency Medical Technician": [
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1202.js",
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1904.js",
  ],
};

/* ---------- DOM ---------- */
const programSelect = document.getElementById("programSelect");
const printBtn = document.getElementById("printBtn");

const programTitle   = document.getElementById("programTitle");
const summarySection = document.getElementById("summarySection");
const summaryHead    = summarySection.querySelector("thead");  // <-- header element
const summaryBody    = document.getElementById("summaryBody");

const booksSection = document.getElementById("booksSection");
const booksBody    = document.getElementById("booksBody");

const toolsSection = document.getElementById("toolsSection");
const toolsBody    = document.getElementById("toolsBody");

const certsSection = document.getElementById("certsSection");
const certsBody    = document.getElementById("certsBody");

const otherSection = document.getElementById("otherSection");
const otherBody    = document.getElementById("otherBody");

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
  const candidates = [mod?.default, mod?.course, mod?.courses, mod?.advancedEmergencyMedicalTechnician];
  const data = candidates.find(Boolean);
  return Array.isArray(data) ? data : (data ? [data] : []);
};

function clearTables() {
  summaryHead.innerHTML = "";
  summaryBody.innerHTML = "";
  booksBody.innerHTML = "";
  toolsBody.innerHTML = "";
  certsBody.innerHTML = "";
  otherBody.innerHTML = "";

  [summarySection, booksSection, toolsSection, certsSection, otherSection]
    .forEach(sec => sec.hidden = true);
}

/** Normalize item arrays and keep associated courseNumber */
function normalizeItemsWithCourse(arr = [], courseNumber = "") {
  return (arr || [])
    .map(x => {
      if (x == null) return null;
      if (typeof x === "string") return { courseNumber, title: x, price: 0 };
      const title = x.title ?? x.name ?? "";
      const price = Number(x.price ?? 0) || 0;
      if (!title && price === 0) return null;
      return { courseNumber, title, price };
    })
    .filter(Boolean);
}

/** 3-col renderer: Course # | Title | Price */
function renderItemRows3(tbodyEl, items) {
  if (!items.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="muted" colspan="3">No data provided</td>`;
    tbodyEl.appendChild(tr);
    return 0;
  }
  let total = 0;
  items.forEach(it => {
    total += it.price || 0;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${it.courseNumber || "-"}</td>
      <td>${it.title || "-"}</td>
      <td style="text-align:right;">${money(it.price || 0)}</td>
    `;
    tbodyEl.appendChild(tr);
  });
  const trTotal = document.createElement("tr");
  trTotal.innerHTML = `
    <td colspan="2" style="text-align:right; font-weight:600;">Subtotal</td>
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

  programTitle.textContent = `${programName} (Credit Hours Required: ${programMeta?.program_credit_hours ?? "N/A"}, CIP: ${programMeta?.CIP ?? "N/A"})`;

  if (!coursePaths.length) {
    summarySection.hidden = false;
    summaryHead.innerHTML = `<tr><th>Notice</th></tr>`;
    summaryBody.innerHTML = `<tr><td class="muted">No course files wired for this program yet.</td></tr>`;
    return;
  }

  // Load all courses
  let allCourses = [];
  for (const rawPath of coursePaths) {
    const path = encodeURI(rawPath);
    try {
      const mod = await import(/* @vite-ignore */ path);
      const courses = decodeModule(mod);
      allCourses = allCourses.concat(courses);
    } catch (e) {
      console.error("Failed to import course:", rawPath, e);
    }
  }
  if (!allCourses.length) {
    summarySection.hidden = false;
    summaryHead.innerHTML = `<tr><th>Notice</th></tr>`;
    summaryBody.innerHTML = `<tr><td class="muted">Could not load any course data for this program.</td></tr>`;
    return;
  }

  /* ---------- First table: per-course rows + totals ---------- */
  summarySection.hidden = false;

  // Set the proper header (write to THEAD, not TBODY)
  summaryHead.innerHTML = `
    <tr>
      <th>Course #</th>
      <th>Course Name</th>
      <th>Credit Hours</th>
      <th>Clock Hours</th>
      <th>Tuition</th>
      <th>Course Fee</th>
      <th>Book Cost</th>
      <th>Tool Cost</th>
      <th>Cert Cost</th>
      <th>Other</th>
      <th>Total</th>
    </tr>
  `;

  let totalCredits = 0,
      totalClock   = 0,
      totalTuition = 0,
      totalFee     = 0,
      totalBooks   = 0,
      totalTools   = 0,
      totalCerts   = 0,
      totalOther   = 0,
      totalGrand   = 0;

  // Also collect items for the other four tables and keep course number
  const itemsBooks = [];
  const itemsTools = [];
  const itemsCerts = [];
  const itemsOther = [];

  for (const course of allCourses) {
    const books = sum(course.courseBooks);
    const tools = sum(course.courseTools);
    const certs = sum(course.courseCertifications);
    const other = sum(course.otherAssociatedCosts);

    const tuition = course.courseTuition || 0;
    const fee = course.courseFee || 0;
    const rowTotal = tuition + fee + books + tools + certs + other;

    totalCredits += Number(course.courseCredits) || 0;
    totalClock   += Number(course.courseClockHours) || 0;
    totalTuition += tuition;
    totalFee     += fee;
    totalBooks   += books;
    totalTools   += tools;
    totalCerts   += certs;
    totalOther   += other;
    totalGrand   += rowTotal;

    // collect detailed items w/ course number
    itemsBooks.push(...normalizeItemsWithCourse(course.courseBooks, course.courseNumber));
    itemsTools.push(...normalizeItemsWithCourse(course.courseTools, course.courseNumber));
    itemsCerts.push(...normalizeItemsWithCourse(course.courseCertifications, course.courseNumber));
    itemsOther.push(...normalizeItemsWithCourse(course.otherAssociatedCosts, course.courseNumber));

    // row
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${course.courseNumber || "-"}</td>
      <td>${course.courseName || "-"}</td>
      <td>${course.courseCredits || 0}</td>
      <td>${course.courseClockHours || 0}</td>
      <td>${money(tuition)}</td>
      <td>${money(fee)}</td>
      <td>${money(books)}</td>
      <td>${money(tools)}</td>
      <td>${money(certs)}</td>
      <td>${money(other)}</td>
      <td><strong>${money(rowTotal)}</strong></td>
    `;
    summaryBody.appendChild(tr);
  }

  // Total row
  const totalRow = document.createElement("tr");
  totalRow.style.fontWeight = "600";
  totalRow.innerHTML = `
    <td colspan="2" style="text-align:right;">Program Totals →</td>
    <td>${totalCredits}</td>
    <td>${totalClock}</td>
    <td>${money(totalTuition)}</td>
    <td>${money(totalFee)}</td>
    <td>${money(totalBooks)}</td>
    <td>${money(totalTools)}</td>
    <td>${money(totalCerts)}</td>
    <td>${money(totalOther)}</td>
    <td>${money(totalGrand)}</td>
  `;
  summaryBody.appendChild(totalRow);

  /* ---------- Other tables: include Course # | Title | Price ---------- */
  booksSection.hidden = false;
  booksBody.innerHTML = ""; // ensure clean
  // Add a header row for clarity (only needed if your HTML <thead> is fixed to 2 cols)
  // If you want a 3-col header, change the HTML thead too. For now we just render rows.
  renderItemRows3(booksBody, itemsBooks);

  toolsSection.hidden = false;
  toolsBody.innerHTML = "";
  renderItemRows3(toolsBody, itemsTools);

  certsSection.hidden = false;
  certsBody.innerHTML = "";
  renderItemRows3(certsBody, itemsCerts);

  otherSection.hidden = false;
  otherBody.innerHTML = "";
  renderItemRows3(otherBody, itemsOther);
});

/* ---------- Print ---------- */
printBtn.addEventListener("click", () => window.print());
