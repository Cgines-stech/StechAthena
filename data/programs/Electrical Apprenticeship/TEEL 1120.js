// TEEL 1120

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1120 = [
  {
    id: 60002,
    programId: 1,
    courseNumber: "TEEL 1120",
    courseName: "Electrician Apprentice IB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IB course continues the study of electrical theory and its application within the electrical field. In this course, students will learn how devices and electrical systems work. Students will also explore lock out tag out, learn what makes a qualified person, and become more familiar with the National Electrical Code (NEC).",

    courseObjectives: [
      "Apply the fundamentals of electrical theory.",
      "Apply the fundamentals of electrical circuitry.",
      "Explain the definition of a qualified person.",
      "Explain responsibilities and risks of qualified persons.",
      "Demonstrate principles and procedures of lock out tag out.",
      "Demonstrate the application of the National Electrical Code (NEC) Articles 300-450.",
      "Demonstrate how to navigate the National Electrical Code (NEC) Articles 300-450.",
    ],

    courseOutline: [
      { title: "Year IB", hours: 90},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {},
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
          startDate: "01-05-2026",
          endDate: "04-30-2026",
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
      "UNIT 6 Series Circuits",
      "Reading",
      "DEL Unit 6 Series Circuits Due 1-22-24",
      "UNIT 7 Parallel Circuits",
      "Reading",
      "DEL 7 Parallel Circuits Due 1-22-.24",
      "UNIT 8 Combination Circuits",
      "Reading",
      "DEL Unit 8 Combination Circuits Due 1-29-24",
      "Unit 3. Boxes and Enclosures",
      "IGNEC Unit 3 Boxes and Enclosures 2-5-24",
      "Unit 4. Cables",
      "IGNEC Unit 4 Cables 2-5-24",
      "Unit 5. Raceways and Conductors",
      "IGNEC Unit 5 Raceways and Conductors 2-12-24",
      "Switch Lab",
      "Chapter 13. Lighting Branch Circuit for the Living Room",
      "EWR Chapter 13 Lighting Branch Circuit for the Living Room",
      "Due 2-12-24",
      "Chapter 14. Lighting Branch Circuit ifor the Study/Bedroom",
      "EWR Chapter 14 Lighting Branch Circuit for Study/Bedroom",
      "Due 2-12-24",
      "Chapter 15. Dryer Outlet, Lighting, and Receptacle Circuits",
      "for the Laundry, Powder Room, Rear Entry Hall, and Attic",
      "EWR Chapter 15 Dryer Outlet, Lighting and Receptacle",
      "Circuits for the Laundry Room,",
      "Powder Room, Rear Entry Hall, and Attic Due 2-26-24",
      "Chapter 16. Branch Circuits for the Garage and Outdoors",
      "EWR Chapter 16 Branch Circuit for the Garage and Outdoors",
      "Due 2-26-24",
      "Chapter 17. Recreation Room",
      "EWR Chapter 17 Recreation Room Due 2-26-24",
      "Midterm Practice Exam",
      "Midterm Exam",
      "Chapter 18. Lighting Branch Circuit, Receptacle Circuits for",
      "Workshop",
      "EWR Chapter 18 Lighting Branch Circuit, Receptacle Circuits",
      "for Workshop Due 3-18-24",
      "Chapter 19. Special-Purpose Outlets-Water Pump, Water",
      "Heater",
      "EWR Chapter 19 Special-Purpose Outlets-Water Pump, Water",
      "Heater Due 3-18-24",
      "Chapter 20. Special-Purpose Outlets for Ranges, CounterMounted Cooking Unit, and Wall-Mounted Oven",
      "EWR Chapter 20 Special-Purpose Outlets for Ranges,",
      "Counter-Mounted Cooking Unit, and Wall-Mounted Oven Due",
      "45369",
      "Chapter 21. Special-Purpose Outlets-Food Waste Disposer,",
      "Dishwasher",
      "EWR Chapter 21 Special-Purpose Outlets-Food Waste",
      "Disposer, Dishwasher Due 3-25-24",
      "Electrical Safety Chapter 2 - Electrical Safety OSHA and",
      "NFPA 70E.pdf",
      "Electrical Safety: OSHA and NFPA 70E Ch 2 Due 3-25-24",
      "Lock-Out, Tag-Out Quiz",
      "Lock-Out, Tag-Out Lab",
      "Chapter 22. Special-Purpose Outlets for the Bathroom Ceiling",
      "Heat/Vent/Lights, the Attic",
      "Fan, and 1the Hydromassage Tub",
      "EWR Chapter 22 Special-Purpose Outlets for Bathroom",
      "Ceiling Heat/Vent/Lights, the",
      "Attic Fan, and the Hydromassage Tub Due 4-8-24",
      "Chapter 23. Special-Purpose Outlets-Electric Heating, Air",
      "Conditioning",
      "EWR Chapter 23 Special-Purpose Outlets-Electric Heating, Air",
      "Conditioning Due 4-15-24",
      "Chapter 28. Installing Feeders and S,ervice-Entrance",
      "Equipment - Grounding and Bonding",
      "EWR Chapter 28 Installing Feeders and Service-Entrance",
      "Equipment Due 4-22-24",
      "Final Practice Exam",
      "ELEC O01B Final Exam",
      "Final Exam 2",
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

export default TEEL1120;