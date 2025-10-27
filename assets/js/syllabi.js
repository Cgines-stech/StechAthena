// assets/js/syllabi.js
import { outlineTitlesOnly } from "../../data/utils/helpers.js";
import institutionalPolicy from "../../data/institutionalPolicy.js";

/** ------------------------ Registries ------------------------ */
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

// Program-level fallbacks
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

/** ------------------------ DOM ------------------------ */
const programSelect  = document.getElementById("programSelect");
const courseSelect   = document.getElementById("courseSelect");
const printBtn       = document.getElementById("printBtn");

const syllabus       = document.getElementById("syllabus");
const printHeaderTitle = document.getElementById("printHeaderTitle");
const syllabusMeta   = document.getElementById("syllabusMeta");

const courseDescription = document.getElementById("courseDescription");
const courseObjectives  = document.getElementById("courseObjectives");

const instructorsList   = document.getElementById("instructorsList");
const materialsList     = document.getElementById("materialsList");
const policiesContainer = document.getElementById("policiesContainer");

// Outline + Hours
const courseOutlineEl   = document.getElementById("courseOutline");
const hoursContainer    = document.getElementById("hoursContainer");

// Institutional
const institutionalPolicyContainer = document.getElementById("institutionalPolicyContainer");

const aaContainer = document.getElementById("aaContainer");

/** ------------------------ Helpers ------------------------ */
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

/** ------------------------ Init ------------------------ */
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

/** ------------------------ Data cache ------------------------ */
let currentProgramName = "";
let currentProgramCourses = [];
let currentProgramInstructors = [];
let currentProgramHours = [];
let currentProgramPolicies = [];

/** ------------------------ Events ------------------------ */
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
  if (!c) {
    syllabus.hidden = true;
    return;
  }
  renderSyllabus(c);
  syllabus.hidden = false;
});

printBtn.addEventListener("click", () => window.print());
/**
 * Build paginated A&A pages with 2-column lists.
 * Only the last page gets the disclaimer.
 */
function buildAAPages(items) {
  aaContainer.innerHTML = "";
  if (!Array.isArray(items) || !items.length) {
    aaContainer.hidden = true;
    return;
  }

  // PRINT geometry hints:
  // 11" page ~1056px @96dpi; your @page margins are 34/16/34/16
  // We keep a conservative content height to avoid overflows.
  const PAGE_CONTENT_MAX_PX = 970; // tweak if you see over/under-flow
  const SLACK = 12;

  // hidden measuring sandbox
  const sandbox = document.createElement("div");
  sandbox.style.position = "absolute";
  sandbox.style.left = "-99999px";
  sandbox.style.top = "0";
  sandbox.style.width = "800px";
  document.body.appendChild(sandbox);

  let pageIndex = 0;
  let currentPage = createPage(pageIndex === 0);
  let currentList = currentPage.querySelector("ul");

  // a measuring clone of the current page (columns intact to match print height)
  function cloneForMeasure(pageNode) {
    return pageNode.cloneNode(true);
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = (typeof item === "string") ? item : (item?.title || JSON.stringify(item));

    // Try placing on current page
    currentList.appendChild(li);

    // Measure
    const measurePage = cloneForMeasure(currentPage);
    sandbox.appendChild(measurePage);
    const tooTall = measurePage.scrollHeight > (PAGE_CONTENT_MAX_PX - SLACK);
    sandbox.removeChild(measurePage);

    if (tooTall) {
      // Undo add
      currentList.removeChild(li);

      // New page
      pageIndex += 1;
      currentPage = createPage(false);
      currentList = currentPage.querySelector("ul");

      // Place on new page
      currentList.appendChild(li);
    }
  });

  // Disclaimer ONLY on last page
  const pages = aaContainer.querySelectorAll(".aa-page");
  if (pages.length) {
    const last = pages[pages.length - 1];
    const p = document.createElement("p");
    p.className = "aa-disclaimer";
    p.textContent = "Subject to change. Please consult your Canvas course for the most current instructions and updates.";
    last.appendChild(p);
  }

  // Cleanup
  if (sandbox.parentNode) sandbox.parentNode.removeChild(sandbox);
  aaContainer.hidden = false;

  function createPage(isFirst) {
    const sec = document.createElement("section");
    sec.className = "aa-page";

    // Title only on the first page
    if (isFirst) {
      const h3 = document.createElement("h3");
      h3.textContent = "Assignments & Assessments";
      sec.appendChild(h3);
      // Make sure A&A starts on a new page
      sec.style.breakBefore = "page";
      sec.style.pageBreakBefore = "always";
    }

    const ul = document.createElement("ul");
    ul.className = "aa-list";
    sec.appendChild(ul);

    aaContainer.appendChild(sec);
    return sec;
  }
}

