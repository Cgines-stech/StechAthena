// assets/js/trainingplan.js
// Training Plan (polished UI, landscape print, cache-busted modules)

import {
  listPrograms,
  getCourseFiles,
  encodePath,
  PROGRAM_FILE_REGISTRY,
} from "../../data/programs.registry.js";

// Cache-busting helper matches ?v on HTML page
const BUST = (window.__ASSET_VERSION__ || Date.now()).toString();
const withBust = (url) => url + (url.includes("?") ? "&" : "?") + "v=" + BUST;

const els = {
  programSelect: document.getElementById("programSelect"),
  programTitle: document.getElementById("programTitle"),
  programMetaInline: document.getElementById("programMetaInline"),
  courseList: document.getElementById("courseList"),
  printBtn: document.getElementById("printBtn"),
  outlineHoursTotal: document.getElementById("outlineHoursTotal"),
};

// Preserve original document title for after printing
const ORIGINAL_TITLE = document.title;

function setPrintTitle(programName) {
  const safe = (programName || "Program").replace(/\s+/g, " ").trim();
  document.title = `Training Plan — ${safe}`;
}

function htmlEscape(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function loadProgramCourses(programName) {
  const files = getCourseFiles(programName);
  const loaded = [];

  for (const relPath of files) {
    try {
      const mod = await import(withBust(encodePath(relPath)));
      const arr = Array.isArray(mod.default)
        ? mod.default
        : mod.default
          ? [mod.default]
          : [];
      const course = arr[0] || null;
      if (course) loaded.push(course);
    } catch (e) {
      console.error("Failed to import course:", relPath, e);
      loaded.push({ __error: true, relPath });
    }
  }

  return loaded;
}

async function loadProgramMeta(programName) {
  try {
    const rel = PROGRAM_FILE_REGISTRY?.[programName];
    if (!rel) return null;

    const mod = await import(withBust(encodePath(rel)));
    const meta = Array.isArray(mod.default) ? mod.default[0] : mod.default;
    return meta || null;
  } catch (e) {
    console.warn("Program meta failed to load:", programName, e);
    return null;
  }
}

// SUM courseClockHours across courses where includeInProgramTotals === true
function computeIncludedCourseClockHours(courses) {
  let total = 0;
  for (const c of courses) {
    if (!c || c.__error) continue;
    if (c.includeInProgramTotals !== true) continue;
    const ch = Number(c.courseClockHours || 0);
    total += isNaN(ch) ? 0 : ch;
  }
  return total;
}

// Sums for non-elective courses
function sumNonElectiveCreditsAndClock(courses) {
  let credits = 0;
  let clock = 0;

  for (const c of courses) {
    if (!c || c.__error) continue;
    if (c.isElective === true) continue;

    const cr = Number(c.courseCredits || 0);
    const ch = Number(c.courseClockHours || 0);

    credits += isNaN(cr) ? 0 : cr;
    clock += isNaN(ch) ? 0 : ch;
  }

  return { credits, clock };
}

function render(programName, courses, programMeta) {
  els.programTitle.textContent = programName || "Select a program…";

  const credit = Number(programMeta?.programCreditHours || 0);
  const clock  = Number(programMeta?.programClockHours || 0);
  const cip    = programMeta?.programCIP;

els.programMetaInline.textContent =
  credit || clock || cip
    ? `Credit Hours Required: ${credit}, Clock Hours Required: ${clock}${cip ? `, CIP: ${cip}` : ""}`
    : "";

  const includedClockHours = computeIncludedCourseClockHours(courses || []);
  els.outlineHoursTotal.textContent = `${includedClockHours} hrs`;

  if (!programName || !courses?.length) {
    els.courseList.innerHTML = `<div class="hint">No courses found for this program.</div>`;
    return;
  }

  const { credits: reqCredits, clock: reqClock } = sumNonElectiveCreditsAndClock(courses);
  const programCreditHours = Number(programMeta?.programCreditHours || 0) || 0;
  const programClockHours = Number(programMeta?.programClockHours || 0) || 0;

  const electiveCreditsNeeded = Math.max(0, programCreditHours - reqCredits);
  const electiveClockNeeded = Math.max(0, programClockHours - reqClock);

  const firstElectiveIdx = courses.findIndex(
    (c) => c && !c.__error && c.isElective === true
  );

  const parts = [];

  courses.forEach((c, idx) => {
    if (idx === firstElectiveIdx) {
      parts.push(`
        <div class="elective-disclaimer">
          <strong>Electives</strong>
          (Credit Hours Required: ${electiveCreditsNeeded}, Clock Hours Required: ${electiveClockNeeded})
        </div>
      `);
    }

    if (!c || c.__error) {
      const file = c?.relPath?.split("/").pop();
      parts.push(`
        <article class="course-card error">
          <h3>⚠ Error loading ${htmlEscape(file || "course")}</h3>
        </article>
      `);
      return;
    }

    const number = c.courseNumber || "";
    const name = c.courseName || "";
    const outline = Array.isArray(c.courseOutline) ? c.courseOutline : [];
    const courseClockHours = Number(c.courseClockHours || 0);
    const courseCredits = Number(c.courseCredits || 0);

    const instructionalType = c.instructionalType || "";
    const statewideAlignment = c.statewideAlignment || "";

    const description = c.courseDescription || "";
    const objectives = Array.isArray(c.courseObjectives) ? c.courseObjectives : [];

    const hoursPill = `<span class="pill">${courseClockHours} hrs</span>`;
    const creditPill = `<span class="pill pill-credits">${courseCredits} cr</span>`;

    const metaBadges = [statewideAlignment, instructionalType]
      .filter(Boolean)
      .map((v) => `<span class="badge">${htmlEscape(v)}</span>`)
      .join(" ");

    const descrBlock = description
      ? `<div class="descr">
           <div class="section-title">Course Description</div>
           <p>${htmlEscape(description)}</p>
         </div>`
      : "";

    const objBlock = objectives.length
      ? `<div class="objectives">
           <div class="section-title">Course Objectives</div>
           <ul class="objective-list">
             ${objectives.map((o) => `<li>${htmlEscape(o)}</li>`).join("")}
           </ul>
         </div>`
      : "";

    const outlineBlock = outline.length
      ? `<div class="outline-block">
           <div class="section-title">Course Outline</div>
           <ol class="outline">
             ${outline
               .map(
                 (i) => `
                 <li>
                   <span class="title">${htmlEscape(i.title || "Untitled")}</span>
                   <span class="hours">${Number(i.hours || 0)} hrs</span>
                 </li>`
               )
               .join("")}
           </ol>
         </div>`
      : `<div class="hint small">No outline available.</div>`;

    parts.push(`
      <article class="course-card">
        <header class="course-head">
          <h3 class="course-title">${htmlEscape(number)} — ${htmlEscape(name)}</h3>
          <div class="meta-right">
            ${hoursPill}
            ${creditPill}
            ${metaBadges}
          </div>
        </header>
        ${descrBlock}
        ${objBlock}
        ${outlineBlock}
      </article>
    `);
  });

  els.courseList.innerHTML = parts.join("");
}

function initProgramsDropdown() {
  const programs = listPrograms();
  els.programSelect.innerHTML = programs
    .map((p) => `<option value="${p}">${p}</option>`)
    .join("");

  if (programs.length) {
    els.programSelect.value = programs[0];
    onProgramChange();
  }
}

async function onProgramChange() {
  const programName = els.programSelect.value || "";
  els.programTitle.textContent = programName || "Select a program…";
  els.courseList.innerHTML = `<div class="hint">Loading…</div>`;

  const [courses, programMeta] = await Promise.all([
    loadProgramCourses(programName),
    loadProgramMeta(programName),
  ]);

  render(programName, courses, programMeta);
}

function wire() {
  els.programSelect?.addEventListener("change", onProgramChange);

  // Print button
  els.printBtn?.addEventListener("click", () => {
    const programName = els.programSelect?.value || "Program";
    setPrintTitle(programName);
    window.print();
  });

  // Ctrl+P / browser print
  window.addEventListener("beforeprint", () => {
    const programName = els.programSelect?.value || "Program";
    setPrintTitle(programName);
  });

  // Restore tab title after printing
  window.addEventListener("afterprint", () => {
    document.title = ORIGINAL_TITLE;
  });
}

// Boot
wire();
initProgramsDropdown();
