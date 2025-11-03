// assets/js/costSheet.js
import { PROGRAMS } from "../../data/programs.js";
import { money, sum } from "../../data/utils/helpers.js";

/** Map program names to course module paths */

// AFTER:
import { PROGRAM_COURSE_REGISTRY, getCourseFiles, encodePath } from "../../data/programs.registry.js";

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
  const candidates = [
    mod?.default, 
    mod?.course, 
    mod?.courses, 
    mod?.advancedEmergencyMedicalTechnician, 
    mod?.automationTechnologyProgram,
    mod?.automotiveTechnologyProgram,
    mod?.cdlClassAProgram,
    mod?.culinaryArtsProgram,
    mod?.paramedicProgram,
  ];
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
    tr.innerHTML = `<td class="muted" colspan="3"></td>`;
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
  // Be forgiving about different key styles across datasets
// Be forgiving about different key styles across datasets
const getFirst = (obj, keys, fallback = "N/A") =>
  keys.map(k => obj?.[k]).find(v => v != null) ?? fallback;

const creditsRequired = getFirst(programMeta, [
  "program_credit_hours",   // snake_case
  "programCreditHours",     // camelCase (your program.js files)
  "creditHours",
  "credits"
]);

const cip = getFirst(programMeta, [
  "CIP",                    // snake_case (some PROGRAMS lists)
  "programCIP",             // camelCase (your program.js files)
  "cip"
]);

programTitle.textContent =
  `${programName} (Credit Hours Required: ${creditsRequired}, CIP: ${cip})`;

  const coursePaths = PROGRAM_COURSE_REGISTRY[programName] || [];

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

// figure out program required credits as a number
const requiredCreditsNum = Number(creditsRequired) || 0;

// we'll track how many *core* credits are already in the plan totals
let coreCreditsCounted = 0;

// we’ll remember where the first elective row is so we can insert the disclaimer above it
let firstElectiveRow = null;
let hasAnyElectives = false;

  for (const course of allCourses) {
  const books   = sum(course.courseBooks);
  const tools   = sum(course.courseTools);
  const certs   = sum(course.courseCertifications);
  const tuition = course.courseTuition || 0;
  const fee     = course.courseFee || 0;

  // summary table excludes "Other" by design
  const rowTotal = tuition + fee + books + tools + certs;

  // Include rule: explicit flag wins; otherwise non-electives are included
  const include = (course.includeInProgramTotals ?? !course.isElective);

  if (include) {
    totalCredits += Number(course.courseCredits) || 0;
    totalClock   += Number(course.courseClockHours) || 0;
    totalTuition += tuition;
    totalFee     += fee;
    totalBooks   += books;
    totalTools   += tools;
    totalCerts   += certs;
    totalGrand   += rowTotal;   // (you already seeded totalGrand with the $25 grad fee)
  }
// count core credits that are included in totals
if (include && !course.isElective) {
  coreCreditsCounted += Number(course.courseCredits) || 0;
}

// remember the first elective row we render
if (course.isElective) {
  hasAnyElectives = true;
}

  // always collect for detail tables
  itemsBooks.push(...normalizeItemsWithCourse(course.courseBooks, course.courseNumber));
  itemsTools.push(...normalizeItemsWithCourse(course.courseTools, course.courseNumber));
  itemsCerts.push(...normalizeItemsWithCourse(course.courseCertifications, course.courseNumber));
  itemsOther.push(...normalizeItemsWithCourse(course.otherAssociatedCosts, course.courseNumber));

  // Optional: badge in the first table so you can see which are electives
  const electiveBadge = course.isElective ? ` <span class="muted">(Elective)</span>` : "";

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${course.courseNumber || "-"}</td>
    <td>${(course.courseName || "-") + electiveBadge}</td>
    <td>${course.courseCredits || 0}</td>
    <td>${course.courseClockHours || 0}</td>
    <td>${money(tuition)}</td>
    <td>${money(fee)}</td>
    <td>${money(books)}</td>
    <td>${money(tools)}</td>
    <td>${money(certs)}</td>
    <td><strong>${money(rowTotal)}</strong></td>
  `;
  if (course.isElective && !firstElectiveRow) {
  firstElectiveRow = tr;
}

  summaryBody.appendChild(tr);
}

// X = required credits - core credits counted (clamped at 0)
const electiveCreditsNeeded = Math.max(0, requiredCreditsNum - coreCreditsCounted);

// Only show if there are electives AND X > 0
if (hasAnyElectives && electiveCreditsNeeded > 0 && firstElectiveRow) {
  const noteRow = document.createElement("tr");
  noteRow.className = "elective-disclaimer";

  const colCount = summaryHead.querySelectorAll("th").length || 10;

  noteRow.innerHTML = `
    <td colspan="${colCount}">
      <em>Must select <strong>${electiveCreditsNeeded}</strong> credit hour(s) from the courses below.</em>
    </td>
  `;
  summaryBody.insertBefore(noteRow, firstElectiveRow);
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
