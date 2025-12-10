// TEWT 1000

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1000 = [
  {
    id: 95001,
    programId: 1,
    courseNumber: "TEWT 1000",
    courseName: "Introduction to Welding and Cutting",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 65.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course will serve students as an introduction to the welding industry. General welding shop safety,  thermal cutting processes, basic welding terminology, and arc welding basics will be discussed.",

    courseObjectives: [
      "Demonstrate safety as it relates to welding and manufacturing.",
      "Perform cuts using thermal cutting processes.",
      "Identify and define basic welding terminology.",
      "Demonstrate safe set-up of arc welding equipment.",
      "Perform basic welds on carbon steel.",
      "Demonstrate clear communication in the workplace.",
      "Demonstrate effective workplace habits and attitudes",
    ],

    courseOutline: [
      { title: "Electrical and Shop Safety", hours: 10},
      { title: "Oxyfuel Safety", hours: 10},
      { title: "Oxyfuel Cutting", hours: 10},
      { title: "Shielded Metal Arc Welding Safety", hours: 10},
      { title: "SMAW Pad of Beads", hours: 10},
      { title: "SMAW Fillets", hours: 10},
    ],

    courseBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      },
      {
        name: "Symbols for Welding EW-342", 
        price: 30.0,
        isbn: "n/a",
        note: "Can be purchased from Hobart"
      },
      {
        name: "Blueprint Reading for Welders and Fitters EW-459", 
        price: 32.0,
        isbn: "n/a",
        note: "Can be purchased from Hobart"
      },
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      },
      {
        name: "Symbols for Welding EW-342", 
        price: 30.0,
        isbn: "n/a",
        note: "Can be purchased from Hobart"
      },
      {
        name: "Blueprint Reading for Welders and Fitters EW-459", 
        price: 32.0,
        isbn: "n/a",
        note: "Can be purchased from Hobart"
      },
    ],
    
    courseTools: [
      { name: "Earbuds", price: 13.20, note: "" },
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
      { name: "Robert Blake",          email: "rblake@stech.edu",     title: "" },
      { name: "Christopher Durand",    email: "cdurand@stech.edu",    title: "" },
      { name: "Ethan Hollinger",       email: "ehollinger@stech.edu",    title: "" },
      { name: "McKael Stapel",       email: "mstapel@stech.edu",    title: "" },
      { name: "Jordan Noel",           email: "jnoel@stech.edu",    title: "" },
      { name: "Jacob Hartner",    email: "jhartner@stech.edu",    title: "" },
      { name: "Carl Johnson",    email: "cdurand@stech.edu",    title: "Director" },
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Orientation Acknowledgement",
      "Post- Secondary Welding Safety Disclosure Rev 2025.pdf",
      "Welding Safety Course Introduction and Guidelines",
      "READ Chapter 02: Safety in Welding",
      "Chapter 02: Review Questions",
      "LEARN IT: Chapter 02: Overview",
      "Chapter 02 Practice Test",
      "Chapter 02: Flashcards",
      "Fire & Electrical Safety",
      "LE: Electric Shock (Video-Combined)",
      "LE: Grounding (Video)",
      "LE: GFCI (Video)",
      "Electrical Safety",
      "LE: SDS (Video)",
      "Hazard Communication and Safety Data Sheets (SDS)",
      "Hand Tools",
      "LE: Personal Protective Equipment (Video-Combined)",
      "Shop PPE",
      "Persornal Protective Equipment",
      "Persornal Protective Equipment (PPE)",
      "Helmet R,eview",
      "Noise in the Workplace",
      "Radiation",
      "Slip, Trip, and Fall Hazards",
      "Burns and Ventilation",
      "Bloodborne Pathogens (BBPs)",
      "First Aid in a Welding Environment",
      "Eyewash Stations",
      "Poisons and Poisonous Gases",
      "Fumes and Welding Gases",
      "Ventilation",
      "LE: Warning Labels (Video)",
      "LE: Fire & Explosions (Video-Combined)",
      "Fire Safety and Fire Prevention",
      "Back Injuries and Ergonomics",
      "Cylinders",
      "Stainless Steel and Aluminum",
      "Lockout-Tagout (LOTO)",
      "LE: Engine Driven Equipment (Video)",
      "LE: Engine Exhaust (Video)",
      "Tool and Equipment Safety",
      "LE: Work Areas (Video)",
      "LE: Confined Spaces (Video)",
      "FactSheet - 11 Hot Work in Confined Spaces .pdf",
      "The Color of Safety (Texas A&M).pdf",
      "OSHA Sign Classification Table.pdf",
      "Environ mental Safety and Pollution Prevention",
      "NAPA Lockout/Tagout: When Everyone Knows (Video)",
      "FactSheet - 18- Lock Out TagOut .pdf",
      "FactSheet - 14 Graphic Symbols for !Precautionary Lables",
      ".pdf",
      "Hazard Communication and Safety Data Sheets (SOS)",
      "Final Exam",
      "Checkpoint Meeting Module 1",
      "Welcome to Oxy- Fuel: Safety First",
      "READ Chapter 07: Flame Cutting",
      "Chapter 07: Review Questions",
      "Chapter 07 Practice Test",
      "LEARN IT: Chapter 07: Overview",
      "Chapter 07: Flashcards",
      "Checkpoint Meeting Module 2",
      "Cutting St raight Lines",
      "Lab Time",
      "Cutting Beveled Lines",
      "Lab time",
      "Cutting Shapes",
      "Lab time",
      "Checkpoint Meeting Module 3",
      "READ Chapter 04: Shielded Metal Arc Welding of Plate",
      "Chapter 04: Review Questions",
      "LEARN IT: Chapter 04: Overview",
      "Chapter 04 Practice Test",
      "Chapter 04: Flashcards",
      "READ Welding in t he Real World",
      "Shielded Metal Arc Welding-Striking an Arc",
      "Shielded Metal Arc Welding-Welding Effect",
      "Shielded Metal Arc Welding-Electrode Angles",
      "Shielded Metal Arc Welding-Settiing Current",
      "Shielded Metal Arc Welding-Welder and Plate Positioning",
      "Shielded Metal Arc Welding-Lap Joint 2F Position",
      "Shielded Metal Arc Welding-Tee Joint 2F Position",
      "SMAW Final Exam",
      "Checkpoint Meeting Module 4",
      "The Five Essentials",
      "Cont rolling the Arc",
      "Shop PPE- SMAW",
      "Lab Time",
      "Surfacing Beads Flat Position",
      "Checkpoint Meeting Module 5",
      "Lap Joint 2F",
      "Lab Time",
      "Tee joints 2F",
      "Lab Time",
      "Work Ethic Assessment",
      "Checkpoint Meeting Module 6",
      "End of Course Survey",
    ]
  }
]

export default TEWT1000;