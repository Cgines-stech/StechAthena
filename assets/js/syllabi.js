// assets/js/syllabi.js
import { outlineTitlesOnly } from "../../utils/helpers.js";

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

// NEW: program-level fallbacks
const PROGRAM_INSTRUCTORS_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/instructors.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/instructors.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/instructors.js",
};
const PROGRAM_HOURS_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/classRoomDates.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/classRoomDates.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/classRoomDates.js",
};
const PROGRAM_POLICIES_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/programPolicies.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/programPolicies.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/programPolicies.js",
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

// NEW: outline list element
const courseOutlineEl   = document.getElementById("courseOutline");

// NEW: hours container
const hoursContainer    = document.getElementById("hoursContainer");

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

// Treat [ {} ] or [{} , {}] (empty objects) as placeholder/empty
const isPlaceholderArray = (arr) =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  arr.every(x => x && typeof x === "object" && Object.keys(x).length === 0);

// general loader helper
async function safeImport(path) {
  if (!path) return null;
  try {
    return await import(/* @vite-ignore */ encodeURI(path));
  } catch (e) {
    console.error("Failed to import:", path, e);
    return null;
  }
}

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

/** Data cache */
let currentProgramName = "";
let currentProgramCourses = [];
let currentProgramInstructors = [];
let currentProgramHours = [];
let currentProgramPolicies = [];

programSelect.addEventListener("change", async () => {
  syllabus.hidden = true;
  currentProgramName = programSelect.value;
  courseSelect.innerHTML = `<option value="">Select a course…</option>`;
  currentProgramCourses = [];
  currentProgramInstructors = [];
  currentProgramHours = [];
  currentProgramPolicies = [];

  if (!currentProgramName) return;

  // load courses
  for (const p of (PROGRAM_COURSE_REGISTRY[currentProgramName] || [])) {
    const mod = await safeImport(p);
    if (mod) currentProgramCourses = currentProgramCourses.concat(decodeDefaultArray(mod));
  }

  // load program-level fallbacks
  const imod = await safeImport(PROGRAM_INSTRUCTORS_REGISTRY[currentProgramName]);
  if (imod) currentProgramInstructors = decodeInstructors(imod);

  const hmod = await safeImport(PROGRAM_HOURS_REGISTRY[currentProgramName]);
  if (hmod) currentProgramHours = hmod.default || [];

  const pmod = await safeImport(PROGRAM_POLICIES_REGISTRY[currentProgramName]);
  if (pmod) currentProgramPolicies = pmod.default || [];

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
  if (!c) { syllabus.hidden = true; return; }
  renderSyllabus(c);
  syllabus.hidden = false;
});

function renderSyllabus(c) {
  // --- Set page title for better PDF filenames ---
  if (c.courseNumber) {
    document.title = c.courseNumber;
  } else {
    document.title = "Syllabus";
  }
  
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

  // --- Course Outline (titles only) ---
courseOutlineEl.innerHTML = "";
const outlineTitles = outlineTitlesOnly(c);
(outlineTitles.length ? outlineTitles : ["No outline provided."]).forEach(title => {
  const li = document.createElement("li");
  li.innerHTML = title === "No outline provided." ? `<span class="muted">${title}</span>` : title;
  courseOutlineEl.appendChild(li);
});

  // Instructors — course overrides if non-placeholder; else program default
  instructorsList.innerHTML = "";
  const courseInstrRaw = Array.isArray(c.instructorContactInformation) ? c.instructorContactInformation : [];
  const courseHasRealInstructors =
    courseInstrRaw.length > 0 && !isPlaceholderArray(courseInstrRaw);

  const useInstructors = courseHasRealInstructors
    ? courseInstrRaw.map(line => {
        if (typeof line === "string") return { display: line };
        const name  = line?.name || "";
        const email = line?.email || "";
        const title = line?.title || "";
        const display = [name, title && `(${title})`, email && `— ${email}`].filter(Boolean).join(" ");
        return { name, email, title, display: display || "" };
      })
    : currentProgramInstructors;

  if (useInstructors.length) {
    useInstructors.forEach(i => {
      const li = document.createElement("li");
      li.textContent = i.display || "";
      instructorsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.innerHTML = `<span class="muted">No instructor information available.</span>`;
    instructorsList.appendChild(li);
  }

  // Classroom Hours — course overrides if non-placeholder; else program default
  hoursContainer.innerHTML = "";
  const courseHoursRaw = Array.isArray(c.courseClassroomHours) ? c.courseClassroomHours : [];
  const courseHasRealHours =
    courseHoursRaw.length > 0 && !isPlaceholderArray(courseHoursRaw);

  const hours = courseHasRealHours ? courseHoursRaw : currentProgramHours;

  if (Array.isArray(hours) && hours.length) {
    hours.forEach(h => {
      const block = document.createElement("div");
      const header = document.createElement("p");
      const sd = h.startDate || "";
      const ed = h.endDate || "";
      header.innerHTML = `<strong>${sd && ed ? `${sd} – ${ed}` : (sd || ed || "Dates not specified")}</strong>`;
      block.appendChild(header);

      const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
      const dayList = document.createElement("ul");
      dayList.className = "bullets";
      let any = false;
      days.forEach(d => {
        const val = h[d];
        if (val) {
          any = true;
          const li = document.createElement("li");
          li.textContent = `${d}: ${val}`;
          dayList.appendChild(li);
        }
      });
      if (!any) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="muted">No weekly meeting times listed.</span>`;
        dayList.appendChild(li);
      }
      block.appendChild(dayList);
      hoursContainer.appendChild(block);
    });
  } else {
    const p = document.createElement("p");
    p.innerHTML = `<span class="muted">No classroom hours available.</span>`;
    hoursContainer.appendChild(p);
  }

  // Materials — syllabus-only books
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

  // Policies — course overrides if non-placeholder; else program default
  policiesContainer.innerHTML = "";
  const coursePoliciesRaw = Array.isArray(c.course_Policies) ? c.course_Policies : [];
  const courseHasRealPolicies =
    coursePoliciesRaw.length > 0 && !isPlaceholderArray(coursePoliciesRaw);

  const policies = courseHasRealPolicies ? coursePoliciesRaw : currentProgramPolicies;

  (policies || []).forEach(p => {
    // Grade scale block
    if (p && (p.type === "gradeScale" || Array.isArray(p.scale))) {
      const wrap = document.createElement("div");
      if (p.title) {
        const h = document.createElement("h4");
        h.textContent = p.title;
        wrap.appendChild(h);
      }
      if (p.description) {
        const desc = document.createElement("p");
        desc.className = "muted";
        desc.textContent = p.description;
        wrap.appendChild(desc);
      }

      const tbl = document.createElement("table");
      tbl.className = "grade-table";
      const rows = 3, cols = 4;
      const total = rows * cols;
      const items = p.scale.slice(0, total);
      for (let r = 0; r < rows; r++) {
        const tr = document.createElement("tr");
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const cell = document.createElement("td");
          const entry = items[idx];
          if (entry) {
            cell.innerHTML = `
              <span class="grade">
                <span class="grade-letter">${entry.letter ?? ""}</span>
                <span class="grade-range">${entry.range ?? ""}</span>
              </span>`;
          }
          tr.appendChild(cell);
        }
        tbl.appendChild(tr);
      }
      wrap.appendChild(tbl);
      policiesContainer.appendChild(wrap);
      return;
    }

    // Standard policy blocks
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
