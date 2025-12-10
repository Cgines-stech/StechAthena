// TEFF 1100

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEFF1100 = [
  {
    id: 13001,
    programId: 1,
    courseNumber: "TEFF 1100",
    courseName: "Introduction to Fire",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 225.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Introduction to Fire course is an introduction to the complex, challenging, and unforgiving environments firefighters find themselves in every day. Safety is a primary concern throughout their entire career. The 16 Firefighter Life Safety Initiatives, which were created to ensure firefighters return home safely after every shift, will be covered. Students will exercise together and must pass a physical fitness test at the conclusion of this course.",

    courseObjectives: [
      "Public and Private Career Opportunities, Chemical Reactions, and Physics of Fire",
      "Training and Safety Codes & Ordinances, Fire Prevention, and Fire Protection System",
      "Interviews, Incident Management & Operations, Final Test",
    ],

    courseOutline: [
      { title: "Public and Private Career Opportunities, Chemical Reactions, and Physics of Fire", hours: 10},
      { title: "Training and Safety Codes & Ordinances, Fire Prevention, and Fire Protection System", hours: 10},
      { title: "Interviews, Incident Management & Operations, Final Test", hours: 10},
    ],

    courseBooks: [
      {
        name: "Introduction to Fire Protection and Emergency Services, 6th Edition", 
        price: 113.0,
        isbn: "9781284180152",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Introduction to Fire Protection and Emergency Services, 6th Edition", 
        price: 113.0,
        isbn: "9781284180152",
        note: ""
      },
    ],
    
    courseTools: [
      { name: "Station boots", price: 45.0, note: " Purchased on your own" },
    ],

    courseCertifications: [
      {
        name: "SCBA Fit Test", 
        price: 30.0, 
        note: "" 
      }
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
        {
          termLabel: "",
          startDate: "07-08-2025",
          endDate: "07-29-2025",
          Monday: "",
          Tuesday: "5:00 PM - 9:00 PM",
          Wednesday: "5:00 PM - 9:00 PM",
          Thursday: "5:00 PM - 9:00 PM",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        {}
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Orientation Acknowledgement",
      "Copy of Fire Science Master Schedule (1).xlsx",
      "Chapter 1 Fire Science Education and the Fire Fighter",
      "Selection Process.pptx",
      "Chapter 1 Test 6th edition",
      "Chapter 2 Fire Protection Career Opportunities .pptx",
      "Chapter 2 Test 6th edition",
      "Chapter 3 Public Fire Protection .pptx",
      "Chapter 3 Test 6th edition",
      "Chapter 4 Chemistry and Physics of Fire.pptx",
      "Chapter 4 Test 6th edition",
      "Chapter 5 Public and Private Support Organizations.pptx",
      "Chapter 5 Test 6th edition",
      "Chapter 6 Fire Department Resources.pptx",
      "Chapter 6 Test 6th edition",
      "Chapter 7 Fire Department Administration .pptx",
      "Chapter 7 Test 6th edition",
      "ICS 100",
      "Chapter 8 Support Functions.pptx",
      "Chapter 8 Test 6th edition",
      "Chapter 9 Training.pptx",
      "Chapter 9 Test 6th edition",
      "Chapter 10 Fire Prevention.pptx",
      "Chapter 10 Test 6th edition",
      "Chapter 11 Codes and Ordinances.pptx",
      "Chapter 11 Test 6th edition",
      "Chapter 12 Fire Protection Systems and Equipment.pptx",
      "Chapter 12 Test 6th edition",
      "ICS 200",
      "ICS 700",
      "Chapter 13 Emergency Incident Management .pptx",
      "Chapter 13 Test 6th edition",
      "Chapter 14 Emergency Operations .pptx",
      "Chapter 14 Test 6th edition",
      "End Of Course Survey",
      "Final Test",
    ]
  }
]

export default TEFF1100;