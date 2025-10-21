import gradeScale from "../../data/gradescale.js";
import { DEPARTMENTS } from "../../data/departments.js";
import { PROGRAMS } from "../../data/programs.js";
import AEMT from "../../data/programs/Advanced Emergency Medical Technician/program.js";

// Lookup helper
const deptById = Object.fromEntries(DEPARTMENTS.map(d => [d.id, d]));
const app = document.getElementById("app");

// Render programs
PROGRAMS.forEach(p => {
  const dept = deptById[p.department_id]?.Program || "Unknown Dept";
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${p.name}</h2>
    <div class="muted">${dept}</div>
    <ul>
      ${p.CIP ? `<li><strong>CIP:</strong> ${p.CIP}</li>` : ""}
      ${p.credential ? `<li><strong>Credential:</strong> ${p.credential}</li>` : ""}
      ${p.program_credit_hours ? `<li><strong>Credit Hours:</strong> ${p.program_credit_hours}</li>` : ""}
    </ul>
  `;
  app.appendChild(card);
});

// Example: render details for AEMT program and grade scale
const detail = document.createElement("div");
detail.className = "card";
const aemt = Array.isArray(AEMT) ? AEMT[0] : null;
detail.innerHTML = `
  <h2>Advanced Emergency Medical Technician (Details)</h2>
  ${aemt?.programDescription ? `<p>${aemt.programDescription}</p>` : ""}
  ${Array.isArray(gradeScale) ? `
    <h3>${gradeScale[0].title}</h3>
    <p>${gradeScale[0].description}</p>
    <ul>
      ${gradeScale[0].scale.map(s => `<li>${s.letter}: ${s.range}</li>`).join("")}
    </ul>` : ""}
`;
app.appendChild(detail);
