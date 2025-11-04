// TEEL 1110

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1110 = [
  {
    id: 60001,
    programId: 1,
    courseNumber: "TEEL 1110",
    courseName: "Electrician Apprentice IA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IA course establishes a solid foundation in electrical fundamentals and the study of basic electrical theory. This course addresses math applications as they relate to the electrical field. In this course, students will use the National Electrical Code (NEC) to apply code requirements to electrical systems. Students will learn and practice in the basics of conduit bending. Students will be introduced to electrical and jobsite hazards and workplace safety.",

    courseObjectives: [
      "Demonstrate a proficiency in general math skills with an emphasis on how they relate to the electrical field.",
      "Identify electrical and jobsite hazards.",
      "Explain workplace safety.",
      "Apply mathematical principles to conduit bending.",
      "Demonstrate a practical application of conduit bending.",
      "Explain the fundamentals of electrical theory.",
      "Explain the fundamentals of electrical circuitry.",
      "Demonstrate the application of the National Electrical Code (NEC) Articles 090-240.",
      "Demonstrate how to navigate the National Electrical Code (NEC) Articles 090-240.",
    ],

    courseOutline: [
      { title: "Year IA", hours: 90},
    ],

    courseBooks: [
      {
        name: "Illustrated Guide to the National Electrical Code 2020", 
        price: 150.0,
        isbn: "9780357766712",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Electrical Wiring Residental 21st Edition", 
        price: 0.0,
        isbn: "9798214122823",
        note: "Included with Cengage Unlimited"
      },
      {
        name: "NFPA 70: NEC National Electrical Code 2023", 
        price: 90.0,
        isbn: "9781455929320",
        note: ""
      },
      {
        name: "Ugly's Electrical References, 2023 Edition", 
        price: 20.0,
        isbn: "9781284275914",
        note: ""
      },
      {
        name: "Electrical Safety: A Practical Guide to OSHA and NFPA 70E", 
        price: 128.0,
        isbn: "9780826935977",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Illustrated Guide to the National Electrical Code 2020", 
        price: 150.0,
        isbn: "9780357766712",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Electrical Wiring Residental 21st Edition", 
        price: 0.0,
        isbn: "9798214122823",
        note: "Included with Cengage Unlimited"
      },
      {
        name: "NFPA 70: NEC National Electrical Code 2023", 
        price: 90.0,
        isbn: "9781455929320",
        note: ""
      },
      {
        name: "Ugly's Electrical References, 2023 Edition", 
        price: 20.0,
        isbn: "9781284275914",
        note: ""
      },
      {
        name: "Electrical Safety: A Practical Guide to OSHA and NFPA 70E", 
        price: 128.0,
        isbn: "9780826935977",
        note: ""
      },
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
        {
          startDate: "08-18-2025",
          endDate: "12-08-2025",
          Monday: "6:00 PM - 9:00 PM",
          Tuesday: "",
          Wednesday: "",
          Thursday: "6:00 PM - 9:00 PM",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        { name: "Cody Post",        email: "cpost@stech.edu",       title: "Instructor" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Orientation Acknowledgement",
      "Electrical Safety Chapter 1 - Electrical Safety OSHA and",
      "NFPA 70E.pdf",
      "Electrical Safety: OSHA and NFPA 70E",
      "UNIT 1 Atomic Struct ure",
      "Reading",
      "DEL Unit 1 Atomic Structure",
      "UNIT 2 Electrical Quantities and Ohm's Law",
      "Reading",
      "DEL Unit 2 Electrical Quantities and Ohm's Law",
      "UN IT 3 Static Electricity",
      "Reading",
      "DEL Unit 3 Static Electricity",
      "UNIT 4 Magnetism",
      "Reading",
      "DEL Unit 4 Magnetism",
      "UNIT 5 Resistors",
      "Reading",
      "DEL Unit 5 Resistors",
      "eTextbook: Illustrated Guide to t he National Electrical Code",
      "IGNEC Unit 1 Introduction to t he National Elect rical Code",
      "IGNEC Unit 2 Definitions",
      "30 Degree Offset",
      "90 Degree Bend with Box Offset",
      "eTextbook: Electrical Wiring Residential",
      "EWR Chapter 1 General Information for Electrical",
      "Installations",
      "Midterm Practice Exam",
      "Midterm Exam",
      "EWR Chapter 2 Specifications, Elect rical Symbols, and",
      "Outlets",
      "EWR Chapter 3 Determining the Required Number of Branch",
      "Circuits, Lighting Outlets, and Receptacle Outlets",
      "eTextbook: Illustrated Guide to the National Electrical Code",
      "IGNEC Unit 6 General Provisions",
      "IGNEC Unit 7 Specific Provisions",
      "IGNEC Unit 8 Load Calculations",
      "IGNEC Unit 9 Services and Electrical Equipment",
      "Final Practice Exam",
      "Final Exam",
      "End of Course Survey",
      "1_found_base_plan.pdf",
      "2_first_floor plan.pdf",
      "3_south_elev wind_door sch.pdf",
      "4_ east_ elev _int_ elev.pdf",
      "S_north_elev_plot_plan.pdf",
      "6 _ west_ elev_ elec_sch.pdf",
      "7 _cross_section_a-a.pdf",
      "B_basement_elec_plan.pdf",
      "9 _first_floor elec_plan.pdf",
      "basement_electrical.pdf",
      "first_floor _electrical.pdf",
    ]
  }
]

export default TEEL1110;