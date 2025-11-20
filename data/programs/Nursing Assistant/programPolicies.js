// data/programs/Emergency Medical Technician/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "EACH exam score must be 75% or higher, all skills must be passed off at 100%, and an overall grade of 80% must be maintained in order to attend clinical rotations, pass the course, and be approved to sit for the state certification exam. Any grade below a B- is considered failing the course.",
      "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year.",
    ]
  },

  // Special, typed block for the grade scale
  {
    type: "gradeScale",
    title: GS?.title || "Grading Scale",
    description: GS?.description || "",
    scale: GS?.scale || []   // expecting 12 items with { letter, range }
  },

  {
    title: "General Course Policies",
    content: [
      "Course Policies:",
      "<strong>Prerequisites:</strong> Students must be 16 years old on the first day of class. Students must have a current CPR certification (The CPR course must have a hands on portion- Online only courses are not accepted) or ability to complete a course which is provided as part of the NA program Testing and Vaccine Requirements: Two PPD screenings (TB skin test) or Quantiferon Gold blood test; Hepatitis B (3 doses or a positive titer), Tdap immunization (within 10 years), 2 Varicella doses or positive titer, 2 MMR doses or positive titers; current season influenza vaccination (flu shot if clinicals are between October 1st and March 31), complete COVID-19 vaccination (Boosters not required) or signed exemption form. Documentation must be provided on Verified Credentials before attending clinicals or the end of the first term (if in high school) to remain in the course. Background Check through Verified Credentials Drug Screen submitted through Verified Credentials and completed at Workmed.",
      "<strong>Attendance:</strong> When students signed up for this class, they committed to a schedule and it is expected to be followed. Southwest Tech requires 90 hours of in class attendance to complete this program. Students will need to come in and make up any hours they have missed. This can be arranged with the instructor. If a student has an issue with their schedule, they must contact an instructor as soon as possible. Students are required to attend 24 hours of clinical experiences at a long term care facility after completing the course material. These will be set up by the instructor and students will need to sign up for them.",
      "<strong>Behavior & Attire:</strong> Students’ attire or behavior must be work or school appropriate. Students may be asked to change their behavior and/or attire if not appropriate. Wearing scrubs is encouraged but not required for the classroom setting.",
      "<strong>Confidentiality:</strong> Students must safeguard the privacy and security of all patients and residents while providing or observing patient care as well as maintain the confidentiality of all protected health information. Actual patient care situations are to be discussed only with the instructor and in an appropriate setting for learning purposes.",
      "<strong>Professionalism:</strong> Students are required to demonstrate professional behavior in all settings. This includes, and is not limited to, classrooms, labs, clinical opportunities, and when utilizing social media. Professionalism includes being on time and in class when scheduled and using appropriate language. Any form of bullying will not be tolerated and may result in dismissal from the program.",
      "<strong>Cell Phone / Electronics Policy:</strong> Cell phones and other electronic devices may be used in class under the direction of the instructor. If use of a device is deemed inappropriate or distracting the device may be confiscated.",
      "<strong>Clinical Experience:</strong> Students will have 24 hours of clinical experiences which will take place after school and on weekends at the end of the course. For these out-of-school experiences, the student is responsible for transportation to and from the clinical setting. Students may not attend clinicals if required skills are not first completed in the classroom setting as scheduled with the instructor. Students are expected to prepare thoroughly for clinical experiences with professional appearance, dress, attitude, mannerisms, skills preparedness, and punctuality. Clinical experiences are mandatory for certification eligibility and make-up times for absences will not be allowed except under extreme circumstances. Two tardies = failing grade for clinical experiences.",
    ]
  }
];