/** ------------------------ Render ------------------------ */
function renderSyllabus(c) {
  // Page title for better PDF filenames
  document.title = c?.courseNumber ? c.courseNumber : "Syllabus";

  // Put the course title into the header stripe
  if (printHeaderTitle) {
    const label = [
      c.courseNumber || "",
      c.courseName ? " — " + c.courseName : ""
    ].join("");
    printHeaderTitle.textContent = label || "Course Syllabus";
  }

  // Meta under the (now-removed) H2 stays:
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

  // Course Outline (titles only)
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

  // Ensure previous instructor note is removed, then add it
  const oldNotes = instructorsList.parentElement.querySelectorAll(".instructor-note");
  oldNotes.forEach(n => n.remove());
  const instructorNote = document.createElement("p");
  instructorNote.className = "instructor-note";
  instructorNote.innerHTML = `
    Office Hours: By appointment<br>
    <em>Email is the preferred method of communication; you will receive a response within 24 hours during regular business hours.</em>
  `;
  instructorsList.parentElement.appendChild(instructorNote);

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
      header.textContent = (sd && ed) ? `${sd} – ${ed}` : (sd || ed || "Dates not specified");
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

  // Add link to full course schedule
  const scheduleNote = document.createElement("p");
  scheduleNote.className = "hours-note";
  scheduleNote.innerHTML = `For a full list of course hours visit:
    <a href="https://stech.edu/course-schedules/" target="_blank" rel="noopener">
      Course Schedule
    </a>`;
  hoursContainer.appendChild(scheduleNote);

// Materials — syllabus-only books
materialsList.innerHTML = "";

// -------- Assignments & Assessments (A&A) --------
// Accept common key spellings/variants
const aaRaw =
  (Array.isArray(c.courseAssignmentsandAsssessments) && c.courseAssignmentsandAsssessments) ||
  (Array.isArray(c.courseAssignmentsAndAssessments) && c.courseAssignmentsAndAssessments) ||
  (Array.isArray(c.assignmentsAndAssessments) && c.assignmentsAndAssessments) ||
  [];

if (aaRaw.length) {
  buildAAPages(aaRaw);
  aaContainer.hidden = false;

  // Ensure Hours begins on a new page after A&A
  document.getElementById("hoursSection")?.classList.add("page-break-before");
} else {
  aaContainer.hidden = true;
  aaContainer.innerHTML = "";
  document.getElementById("hoursSection")?.classList.remove("page-break-before");
}

// Accept both spellings; prefer syllabiBooks if present
const mats = Array.isArray(c.syllabiBooks)
  ? c.syllabiBooks
  : (Array.isArray(c.syllabusBooks) ? c.syllabusBooks : []);

if (mats.length) {
  mats.forEach(m => {
    // support strings or objects
    if (typeof m === "string") {
      const li = document.createElement("li");
      li.textContent = m;
      materialsList.appendChild(li);
      return;
    }

    const title   = m.title || m.name || "";
    const author  = m.author ? ` by ${m.author}` : "";
    const isbn    = m.isbn ? ` (ISBN: ${m.isbn})` : "";
    const price   = (typeof m.price === "number")
      ? ` — $${m.price.toFixed(2)}`
      : (m.price ? ` — ${m.price}` : "");

    const text = [title, author, isbn]
      .filter(Boolean)
      .join("");

    const li = document.createElement("li");
    li.textContent = text || "Untitled material";
    materialsList.appendChild(li);
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
      const items = (p.scale || []).slice(0, total);
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

  // Institutional Policy (static data file)
  institutionalPolicyContainer.innerHTML = "";
  if (Array.isArray(institutionalPolicy) && institutionalPolicy.length) {
    institutionalPolicy.forEach(section => {
      if (Array.isArray(section.content)) {
        const div = document.createElement("div");
        section.content.forEach(pText => {
          const p = document.createElement("p");
          p.innerHTML = pText; // includes <a> and <br> tags
          div.appendChild(p);
        });
        institutionalPolicyContainer.appendChild(div);
      }
    });
  }
}
