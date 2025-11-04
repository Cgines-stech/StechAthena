// TEEL 1210

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1210 = [
  {
    id: 60003,
    programId: 1,
    courseNumber: "TEEL 1210",
    courseName: "Electrician Apprentice IIA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IIA course discusses single-phase and three-phase alternating current (AC) power systems, inductance, capacitance, reactance, power factor, and power correction. In this course, students will begin a more comprehensive analysis of National Electrical Code (NEC) requirements and calculations. They will explore the NEC requirements for wiring methods and installations of electrical systems as well as electrical safety in the use of energized equipment.",

    courseObjectives: [
      "Show proficiency in calculating properties of an AC circuit.",
      "Demonstrate proper use of hand tools and electrical equipment in practice live applications",
      "Demonstrate proficiency in applying and calculating the sizing of Branch circuits, feeders, services, and load calculations",
    ],

    courseOutline: [
      { title: "Year IIA", hours: 90},
    ],

    courseBooks: [
      {
        name: "Delmar's Standard Book of Electricity", 
        price: 150.0,
        isbn: "9781337900348",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Electrical Systems Based on the 2023 NEC", 
        price: 135.0,
        isbn: "9780826920638",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Delmar's Standard Book of Electricity", 
        price: 150.0,
        isbn: "9781337900348",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Electrical Systems Based on the 2023 NEC", 
        price: 135.0,
        isbn: "9780826920638",
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
        { name: "Jeremy Leavitt",        email: "jleavitt@stech.edu",       title: "Instructor" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Orientation Acknowledgement",
      "Electrical Safety: OSHA and NFPA 70E CH 3",
      "UNIT 6 Series Circuits",
      "Reading",
      "DEL Unit 6 Series Circuits Due 9-9",
      "UNIT 7 Parallel Circuits",
      "Reading",
      "DEL Unit 7 Parallel Circuits Due 9-9",
      "UNIT 8 Combination Circuits",
      "Reading",
      "DEL Unit 8 Combination Circuits Due 9-9",
      "UNIT 14 Basic Trigonometry and Vectors",
      "Reading",
      "DEL Unit 14 Basic Trigonometry and Vect ors Due 9-16",
      "UNIT 15 Alternating Current",
      "Reading",
      "DEL Unit 15 Alternating Current Due 9-16",
      "UNIT 16 Induct ance in AC Circuits",
      "Reading",
      "DEL Unit 16 Inductance in AC Circuits Due 9-23",
      "UNIT 17 Resistive-Inductive Series Circuits",
      "Reading",
      "DEL Unit 17 Resistive-Inductive Series Circuits Due 9-30",
      "UNIT 18 Resistive-Inductive Parallel Circuits",
      "Reading",
      "DEL Unit 18 Resistive-Inductive Parallel Circu its Due 9-30",
      "UNIT 19 Capacitors",
      "Reading",
      "DEL Unit 19 Capacitors 10-7",
      "UNIT 20 Capacitance in AC Circuits",
      "Reading",
      "DEL Unit 20 Capacitance in AC Carcuit Due 10-7",
      "Midterm Exam",
      "UNIT 21 Resistive-Capacitive Series Circuits",
      "Reading",
      "DEL Unit 21 Resistive-Capacitive Series Circuits Due 11-11",
      "UNIT 22 Resistive-Capacitive Parallel Circuits",
      "Reading",
      "DEL Unit 22 Resistive-Capacitive Parallel Circuits Due 11-11",
      "UNIT 23 Resistive-Inductive-Capacitive Series Circuits",
      "Reading",
      "DEL Unit 23 Resistive-Inductive-Capacitive Series Circuits 11-",
      "18",
      "UNIT 24 Resistive-Inductive-Capacitive Parallel Circu its",
      "Reading",
      "DEL Unit 24 Resistive-Inductive-Capacitive Parallel Circuits",
      "Due 11-18",
      "UNIT 10 Using Wire Tables and Determining Conductor Sizes",
      "Reading",
      "DEL Unit 10 Using Wire Tables and Determining Conductor",
      "Sizes Due 11-25",
      "UNIT 26 Three-Phase Circuits",
      "Reading",
      "DEL Unit 26 Three-Phase Power Due 12-9",
      "eTextbook: Illustrated Guide to t hie National Electrical Code",
      "IGNEC Unit 8 Load Calculations Due 12-9",
      "ES Chapter 2-Branch Circuits and Feeders Due 11-16-23",
      "ES Chapter 3-Dwelling Load Calculations Due 12-1-22",
      "ES Chapter 4-Services Due 12-1-22",
      "ES Chapter 5-Conductors and Overcurrent Protection",
      "Final Practice Exam",
      "ELEC 002A Final Exam",
      "Bell Quiz 1 9-22-22",
      "Bell Quiz 2 10-6-22",
      "Bell Quiz 3 10-13-22",
      "Bell Quiz 4 11-10-22",
      "Bell Quiz 5 11-17-22",
      "End of Course Survey",
      "1_found_base_plan.pdf",
      "2_first_floor plan.pdf",
      "3_south_elev wind_door _sch.pdf",
      "4_ east_ elev int_ elev.pdf",
      "S_north_elev_plot_plan.pdf",
      "6 _ west_ elev_ elec_sch.pdf",
      "7 _cross_section_a-a.pdf",
      "8_basement_elec_plan.pdf",
      "9 _first_floor elec_plan.pdf",
      "basement_electrical.pdf",
      "first_floor _electrical.pdf",
    ]
  }
]

export default TEEL1210;