// TEPT 1900

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPT1900 = [
  {
    id: 17007,
    programId: 1,
    courseNumber: "TEPT 1900",
    courseName: "Pharmacy Technician Externship",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 210,
    courseTuition: 380.00,
    courseFee: 0.00,
    instructionalType: "WBL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students will demonstrate their abilities to function as a pharmacy technician in industry settings. This experience takes place under the supervision of a  pharmacist or an experienced pharmacy technician and includes a combination of skills-practice and evaluation.",

    courseObjectives: [
      "Assist pharmacists in collecting, organizing, and recording patient information.",
      "Maintain pharmacy facilities and equipment.",
      "Receive, process, and prepare prescriptions/medication orders.",
      "Demonstrate a respectful and professional attitude when interacting with diverse patient populations and medical professionals.",
      "Participate in pharmacy compliance with professional standards and relevant legal, regulatory, formulary, contractual, and safety requirements.",
    ],

    courseOutline: [
      { title: "Career Success", hours: 10},
      { title: "Externship #1", hours: 100},
      { title: "Externship #2", hours: 100},
    ],

    courseBooks: [
      {
        name: "Platinum Planner", 
        price: 63.0,
        isbn: "N/A",
        note: "Provided in class. Do not purchase separately."
      }
    ],

    syllabiBooks: [
      {
        name: "Platinum Planner", 
        price: 63.0,
        isbn: "N/A",
        note: "Provided in class. Do not purchase separately."
      },
      {
        name: "The Pharmacy Technician: A Comprehensive Approach, 5th ed.", 
        price: 150.0,
        isbn: "9798214113739",
        note: "Cengage Unlimited Subscription"
      },
      {
        name: "eBook: Fundamental Pharmacology for Pharmacy Technicians, 2nd ed.", 
        price: 150.0,
        isbn: "9781305979079",
        note: "Cengage Unlimited Subscription"
      }
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {}
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Pharmacy Technician Program Handbook 2025",
      "Pharmacy Technician  Work-Based Learning Instructual Plan",
      "STECH TIME SHEET",
      "Weekly Check In LINK",
      "Mental Health Resources",
      "How to Pronounce the Drugs - YouTube",
      "PTCE Outline 2025",
      "PTCE Outline 2026",
      "The Drug Supply Chain Act (DSCSA)",
      "PTCB Practice Tools",
      "Study Brochure",
      "PTCB Math Cheat Sheet",
      "Math Tips",
      "PTCB Top Drug List",
      "PTCB Drug Cheat Sheet",
      "Our Top 200 Drugs",
      "Sterile Compounding Cheat Sheet",
      "Top 20 Rejection Codes",
      "PTCE Practice Exam 1",
      "PTCE Practice Exam 2",
      "PTCE Practice Exam 3",
      "Medications Review",
      "Federal Requirements Review",
      "Order Entry and Processing Review",
      "Patient Safety and Quality Assurance Review",
      "Pharmacy Calculations Review",
      "Inventory Management Review",
      "Sterile & Hazardous Compounding Review",
      "Nonsterile Compounding Review",
      "Career Paths",
      "STAR Interview Help",
      "Interview Tips",
      "Resume Help",
      "Crafted a Winning Resume",
      "Appendix B: Top Drugs by Prescriptions Dispensed",
      "Appendix C: Common Look-alike and Sound-alike Drugs",
      "Appendix D: Classifications of Drug Schedules in the United States and Canada",
      "Appendix E: Drug Dosage Calculations",
      "Appendix F: Immunizations",
      "Appendix G: Specific Antidotes",
      "Appendix H: Reporting of Medical Errors",
      "Appendix I: Drug/Food Interactions",
      "Appendix J: Drugs That Should Not Be Crushed",
      "Appendix K: Drug Identification ",
      "Externship Folder Review",
      "Pre-Externship Evaluation",
      "TRAINING: HIPAA",
      "LOOK UP: Education Programs",
      "TRAINING: Bloodborne Pathgens",
      "LOOK UP: UT DOPL Licenses",
      "TRAINING: Combating Medicare Parts C & D (Fraud, Waste, and Abuse)",
      "JOIN: Graduates - Jobs Remind",
      "Set up your Externship Schedule - Site 1",
      "SIGN ME: Completed Module 1 - TEPT 1900",
      "Site 1 - Week #1 Time Sheet",
      "Weekly Check In Site 1 Week 1",
      "Sig Code Review ",
      "Site 1 - Week #2 Time Sheet",
      "Weekly Check In Site 1 Week 2",
      "Site 1 - Week #2 Time Sheet",
      "Weekly Check In Site 1 Week 3",
      "Inhaler & Diabetes Prescriptions",
      "Site 1 - Week #4 Time Sheet",
      "Weekly Check In Site 1 Week 4",
      "Site 1 - Week #5 Time Sheet",
      "Weekly Check In Site 1 Week 5",
      "Site 1 - Week #6 Time Sheet",
      "Weekly Check In Site 1 Week 6",
      "Site 1 - Week #7 Time Sheet",
      "Weekly Check In Site 1 Week 7",
      "Site 1 - Week #8 Time Sheet",
      "Weekly Check In Site 1 Week 8",
      "Site 1 - Week #9 Time Sheet",
      "Weekly Check In Site 1 Week 9",
      "PTCE Practice Exam 1",
      "Site 1 - Week #10 Time Sheet",
      "Weekly Check In Site 1 Week 10",
      "Site 1 - Pharmacy Preceptor Evaluation of the Student",
      "Site 1 - Student Evaluation of the Externship Site",
      "SIGN ME: Completed Module 2 - TEPT 1900",
      "Set up your Externship Schedule - Site 2",
      "Site 2 - Week #1 Time Sheet",
      "Weekly Check In Site 2 Week 1",
      "Federal Requirements Review",
      "Site 2 - Week #2 Time Sheet",
      "Weekly Check In Site 2 Week 2",
      "Site 2 - Week #3 Time Sheet",
      "Weekly Check In Site 2 Week 3",
      "Inventory Management Review",
      "Site 2 - Week #4 Time Sheet",
      "Weekly Check In Site 2 Week 4",
      "Site 2 - Week #5 Time Sheet",
      "Weekly Check In Site 2 Week 5",
      "Site 2 - Week #6 Time Sheet",
      "Weekly Check In Site 2 Week 6",
      "Patient Safety and Quality Assurance Review",
      "Site 2 - Week #7 Time Sheet",
      "Weekly Check In Site 2 Week 7",
      "Site 2 - Week #8 Time Sheet",
      "Weekly Check In Site 2 Week 8",
      "Site 2 - Week #9 Time Sheet",
      "Weekly Check In Site 2 Week 9",
      "PTCE Practice Exam 2",
      "Site 2 - Week #10 Time Sheet",
      "Weekly Check In Site 2 Week 10",
      "Site 2 - Student Evaluation of the Externship Site",
      "Site 2 - Pharmacy Preceptor Evaluation of the Student",
      "Meeting: Post Externship Evaluation",
      "SIGN ME: Completed Module 3 - Tept 1900",
      "End of Course Survey",
    ]
  }
]

export default TEPT1900;