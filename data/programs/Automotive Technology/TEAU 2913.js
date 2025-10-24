// TEAU 2913

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAU2913 = [
  {
    id: 30016,
    programId: 3,
    courseNumber: "TEAU 2913",
    courseName: "Manufacturer Automotive Service Training - Audi",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LEL",
    isElective: true,
    includeInProgramTotals: false,

    courseDescription:
      "After completing the Audi AEP program training, student technicians will be Expert Level Audi-Certified Technicians",

    courseObjectives: [
      "Demonstrate competency in all eight ASE areas of emphasis will be covered: engine repair, electrical systems, heating and air conditioning, brake systems, steering and suspension, manual drive trains, automatic transmission, and engine performance.",
    ],

    courseOutline: [
      "Audi",
    ],

    courseBooks: [
      {}
    ],

    syllabiBooks: [
      {}
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {}
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
        {
          startDate: "",
          endDate: "",
          Monday: ["8:00 AM - 12:00 AM", "1:00 PM - 5:00 PM"],
          Tuesday: ["8:00 AM - 12:00 AM", "1:00 PM - 5:00 PM"],
          Wednesday: ["8:00 AM - 12:00 AM", "1:00 PM - 5:00 PM"],
          Thursday: ["8:00 AM - 12:00 AM", "1:00 PM - 5:00 PM"],
          Friday: ["8:00 AM - 12:00 AM"],
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        "Cody Dawson — cdawson@stech.edu",
        "Shad Esplin — sesplin@stech.edu",
        "Dallin Robinson — drobinson@stech.edu",
        "McKael Stapel — mstapel@stech.edu",
    ],

    course_Policies: [
        {
            title: "Course Grading",
            content: [
            "Course Grading: Students must achieve 80% (B-) or higher to pass graded work. Incomplete assignments must be redone to meet the required standards. Guidelines, rules, and expectations for completing assignments are provided in each course.",
            "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year."
            ]
            
        },
        gradeScale,
        {
            content2: [
            "Course Policies: Class attendance is required during your scheduled time. Cell phones for many have become a distraction. When you are in class or lab we encourage you to keep your cell phones put away in a secure location. If you use ear buds we ask that you only use one so you can still hear the things going on around you. If you are using your phone for things other than school related items, instructors will ask you to put them away. Please follow the direction of your instructors. Those who have been asked to refrain from using your cell phone and fail to do so will be asked to meet with the Director of Transportation and student services will be notified. The program is designed to provide the student with as much hands-on work as possible. In the automotive industry you may be required to lift heavy objects and stand for hours at a time to complete work required. Technicians deal with chemicals and materials which require caution, these will be identified in the Right to Know Agreement provided to you. You will also be required to use computers to track and complete work."
            ]
        },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Orientation Acknowledgement",
      "Mopar CAP Local",
      "Required Student Information",
      "Logging Into Dealerconnect and Enrolling In Courses",
      "Level 1 Local CAP Curriculum",
      "Quick Reference Guide",
      "Assignment Submission",
      "Mopar CAP Overview",
      "The Role of a Service Technician",
      "Connecting with the Customer",
      "Service Library",
      "Introduction to wiTECH",
      "wiTECH Navigation",
      "Flight Recordings",
      "Flight Recordings Templates",
      "wiTECH Fundamentals Post Test",
      "Flashing an ECU with wiTECH 2.0",
      "New Vehicle Preparation",
      "High Voltage Vehicle Safety and Awareness",
      "Technical Training Handbook",
      "Maxi mus Battery Tester And Charg·r by E-Xteq",
      "Hands Free Active Driving Assist (Highlights)",
      "Dodge Hornet (Highlights)",
      "Dodge Hornet PHEV (Highlights)",
      "STAR Center Overview",
      "Oil Change and Routine Inspections",
      "Improving the Oil Change Experience",
      "Light Vehicle Maintenance",
      "New Tech Training Orientation",
      "Technician Documentation Requirements",
      "Tech Tube-Prep For Electrical Skills Assessment",
      "Introduction to Electrical - Phase 1",
      "Introduction to Electrical - Phase 2",
      "Fundamental Electrical Skills Self Study",
      "Practice Test -Fundamental Electrical Skills Verification",
      "Fundamental Electrical Skills Review PT06112",
      "eTorque System 0611708",
      "Stellantis Starting and Charging Systems 0611308",
      "Stellantis Vehicle Communication Systems 0611508",
      "Stellantis Media Systems 0611408",
      "Stellantis Electrical Accessories 0611608",
      "Electrical Connector and Wiring Service and Repair 0610508",
      "Electrical Connector and Terminal Service 0610608",
      "Body and Electrical Gateway Assessment AT06244",
      "Introduction to Corporate Engine Technologies",
      "Automatic Transmission Light Maintenance",
      "Int roduction To Automatic Transmission",
      "Driveline Fundamentals & Maintenance",
      "Chassis Technology Overview",
      "Body Mechanical Diagnosis & Adjustments",
      "Starting & Charging Systems",
      "2023 Uconnect Update 1",
      "Introduction to A/C",
      "A/C Systems",
      "Heating & Cooling Systems",
      "Diesel Engine Fundamentals",
      "Diesel Light Maintenance",
      "End of Course Survey",
    ]
  }
]

export default TEAU2913;