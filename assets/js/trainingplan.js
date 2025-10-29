// assets/js/trainingplan.js
// Training Plan page logic
// - Program dropdown sourced from central registry
// - Shows: Program name, each Course "number — name", and Course Outline (title — hours)
// - Print-friendly (controls hidden in print)

import {
  listPrograms,
  getCourseFiles,
  encodePath,
} from "../../data/programs.registry.js";

const els = {
  programSelect: document.getElementById("programSelect"),
  programTitle: document.getElementById("programTitle"),
  courseList: document.getElementById("courseList"),
  printBtn: document.getElementById("printBtn"),
};

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
      const mod = await import(encodePath(relPath));
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

function render(programName, courses){
  els.programTitle.textContent = programName || "Select a program…";

  if (!programName){
    els.courseList.innerHTML = "";
    return;
  }

  if (!courses || courses.length === 0){
    els.courseList.innerHTML = `<div class="hint">No courses found for this program.</div>`;
    return;
  }

  const cards = courses.map(c => {
    if (c.__error){
      const file = c.relPath?.split("/").pop();
      return `<article class="course-card error"><h3>⚠ Error loading ${htmlEscape(file || "course")}</h3></article>`;
    }

    const number = c.courseNumber || "";
    const name = c.courseName || "";
    const outline = Array.isArray(c.courseOutline) ? c.courseOutline : [];

    const outlineList = outline.length
      ? `<ol class="outline">${outline.map(i => `
            <li><span class="title">${htmlEscape(i.title || "Untitled")}</span>
                <span class="hours">${Number(i.hours || 0)} hrs</span></li>
          `).join("")}</ol>`
      : `<div class="hint small">No outline available.</div>`;

    return `
      <article class="course-card">
        <h3 class="course-head">${htmlEscape(number)} — ${htmlEscape(name)}</h3>
        ${outlineList}
      </article>
    `;
  }).join("");

  els.courseList.innerHTML = cards;
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
  els.courseList.innerHTML = `<div class="hint">Loading…</div>`;
  const courses = await loadProgramCourses(programName);
  render(programName, courses);
}

function wire(){
  els.programSelect.addEventListener("change", onProgramChange);
  els.printBtn?.addEventListener("click", () => window.print());
}

// Boot
wire();
initProgramsDropdown();
