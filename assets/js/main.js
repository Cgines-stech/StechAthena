// assets/js/main.js

import gradeScale from "../../data/gradescale.js";
import { DEPARTMENTS } from "../../data/departments.js";
import { PROGRAMS } from "../../data/programs.js";
import { courseTotals, money } from "../../data/utils/helpers.js";

/* ---------- tiny DOM helpers ---------- */
const el = (tag, className, html = "") => {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (html) n.innerHTML = html;
  return n;
};
const safeJoin = (arr = [], sep = "") => arr.filter(Boolean).join(sep);

/* ---------- lookups ---------- */
const deptById = Object.fromEntries(DEPARTMENTS.map(d => [d.id, d]));
const app = document.getElementById("app");

/* ---------- UI: controls ---------- */
const controls = el("div", "card");
controls.innerHTML = `
  <h2>Select a Program & Course</h2>
  <div style="display:flex; gap:1rem; align-items:end; flex-wrap:wrap;">
    <div>
      <label for="programSelect" class="muted">Program</label><br/>
      <select id="programSelect" style="min-width:280px; padding:.5rem; border-radius:8px; border:1px solid #ccc;"></select>
    </div>
    <div>
      <label for="courseSelect" class="muted">Course</label><br/>
      <select id="courseSelect" style="min-width:280px; padding:.5rem; border-radius:8px; border:1px solid #ccc;" disabled>
        <option value="">Select a program first</option>
      </select>
    </div>
  </div>
  <p class="muted" id="helperNote" style="margin-top:.75rem;"></p>
`;
app.appendChild(controls);

const programSelect = controls.querySelector("#programSelect");
const courseSelect  = controls.querySelector("#courseSelect");
const helperNote    = controls.querySelector("#helperNote");

/* ---------- Course registry ---------- */
const COURSE_REGISTRY = {
  "Advanced Emergency Medical Technician": async () => ([
    { label: "TEEM 1202 — AEMT Foundations",      path: "../../data/programs/Advanced Emergency Medical Technician/TEEM 1202.js" },
    { label: "TEEM 1904 — AEMT Clinical Practice", path: "../../data/programs/Advanced Emergency Medical Technician/TEEM 1904.js" },
  ]),
  "Automation Technology": async () => ([
    { label: "TEAM 1010 — Essential Skills & Safety",      path: "../../data/programs/Automation Technology/TEAM 1010.js" },
    { label: "TEAM 1040 — Industrial Mechanics",      path: "../../data/programs/Automation Technology/TEAM 1040.js" },
    { label: "TEAM 1050 — Electrical Systems",      path: "../../data/programs/Automation Technology/TEAM 1050.js" },
    { label: "TEAM 1060 — Motor Controls",      path: "../../data/programs/Automation Technology/TEAM 1060.js" },
    { label: "TEAM 1070 — Programmable Logic Controllers",      path: "../../data/programs/Automation Technology/TEAM 1070.js" },
    { label: "TEAM 1030 — Hydraulics",      path: "../../data/programs/Automation Technology/TEAM 1030.js" },
    { label: "TEAM 1020 — Pneumatics",      path: "../../data/programs/Automation Technology/TEAM 1020.js" },
    { label: "TEAM 1080 — Applied System Diagnostics",      path: "../../data/programs/Automation Technology/TEAM 1080.js" },
    { label: "TEAM 2005 — Programmable Logic Controllers II",      path: "../../data/programs/Automation Technology/TEAM 2005.js" },
    { label: "TEAM 2210 — Fabrication and Repair",      path: "../../data/programs/Automation Technology/TEAM 2210.js" },
    { label: "TEAM 1510 — Process Control Components and Systems",      path: "../../data/programs/Automation Technology/TEAM 1510.js" },
    { label: "TEAM 1640 — Electrical Systems II",      path: "../../data/programs/Automation Technology/TEAM 1640.js" },
  ]),
  "Automotive Technology": async () => ([
    { label: "TEAU 1050 — Workshop Practices and Safety",      path: "../../data/programs/Automotive Technology/TEAU 1050.js" },
    { label: "TEAU 1600 — Electrical I",      path: "../../data/programs/Automotive Technology/TEAU 1600.js" },
    { label: "TEAU 1800 — Engine Performance I",      path: "../../data/programs/Automotive Technology/TEAU 1800.js" },
    { label: "TEAU 1055 — Math for Automotive Technicians",      path: "../../data/programs/Automotive Technology/TEAU 1055.js" },
    { label: "TEAU 2640 — Electrical II",      path: "../../data/programs/Automotive Technology/TEAU 2640.js" },
    { label: "TEAU 2840 — Engine Performance II",      path: "../../data/programs/Automotive Technology/TEAU 2840.js" },
    { label: "TEAU 1740 — Heating and Air Conditioning",      path: "../../data/programs/Automotive Technology/TEAU 1740.js" },
    { label: "TEAU 1500 — Brakes",      path: "../../data/programs/Automotive Technology/TEAU 1500.js" },
    { label: "TEAU 1340 — Manual Drive Trains and Axles",      path: "../../data/programs/Automotive Technology/TEAU 1340.js" },
    { label: "TEAU 1400 — Suspension and Steering",      path: "../../data/programs/Automotive Technology/TEAU 1400.js" },
    { label: "TEAU 1240 — Automatic Transmissions and Transaxles",      path: "../../data/programs/Automotive Technology/TEAU 1240.js" },
    { label: "TEAU 1140 — Engine Repair",      path: "../../data/programs/Automotive Technology/TEAU 1140.js" },
  ]),
};

