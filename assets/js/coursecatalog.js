// coursecatlog.js
// Pulls from course files AND a program file per program
// Example assumes your files live under /data/programs/… similar to AEMT

/** ---- Registries: map program names to module paths ---- */
const PROGRAM_FILE_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/program.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/program.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/program.js",
};

const PROGRAM_COURSE_REGISTRY = {
  "Advanced Emergency Medical Technician": [
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1202.js",
    "../../data/programs/Advanced Emergency Medical Technician/TEEM 1904.js",
  ],
  "Automation Technology": [
    "../../data/programs/Automation Technology/TEAM 1010.js",
    "../../data/programs/Automation Technology/TEAM 1040.js",
    "../../data/programs/Automation Technology/TEAM 1050.js",
    "../../data/programs/Automation Technology/TEAM 1060.js",
    "../../data/programs/Automation Technology/TEAM 1070.js",
    "../../data/programs/Automation Technology/TEAM 1030.js",
    "../../data/programs/Automation Technology/TEAM 1020.js",
    "../../data/programs/Automation Technology/TEAM 1080.js",
    "../../data/programs/Automation Technology/TEAM 2005.js",
    "../../data/programs/Automation Technology/TEAM 2210.js",
    "../../data/programs/Automation Technology/TEAM 1510.js",
    "../../data/programs/Automation Technology/TEAM 1640.js",
  ],
  "Automotive Technology": [
    "../../data/programs/Automotive Technology/TEAU 1050.js",
    "../../data/programs/Automotive Technology/TEAU 1600.js",
    "../../data/programs/Automotive Technology/TEAU 1800.js",
  ],
};

/* ---- DOM ---- */
const programSelect      = document.getElementById("programSelect");
const printBtn           = document.getElementById("printBtn");

const coverPage          = document.getElementById("coverPage");
const programPage        = document.getElementById("programPage");
const coursesPage        = document.getElementById("coursesPage");

const programNameEl      = document.getElementById("programName");
const programMetaEl      = document.getElementById("programMeta");
const coverTableBody     = document.getElementById("coverTableBody");

const programDescription = document.getElementById("programDescription");
const programObjectives  = document.getElementById("programObjectives");

const coursesContainer   = document.getElementById("coursesContainer");

/* ---- Populate program select ---- */
function populatePrograms() {
  programSelect.innerHTML = `<option value="">Select a program…</option>`;
  Object.keys(PROGRAM_FILE_REGISTRY).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    programSelect.appendChild(opt);
  });
}
populatePrograms();

/* ---- Helpers ---- */
const decodeDefaultArray = (mod) => {
  const candidates = [mod?.default, mod?.program, mod?.programs, mod?.course, mod?.courses];
  const data = candidates.find(Boolean);
  return Array.isArray(data) ? data : (data ? [data] : []);
};

function clearAll() {
  coverTableBody.innerHTML = "";
  programDescription.textContent = "";
  programObjectives.innerHTML = "";
  coursesContainer.innerHTML = "";

  [coverPage, programPage, coursesPage].forEach(s => s.hidden = true);
}

/* ---- Renderers ---- */
function renderCover(programName, programInfo, courses) {
  coverPage.hidden = false;

  const cip = programInfo?.programCIP ?? programInfo?.CIP ?? "N/A";
  const credits = programInfo?.programCreditHours ?? programInfo?.program_credit_hours ?? "N/A";
  const cert = programInfo?.certificate || programInfo?.credential || "";

  programNameEl.textContent = programName;
  programMetaEl.textContent = [
    credits !== "N/A" ? `Credit Hours Required: ${credits}` : "",
    cip !== "N/A" ? `CIP: ${cip}` : "",
    cert ? `Credential: ${cert}` : ""
  ].filter(Boolean).join(" • ");

  courses.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-num">${c.courseNumber || "-"}</td>
      <td class="col-name">${c.courseName || "-"}</td>
      <td class="col-cred" style="text-align:right;">${c.courseCredits ?? ""}</td>
      <td class="col-align">${c.statewideAlignment || (c.aligned ? "Aligned" : "Non-Aligned") || ""}</td>
    `;
    coverTableBody.appendChild(tr);
  });
}

function renderProgramPage(programInfo) {
  programPage.hidden = false;
  programDescription.textContent = programInfo?.programDescription || "";

  const objs = Array.isArray(programInfo?.programObjectives) ? programInfo.programObjectives : [];
  if (objs.length) {
    objs.forEach(o => {
      const li = document.createElement("li");
      li.textContent = o;
      programObjectives.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.innerHTML = `<span class="muted">No program objectives provided.</span>`;
    programObjectives.appendChild(li);
  }
}

function renderCoursesPage(courses) {
  coursesPage.hidden = false;
  courses.forEach(c => {
    const block = document.createElement("article");
    block.className = "course-block";

    const title = document.createElement("h3");
    title.className = "course-title";
    title.textContent = `${c.courseNumber || ""} ${c.courseName ? "— " + c.courseName : ""}`;

    const meta = document.createElement("p");
    meta.className = "course-meta";
    meta.textContent = [
      c.courseCredits != null ? `${c.courseCredits} Credit${Number(c.courseCredits) === 1 ? "" : "s"}` : "",
      c.instructionalType ? `Type: ${c.instructionalType}` : "",
      c.statewideAlignment ? `Alignment: ${c.statewideAlignment}` : ""
    ].filter(Boolean).join(" • ");

    const desc = document.createElement("p");
    desc.textContent = c.courseDescription || "";

    const h = document.createElement("h4");
    h.textContent = "Course Objectives";

    const ul = document.createElement("ul");
    ul.className = "bullets";
    const cos = Array.isArray(c.courseObjectives) ? c.courseObjectives : [];
    if (cos.length) {
      cos.forEach(x => {
        const li = document.createElement("li");
        li.textContent = x;
        ul.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.innerHTML = `<span class="muted">No objectives provided.</span>`;
      ul.appendChild(li);
    }

    block.append(title, meta, desc, h, ul);
    coursesContainer.appendChild(block);
  });
}

/* ---- Main: on program selection ---- */
programSelect.addEventListener("change", async () => {
  clearAll();

  const programName = programSelect.value;
  if (!programName) return;

  const programPath = PROGRAM_FILE_REGISTRY[programName];
  const coursePaths  = PROGRAM_COURSE_REGISTRY[programName] || [];

  // load program info
  let programInfo = null;
  try {
    const mod = await import(/* @vite-ignore */ encodeURI(programPath));
    const arr = decodeDefaultArray(mod);
    programInfo = arr[0] || null;
  } catch (e) {
    console.error("Failed to import program file:", programPath, e);
  }

  // load courses
  let courses = [];
  for (const p of coursePaths) {
    try {
      const mod = await import(/* @vite-ignore */ encodeURI(p));
      const arr = decodeDefaultArray(mod);
      courses = courses.concat(arr);
    } catch (e) {
      console.error("Failed to import course:", p, e);
    }
  }

  // render pages
  renderCover(programName, programInfo, courses);
  renderProgramPage(programInfo || {});
  renderCoursesPage(courses);
});

/* ---- Print ---- */
printBtn.addEventListener("click", () => window.print());
