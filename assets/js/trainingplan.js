// trainingplan.js
import { PROGRAMS } from "../../data/programs.js";
import { money, sum } from "../../data/utils/helpers.js";

/** Map program names to course module paths */
const PROGRAM_COURSE_REGISTRY = {
  "Advanced Emergency Medical Technician": [
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1202.js",
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1904.js",
  ],
  "Automation Technology": [
    "../../data/programs/Automation Technology/TEAM 1010.js",
    "../../data/programs/Automation Technology/TEAM 1040.js",
  ],
};

/* ---------- DOM ---------- */
const programSelect = document.getElementById("programSelect");
const printBtn = document.getElementById("printBtn");

const programTitle   = document.getElementById("programTitle");
const summarySection = document.getElementById("summarySection");
const summaryHead    = document.getElementById("summaryHead");
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
  const parsePriceFromString = (s) => {
    const m = String(s).match(/([0-9]+(?:\.[0-9]{1,2})?)/);
    return m ? Number(m[1]) : 0;
  };

  return (arr || [])
    .map(x => {
      if (x == null) return null;

      if (typeof x === "number") return { courseNumber, title: "", price: x };

      if (typeof x === "string") {
        return { courseNumber, title: x.trim(), price: parsePriceFromString(x) };
      }

      const title = x.title ?? x.name ?? x.book ?? x.item ?? x.description ?? "";
      const rawPrice = x.price ?? x.cost ?? x.amount ?? x.value ?? 0;
      const price = Number(rawPrice) || 0;

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
      <td class="col-course">${it.courseNumber || "-"}</td>
      <td class="col-item">${it.title || "-"}</td>
      <td class="price">${money(it.price || 0)}</td>
    `;
    tbodyEl.appendChild(tr);
  });

  const trTotal = document.createElement("tr");
  trTotal.className = "subtotal-row";
  trTotal.innerHTML = `
    <td colspan="2" class="text-right">Subtotal</td>
    <td class="price">${money(total)}</td>
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

  /* ---------- First table: per-course rows + totals (exclude "Other") ---------- */
  summarySection.hidden = false;

  summaryHead.innerHTML = `
    <tr>
      <th>Course #</th>
      <th>Course Name</th>
      <th>Credit Hrs</th>
      <th>Clock Hrs</th>
      <th>Tuition</th>
      <th>Fee</th>
      <th>Book</th>
      <th>Tool</th>
      <th>Cert</th>
      <th>Total</th>
    </tr>
  `;

  // Graduation Fee row ($25 as Course Fee)
const gradFee = 25;
const gradRow = document.createElement("tr");
gradRow.className = "graduation-fee";
gradRow.innerHTML = `
  <td class="text-left">STech Fees</td>  <!-- Course # -->
  <td>Graduation Fee</td>                <!-- Course Name -->
  <td></td>                              <!-- Credit Hrs -->
  <td></td>                              <!-- Clock Hrs -->
  <td></td>                              <!-- Tuition (blank) -->
  <td>${money(gradFee)}</td>             <!-- Fee -->
  <td></td>                              <!-- Book -->
  <td></td>                              <!-- Tool -->
  <td></td>                              <!-- Cert -->
  <td class="price"><strong>${money(gradFee)}</strong></td> <!-- Total -->
`;
summaryBody.appendChild(gradRow);

  // Totals init (include graduation fee)
  let totalCredits = 0,
      totalClock   = 0,
      totalTuition = 0,
      totalFee     = gradFee,
      totalBooks   = 0,
      totalTools   = 0,
      totalCerts   = 0,
      totalGrand   = gradFee;

  // Collect detailed items for item tables (including OTHER here, but not in summary totals)
  const itemsBooks = [];
  const itemsTools = [];
  const itemsCerts = [];
  const itemsOther = [];

  for (const course of allCourses) {
    const books = sum(course.courseBooks);
    const tools = sum(course.courseTools);
    const certs = sum(course.courseCertifications);
    // NOTE: other costs are intentionally NOT included in the summary totals
    // but we still capture them for the "Other" table:
    itemsOther.push(...normalizeItemsWithCourse(course.otherAssociatedCosts, course.courseNumber));

    const tuition = course.courseTuition || 0;
    const fee = course.courseFee || 0;
    const rowTotal = tuition + fee + books + tools + certs;

    totalCredits += Number(course.courseCredits) || 0;
    totalClock   += Number(course.courseClockHours) || 0;
    totalTuition += tuition;
    totalFee     += fee;
    totalBooks   += books;
    totalTools   += tools;
    totalCerts   += certs;
    totalGrand   += rowTotal;

    itemsBooks.push(...normalizeItemsWithCourse(course.courseBooks, course.courseNumber));
    itemsTools.push(...normalizeItemsWithCourse(course.courseTools, course.courseNumber));
    itemsCerts.push(...normalizeItemsWithCourse(course.courseCertifications, course.courseNumber));

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
      <td><strong>${money(rowTotal)}</strong></td>
    `;
    summaryBody.appendChild(tr);
  }

  // Total row (no "Other")
const totalRow = document.createElement("tr");
totalRow.className = "summary-totals";
totalRow.innerHTML = `
  <td colspan="2" class="text-right">Program Totals →</td>
  <td>${totalCredits}</td>
  <td>${totalClock}</td>
  <td>${money(totalTuition)}</td>
  <td>${money(totalFee)}</td>
  <td>${money(totalBooks)}</td>
  <td>${money(totalTools)}</td>
  <td>${money(totalCerts)}</td>
  <td class="price">${money(totalGrand)}</td>
`;
summaryBody.appendChild(totalRow);


  /* ---------- Item tables: Course # | Title | Price (Other included here) ---------- */
  booksSection.hidden = false;
  booksBody.innerHTML = "";
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