/* ---------- Populate programs ---------- */
function populatePrograms() {
  programSelect.innerHTML = `<option value="">Select a program…</option>`;
  PROGRAMS.forEach(p => {
    const deptName = deptById[p.department_id]?.Program || "Unknown Dept";
    const opt = el("option", "", `${p.name} — ${deptName}`);
    opt.value = p.name;
    programSelect.appendChild(opt);
  });
}
populatePrograms();

/* ---------- Program change ---------- */
programSelect.addEventListener("change", async () => {
  const programName = programSelect.value;
  clearDetails();

  if (!programName) {
    courseSelect.innerHTML = `<option value="">Select a program first</option>`;
    courseSelect.disabled = true;
    helperNote.textContent = "";
    return;
  }

  helperNote.textContent = "Loading available courses…";
  courseSelect.disabled = true;
  courseSelect.innerHTML = `<option value="">Loading…</option>`;

  const loader = COURSE_REGISTRY[programName];
  if (!loader) {
    courseSelect.innerHTML = `<option value="">Courses not wired yet for this program</option>`;
    helperNote.textContent = "Tip: add this program’s courses to COURSE_REGISTRY.";
    return;
  }

  try {
    const courses = await loader();
    courseSelect.innerHTML = `<option value="">Select a course…</option>`;
    courses.forEach(c => {
      const opt = el("option", "", c.label);
      // encode path to be URL-safe (spaces, etc.)
      opt.value = encodeURI(c.path);
      courseSelect.appendChild(opt);
    });
    courseSelect.disabled = false;
    helperNote.textContent = "Choose a course to see details, schedule, and estimated costs.";
  } catch (e) {
    console.error("Failed to load course list:", e);
    courseSelect.innerHTML = `<option value="">Failed to load courses</option>`;
    helperNote.textContent = "There was a problem loading courses.";
  }
});

/* ---------- Course change (dynamic import) ---------- */
courseSelect.addEventListener("change", async () => {
  const path = courseSelect.value;
  clearDetails();
  if (!path) return;

  try {
    // Some bundlers need the comment to avoid pre-bundling; harmless in plain ESM
    const mod = await import(/* @vite-ignore */ path);
    console.log("Imported module:", mod);

    // Accept multiple export shapes
    const candidates = [
      mod?.default,
      mod?.course,
      mod?.courses,
      mod?.advancedEmergencyMedicalTechnician, 
    ];
    const data = candidates.find(Boolean);

    // If it's an array, use first entry; if it's an object, use it directly
    const course = Array.isArray(data) ? data[0] : data;

    if (!course) {
      console.warn("Module loaded but no course object found. Export was:", Object.keys(mod || {}));
      renderNotice("Couldn’t read course data from the selected file.");
      return;
    }

    renderCourseDetail(course);
  } catch (e) {
    console.error("Dynamic import failed:", e);
    renderNotice("There was a problem loading that course file.");
  }
});

