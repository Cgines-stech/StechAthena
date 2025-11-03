// data/programs.registry.js
// Single source of truth for program + course files (and helpers)

export const PROGRAM_FILE_REGISTRY = {
  "Advanced Emergency Medical Technician":
    "../../data/programs/Advanced Emergency Medical Technician/program.js",
  "Automation Technology":
    "../../data/programs/Automation Technology/program.js",
  "Automotive Technology":
    "../../data/programs/Automotive Technology/program.js",
  "Paramedic":
    "../../data/programs/Paramedic/program.js",
};

export const PROGRAM_COURSE_REGISTRY = {
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
  "Commercial Driver's License Clas A": [
    "../../data/programs/Commercial Driver's License Class A/TECD 1100.js",
  ],
  "Paramedic": [
    "../../data/programs/Paramedic/TEPA 1000.js",
    "../../data/programs/Paramedic/TEPA 1110.js",
    "../../data/programs/Paramedic/TEPA 1111.js",
    "../../data/programs/Paramedic/TEPA 2993.js",
    "../../data/programs/Paramedic/TEPA 1501.js",
    "../../data/programs/Paramedic/TEPA 1511.js",
    "../../data/programs/Paramedic/TEPA 2994.js",
    "../../data/programs/Paramedic/TEPA 2121.js",
    "../../data/programs/Paramedic/TEPA 2999.js",
  ],
};

// Optional: if you keep an instructors.js per program, this returns the expected path.
export function getInstructorsModulePath(programName) {
  return `../../data/programs/${programName}/instructors.js`;
}

// Quality-of-life helpers (safe to import anywhere)
export function listPrograms() {
  return Object.keys(PROGRAM_COURSE_REGISTRY).sort();
}

export function getCourseFiles(programName) {
  return PROGRAM_COURSE_REGISTRY[programName] || [];
}

export function getProgramFile(programName) {
  return PROGRAM_FILE_REGISTRY[programName] || null;
}

export function encodePath(p) {
  return String(p).replace(/ /g, "%20");
}
