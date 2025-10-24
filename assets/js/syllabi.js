// assets/js/syllabi.js

/** Registries */
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
    "../../data/programs/Automotive Technology/TEAU 1055.js",
    "../../data/programs/Automotive Technology/TEAU 2640.js",
    "../../data/programs/Automotive Technology/TEAU 2840.js",
    "../../data/programs/Automotive Technology/TEAU 1740.js",
    "../../data/programs/Automotive Technology/TEAU 1500.js",
    "../../data/programs/Automotive Technology/TEAU 1340.js",
    "../../data/programs/Automotive Technology/TEAU 1400.js",
    "../../data/programs/Automotive Technology/TEAU 1240.js",
    "../../data/programs/Automotive Technology/TEAU 1140.js",
    "../../data/programs/Automotive Technology/TEAU 2910.js",
    "../../data/programs/Automotive Technology/TEAU 2911.js",
    "../../data/programs/Automotive Technology/TEAU 2912.js",
    "../../data/programs/Automotive Technology/TEAU 2913.js",
    "../../data/programs/Automotive Technology/TEAU 2914.js",
    "../../data/programs/Automotive Technology/TEAU 2915.js",
  ],
};

const PROGRAM_INSTRUCTORS_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/instructors.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/instructors.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/instructors.js",
};

/** DOM */
const programSelect = document.getElementById("programSelect");
const courseSelect  = document.getElementById("courseSelect");
const printBtn      = document.getElementById("printBtn");

const syllabus      = document.getElementById("syllabus");
const syllabusTitle = document.getElementById("syllabusTitle");
const syllabusMeta  = document.getElementById("syllabusMeta");

const courseDescription = document.getElementById("courseDescription");
const courseObjectives  = document.getElementById("courseObjectives");

const instructorsList   = document.getElementById("instructorsList");
const materialsList     = document.getElementById("materialsList");
const policiesContainer = document.getElementById("policiesContainer");

/** Helpers */
const decodeDefaultArray = (mod) => {
  const candidates = [mod?.default, mod?.program, mod?.programs, mod?.course, mod?.courses];
  const data = candidates.find(Boolean);
  return Array.isArray(data) ? data : (data ? [data] : []);
};

const decodeInstructors = (mod) => {
  const raw = mod?.default ?? mod?.instructors ?? mod?.list ?? [];
  const arr = Array.isArray(raw) ? raw : [raw];
  return arr.map(i => {
    if (typeof i === "string") return { display: i };
    const name  = i?.name || "";
    const email = i?.email || "";
    const title = i?.title || "";
    const phone = i?.phone || "";
    const office = i?.office || "";
    const display = [name, title && `(${title})`, email && `— ${email}`].filter(Boolean).join(" ");
    return { name, email, title, phone, office, display: display || "" };
  });
};

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

/** Data cache per selection */
let currentProgramCourses = [];
let currentProgramInstructors = [];

programSelect.addEventListener("change", async () => {
  syllabus.hidden = true;
  courseSelect.innerHTML = `<option value="">Select a course…</option>`;
  currentProgramCourses = [];
  currentProgramInstructors = [];

  const programName = programSelect.value;
  if (!programName) return;

  // load courses
  const paths = PROGRAM_COURSE_REGISTRY[programName] || [];
  for (const p of paths) {
    try {
      const mod = await import(/* @vite-ignore */ encodeURI(p));
      currentProgramCourses = currentProgramCourses.concat(decodeDefaultArray(mod));
    } catch (e) {
      console.error("Failed to import course:", p, e);
    }
  }

  // load program instructors
  try {
    const ipath = PROGRAM_INSTRUCTORS_REGISTRY[programName];
    if (ipath) {
      const imod = await import(/* @vite-ignore */ encodeURI(ipath));
      currentProgramInstructors = decodeInstructors(imod);
    }
  } catch (e) {
    console.error("Failed to import instructors:", e);
  }

  // populate course dropdown
  currentProgramCourses.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.courseNumber || "";
    opt.textContent = `${c.courseNumber || ""} ${c.courseName ? "— " + c.courseName : ""}`;
    courseSelect.appendChild(opt);
  });
});