/* ---------- helpers: renderers ---------- */
function clearDetails() {
  const existing = document.querySelector("#detailCard");
  if (existing) existing.remove();
}

function renderNotice(text) {
  const card = el("div", "card", `<p class="muted">${text}</p>`);
  card.id = "detailCard";
  app.appendChild(card);
}

function renderCourseDetail(course) {
  const detail = el("div", "card");
  detail.id = "detailCard";

  const totals = courseTotals(course);
  const hrs = Array.isArray(course.courseClassroomHours) ? course.courseClassroomHours[0] : null;

  const scheduleTable = hrs ? `
    <table style="width:100%; border-collapse:collapse; margin-top:.5rem;">
      <thead>
        <tr>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Start</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">End</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Mon</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Tue</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Wed</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Thu</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Fri</th>
          <th style="text-align:left; border-bottom:1px solid #eee; padding:.25rem 0;">Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:.25rem 0;">${hrs.startDate || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.endDate || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.Monday || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.Tuesday || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.Wednesday || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.Thursday || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.Friday || "-"}</td>
          <td style="padding:.25rem 0;">${hrs.Saturday || "-"}</td>
        </tr>
      </tbody>
    </table>
  ` : "";

  const instructors = (course.instructorContactInformation || []).map(x => `<li>${x}</li>`).join("");

const gs = Array.isArray(gradeScale) && gradeScale[0] ? gradeScale[0] : null;

let gradeScaleHtml = "";
if (gs && Array.isArray(gs.scale) && gs.scale.length) {
  // ensure exactly 12 cells (pad or trim)
  const scale = gs.scale.slice(0, 12);
  while (scale.length < 12) scale.push({ letter: "", range: "" });

  // build 3 rows x 4 columns
  const rows = [0, 1, 2].map(r => scale.slice(r * 4, r * 4 + 4));

  gradeScaleHtml = `
    <section class="subsection">
      <h3>${gs.title}</h3>
      ${gs.description ? `<p class="muted">${gs.description}</p>` : ""}
      <table class="grade-table">
        <tbody>
          ${rows
            .map(
              row => `
              <tr>
                ${row
                  .map(
                    cell => `
                    <td>
                      <div class="grade">
                        <span class="grade-letter">${cell.letter || ""}</span>
                        <span class="grade-range">${cell.range || ""}</span>
                      </div>
                    </td>`
                  )
                  .join("")}
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </section>
  `;
}


  const costRows = [
    totals.tuitionAndFees ? `<li><strong>Tuition & Fees:</strong> ${money(totals.tuitionAndFees)}</li>` : "",
    totals.books ? `<li><strong>Books:</strong> ${money(totals.books)}</li>` : "",
    totals.tools ? `<li><strong>Tools:</strong> ${money(totals.tools)}</li>` : "",
    totals.certs ? `<li><strong>Certifications:</strong> ${money(totals.certs)}</li>` : "",
    totals.other ? `<li><strong>Other:</strong> ${money(totals.other)}</li>` : "",
    `<li><strong>Total:</strong> ${money(totals.grand)}</li>`
  ].join("");

  detail.innerHTML = `
    <h2>${course.courseNumber || ""} ${course.courseNumber && course.courseName ? "—" : ""} ${course.courseName || ""}</h2>
    ${course.programDescription ? `<p>${course.programDescription}</p>` : ""}
    ${scheduleTable}
    ${instructors ? `
      <h3>Instructors</h3>
      <ul>${instructors}</ul>
    ` : ""}
    ${costRows ? `
      <h3>Estimated Costs</h3>
      <ul>${costRows}</ul>
    ` : ""}
    ${gradeScaleHtml}
  `;

  app.appendChild(detail);
}

/* ---------- Initial helper note ---------- */
helperNote.textContent = "Pick a program, then a course. Only AEMT is wired up here for now.";
