// assets/js/main.js

import gradeScale from "../../data/gradescale.js";
import { DEPARTMENTS } from "../../data/departments.js";
import { PROGRAMS } from "../../data/programs.js";
import AEMT from "../../data/programs/Advanced Emergency Medical Technician/program.js";
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

/* ---------- render: program cards ---------- */
PROGRAMS.forEach(p => {
  const deptName = deptById[p.department_id]?.Program || "Unknown Dept";
  const detailsList = [
    p.CIP ? `<li><strong>CIP:</strong> ${p.CIP}</li>` : "",
    p.credential ? `<li><strong>Credential:</strong> ${p.credential}</li>` : "",
    p.program_credit_hours ? `<li><strong>Credit Hours:</strong> ${p.program_credit_hours}</li>` : "",
  ];

  const card = el("div", "card", `
    <h2>${p.name}</h2>
    <div class="muted">${deptName}</div>
    <ul>${safeJoin(detailsList, "")}</ul>
  `);

  app.appendChild(card);
});

/* ---------- render: AEMT course details (example) ---------- */
const detail = el("div", "card");
const aemt = Array.isArray(AEMT) ? AEMT[0] : null;

if (aemt) {
  // totals (tuition/fees + books/tools/certs/other)
  const totals = courseTotals(aemt);

  // schedule table (if present)
  const hrs = Array.isArray(aemt.courseClassroomHours) ? aemt.courseClassroomHours[0] : null;
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

  // instructor list
  const instructors = (aemt.instructorContactInformation || []).map(x => `<li>${x}</li>`).join("");

  // grade scale (first set only for brevity)
  const gs = Array.isArray(gradeScale) && gradeScale[0] ? gradeScale[0] : null;
  const gradeScaleHtml = gs ? `
    <h3>${gs.title}</h3>
    <p class="muted">${gs.description || ""}</p>
    <ul>${gs.scale.map(s => `<li><strong>${s.letter}</strong>: ${s.range}</li>`).join("")}</ul>
  ` : "";

  // costs block (only show rows that are non-zero)
  const costRows = [
    totals.tuitionAndFees ? `<li><strong>Tuition & Fees:</strong> ${money(totals.tuitionAndFees)}</li>` : "",
    totals.books ? `<li><strong>Books:</strong> ${money(totals.books)}</li>` : "",
    totals.tools ? `<li><strong>Tools:</strong> ${money(totals.tools)}</li>` : "",
    totals.certs ? `<li><strong>Certifications:</strong> ${money(totals.certs)}</li>` : "",
    totals.other ? `<li><strong>Other:</strong> ${money(totals.other)}</li>` : "",
    `<li><strong>Total:</strong> ${money(totals.grand)}</li>`
  ].join("");

  detail.innerHTML = `
    <h2>${aemt.courseNumber} — ${aemt.courseName}</h2>

    ${aemt.programDescription ? `<p>${aemt.programDescription}</p>` : ""}

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
}

app.appendChild(detail);