courseSelect.addEventListener("change", () => {
  const num = courseSelect.value;
  const c = currentProgramCourses.find(x => x.courseNumber === num);
  if (!c) {
    syllabus.hidden = true;
    return;
  }
  renderSyllabus(c);
  syllabus.hidden = false;
});

function renderSyllabus(c) {
  // Title & meta
  syllabusTitle.textContent = `${c.courseNumber || ""} ${c.courseName ? "— " + c.courseName : ""}`;
  syllabusMeta.textContent = [
    c.courseCredits != null ? `${c.courseCredits} Credit${Number(c.courseCredits) === 1 ? "" : "s"}` : "",
    c.instructionalType ? `Type: ${c.instructionalType}` : "",
    c.statewideAlignment ? `Alignment: ${c.statewideAlignment}` : "",
  ].filter(Boolean).join(" • ");

  // Description & Objectives
  courseDescription.textContent = c.courseDescription || "";
  courseObjectives.innerHTML = "";
  const cos = Array.isArray(c.courseObjectives) ? c.courseObjectives : [];
  (cos.length ? cos : ["No objectives provided."]).forEach(text => {
    const li = document.createElement("li");
    li.innerHTML = text === "No objectives provided." ? `<span class="muted">${text}</span>` : text;
    courseObjectives.appendChild(li);
  });

  // Instructors (course overrides program)
  instructorsList.innerHTML = "";
  const courseInstrRaw = Array.isArray(c.instructorContactInformation) ? c.instructorContactInformation : [];
  const courseHasInstructors = courseInstrRaw.length > 0;

  const courseInstructors = courseHasInstructors
    ? courseInstrRaw.map(line => {
        if (typeof line === "string") return { display: line };
        const name  = line?.name || "";
        const email = line?.email || "";
        const title = line?.title || "";
        const display = [name, title && `(${title})`, email && `— ${email}`].filter(Boolean).join(" ");
        return { name, email, title, display: display || "" };
      })
    : currentProgramInstructors;

  if (courseInstructors.length) {
    courseInstructors.forEach(i => {
      const li = document.createElement("li");
      li.textContent = i.display || "";
      instructorsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.innerHTML = `<span class="muted">No instructor information available.</span>`;
    instructorsList.appendChild(li);
  }

  // Materials (Syllabus-only books)
  // Use `syllabusBooks` (new field) for items that should NOT affect the training plan.
  // Each item can be a string or { title, author, isbn, edition, notes }
  materialsList.innerHTML = "";
  const mats = Array.isArray(c.syllabusBooks) ? c.syllabusBooks : [];
  if (mats.length) {
    mats.forEach(m => {
      if (typeof m === "string") {
        const li = document.createElement("li");
        li.textContent = m;
        materialsList.appendChild(li);
      } else {
        const li = document.createElement("li");
        const title = m.title || m.name || "";
        const author = m.author ? ` by ${m.author}` : "";
        const edition = m.edition ? `, ${m.edition}` : "";
        const isbn = m.isbn ? ` (ISBN: ${m.isbn})` : "";
        const notes = m.notes ? ` — ${m.notes}` : "";
        li.textContent = `${title}${author}${edition}${isbn}${notes}`;
        materialsList.appendChild(li);
      }
    });
  } else {
    const li = document.createElement("li");
    li.innerHTML = `<span class="muted">No additional materials required.</span>`;
    materialsList.appendChild(li);
  }

  // Policies (reuse your existing course_Policies array)
  policiesContainer.innerHTML = "";
  const policies = Array.isArray(c.course_Policies) ? c.course_Policies : [];
  policies.forEach(p => {
    if (p && typeof p === "object" && p.title && Array.isArray(p.content)) {
      const h = document.createElement("h4");
      h.textContent = p.title;
      const ul = document.createElement("ul");
      ul.className = "bullets";
      p.content.forEach(line => {
        const li = document.createElement("li");
        li.textContent = line;
        ul.appendChild(li);
      });
      policiesContainer.appendChild(h);
      policiesContainer.appendChild(ul);
    }
  });
}

printBtn.addEventListener("click", () => window.print());
