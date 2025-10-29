// assets/js/trainingplan.js
// Training Plan page logic (with Back button + Totals + Elective disclaimer)
// - Program dropdown from central registry
// - Renders: Program name, each Course "number — name", and Outline items
// - Totals:
//    • Program Hours: from data/programs/{program}/program.js -> programClockHours
//    • Outline Hours (label kept): SUM of courseClockHours where includeInProgramTotals === true
// - Elective disclaimer:
//    • Inserted BEFORE the first elective course (isElective === true)
//    • Shows: "Electives (Credit Hours Required: X, Clock Hours Required: Y)"
//      where X = programCreditHours − sum(non‑elective courseCredits)
//            Y = programClockHours − sum(non‑elective courseClockHours)
// - Print-friendly (controls hidden in print); outline total row is hidden in print via CSS

import {
  listPrograms,
  getCourseFiles,
  encodePath,
  PROGRAM_FILE_REGISTRY,
} from "../../data/programs.registry.js";

const els = {
  programSelect: document.getElementById("programSelect"),
  programTitle: document.getElementById("programTitle"),
  courseList: document.getElementById("courseList"),
  printBtn: document.getElementById("printBtn"),
  programHoursTotal: document.getElementById("programHoursTotal"),
  outlineHoursTotal: document.getElementById("outlineHoursTotal"),
};

// -------- cache-busting helpers (ties into window.__ASSET_VERSION__) --------
const BUST = (window.__ASSET_VERSION__ || Date.now()).toString();
const withBust = (url) => url + (url.includes("?") ? "&" : "?") + "v=" + BUST;

function htmlEscape(str = ""){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function loadProgramCourses(programName){
  const files = getCourseFiles(programName);
  const loaded = [];
  for (const relPath of files){
    try {
      const mod = await import(withBust(encodePath(relPath)));
      const arr = Array.isArray(mod.default) ? mod.default : (mod.default ? [mod.default] : []);
      const course = arr[0] || null;
      if (course) loaded.push(course);
    } catch (e) {
      console.error("Failed to import course:", relPath, e);
      loaded.push({ __error: true, relPath });
    }
  }
  return loaded;
}

async function loadProgramMeta(programName){
  try {
    const rel = PROGRAM_FILE_REGISTRY?.[programName];
    if (!rel) return null;
    const mod = await import(withBust(encodePath(rel)));
    // Expecting default export to have programClockHours & programCreditHours
    const meta = Array.isArray(mod.default) ? mod.default[0] : mod.default;
    return meta || null;
  } catch (e) {
    console.warn("Program meta failed to load for:", programName, e);
    return null;
  }
}

// NEW: Sum courseClockHours across courses where includeInProgramTotals === true
function computeIncludedCourseClockHours(courses){
  let total = 0;
  for (const c of courses){
    if (!c || c.__error) continue;
    if (c.includeInProgramTotals !== true) continue;
    const ch = Number(c.courseClockHours || 0);
    total += isNaN(ch) ? 0 : ch;
  }
  return total;
}

function sumNonElectiveCreditsAndClock(courses){
  let credits = 0;
  let clock = 0;
  for (const c of courses){
    if (!c || c.__error) continue;
    if (c.isElective === true) continue;
    const cr = Number(c.courseCredits || 0);
    const ch = Number(c.courseClockHours || 0);
    credits += isNaN(cr) ? 0 : cr;
    clock   += isNaN(ch) ? 0 : ch;
  }
  return { credits, clock };
}

function render(programName, courses, programMeta){
  els.programTitle.textContent = programName || "Select a program…";

  // Totals
  const programHours = Number(programMeta?.programClockHours || 0) || 0;
  const includedClockHours = computeIncludedCourseClockHours(courses || []); // replaces prior outline-hours logic
  if (els.programHoursTotal) els.programHoursTotal.textContent = `${programHours} hrs`;
  if (els.outlineHoursTotal) els.outlineHoursTotal.textContent = `${includedClockHours} hrs`;

  // No program selected / no courses
  if (!programName){ els.courseList.innerHTML = ""; return; }
  if (!courses || courses.length === 0){
    els.courseList.innerHTML = `<div class="hint">No courses found for this program.</div>`;
    return;
  }

  // Elective disclaimer computations (before first elective)
  const { credits: reqCredits, clock: reqClock } = sumNonElectiveCreditsAndClock(courses);
  const programCreditHours = Number(programMeta?.programCreditHours || 0) || 0;
  const programClockHours  = Number(programMeta?.programClockHours || 0)  || 0;
  const electiveCreditsNeeded = Math.max(0, programCreditHours - reqCredits);
  const electiveClockNeeded   = Math.max(0, programClockHours  - reqClock);

  const firstElectiveIdx = courses.findIndex(c => c && !c.__error && c.isElective === true);

  // Build HTML
  let parts = [];
  courses.forEach((c, idx) => {
    // Insert disclaimer just before the FIRST elective course
    if (idx === firstElectiveIdx){
      parts.push(`
        <div class="elective-disclaimer">
          <strong>Electives</strong> (Credit Hours Required: ${electiveCreditsNeeded}, Clock Hours Required: ${electiveClockNeeded})
        </div>
      `);
    }

    if (!c || c.__error){
      const file = c?.relPath?.split("/").pop();
      parts.push(`<article class="course-card error"><h3>⚠ Error loading ${htmlEscape(file || "course")}</h3></article>`);
      return;
    }

    const number = c.courseNumber || "";
    const name = c.courseName || "";
    const outline = Array.isArray(c.courseOutline) ? c.courseOutline : [];
    const courseClockHours = Number(c.courseClockHours || 0);

    const outlineList = outline.length
      ? `<ol class="outline">${outline.map(i => `
            <li><span class="title">${htmlEscape(i.title || "Untitled")}</span>
                <span class="hours">${Number(i.hours || 0)} hrs</span></li>
          `).join("")}</ol>`
      : `<div class="hint small">No outline available.</div>`;

    const hoursPill = `<span class="pill">${courseClockHours} hrs</span>`;

    parts.push(`
      <article class="course-card">
        <h3 class="course-head">${htmlEscape(number)} — ${htmlEscape(name)} ${hoursPill}</h3>
        ${outlineList}
      </article>
    `);
  });

  els.courseList.innerHTML = parts.join("");
}

function initProgramsDropdown(){
  const programs = listPrograms();
  els.programSelect.innerHTML = programs.map(p => `<option value="${p}">${p}</option>`).join("");
  if (programs.length){
    els.programSelect.value = programs[0];
    onProgramChange();
  }
}

async function onProgramChange(){
  const programName = els.programSelect.value || "";
  els.programTitle.textContent = programName || "Select a program…";
  els.courseList.innerHTML = `<div class=\"hint\">Loading…</div>`;
  const [courses, programMeta] = await Promise.all([
    loadProgramCourses(programName),
    loadProgramMeta(programName)
  ]);
  render(programName, courses, programMeta);
}

function wire(){
  els.programSelect.addEventListener("change", onProgramChange);
  els.printBtn?.addEventListener("click", () => window.print());
}

// Boot
wire();
initProgramsDropdown();
