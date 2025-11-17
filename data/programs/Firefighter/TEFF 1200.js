// TEFF 1200

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEFF1200 = [
  {
    id: 13002,
    programId: 1,
    courseNumber: "TEFF 1200",
    courseName: "Firefighter",
    courseCredits: 11,
    statewideAlignment: "Aligned",
    courseClockHours: 330,
    courseTuition: 1045.00,
    courseFee: 325.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The firefighter course begins your career as a professional firefighter! A sample of the hands-on skills include the following: placing ground ladders, pulling hose, cutting ventilation holes, searching for victims, handling car fires, vehicle extrication, and live fire evolutions. These nationally-accredited certifications are recognized outside of Utah with many of our graduates working in other states.",

    courseObjectives: [
      "Identify a fire emergency.",
      "Demonstrate proper deployment of hoses and connection to water supply.",
      "Demonstrate effective fire suppression techniques.",
      "Determine offensive or defensive fire attack.",
      "Conduct, salvage, and overhaul.",
      "Demonstrate how to use the NFIRS (National Fire Incident Reporting System).",
    ],

    courseOutline: [
      { title: "Firefighter Health and Safety", hours: 16},
      { title: "Personal Protective Equipment and Self-Contained Breathing Apparatus", hours: 16},
      { title: "Firefighter Safety", hours: 16},
      { title: "Building Construction and Water Supply and Delivery Method", hours: 18},
      { title: "Ground Ladders, Water Delivery, and Fire Attack", hours: 16},
      { title: "Ropes and Knots, Forced Entry, and Search and Rescue", hours: 16},
      { title: "Origin and Cause, Water Delivery, and Salvage & Overhaul", hours: 16},
      { title: "Pump Theory Operations and Evolutions", hours: 16},
      { title: "Live Fire Evolutions", hours: 18},
      { title: "Firefighter 1 Certification Testing", hours: 18},
      { title: "Building Inspections and Combustible Gasses", hours: 18},
      { title: "Investigation, Extrication, and Command", hours: 16},
      { title: "Rapid Intervention Team and Rescue Operations", hours: 18},
      { title: "Firefighter 2 Certification Testing", hours: 18},
      { title: "Haz-Mat Introduction and Awareness", hours: 16},
      { title: "Haz-Mat Operations and Terrorist Attacks", hours: 16},
      { title: "Haz-Mat Monitoring, Personal Protective Equipment, and Decontamination", hours: 16},
      { title: "Haz-Mat Rescue & Recovery and Product Control", hours: 18},
      { title: "State Certification Testing Haz-Mat Awareness and Operations", hours: 18},
      { title: "Graduation", hours: 16},
    ],

    courseBooks: [
      {
        name: "Essentials of Fire Fighting Textbook, 7th Edition & Student Workbook", 
        price: 76.0,
        isbn: "9780879396626",
        note: ""
      },
      {
        name: "Essentials of Fire Fighting, 7th Edition Exam Prep Print", 
        price: 39.0,
        isbn: "9780879396589",
        note: ""
      },
      {
        name: "Hazardous Materials for First Responders, 5th Edition", 
        price: 111.0,
        isbn: "9780879396138",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Essentials of Fire Fighting Textbook, 7th Edition & Student Workbook", 
        price: 76.0,
        isbn: "9780879396626",
        note: ""
      },
      {
        name: "Essentials of Fire Fighting, 7th Edition Exam Prep Print", 
        price: 39.0,
        isbn: "9780879396589",
        note: ""
      },
      {
        name: "Hazardous Materials for First Responders, 5th Edition", 
        price: 111.0,
        isbn: "9780879396138",
        note: ""
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {
        name: "UFRA Testing", 
        price: 360.0, 
        note: "" 
      }
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
        {
          startDate: "07-29-2025",
          endDate: "12-17-2025",
          startDate: "01-29-2025",
          endDate: "01-17-2025",
          Monday: "5:00 PM - 9:00 PM",
          Tuesday: "5:00 PM - 9:00 PM",
          Wednesday: "5:00 PM - 9:00 PM",
          Thursday: "5:00 PM - 9:00 PM",
          Friday: "",
          Saturday: "9:00 AM - 5:00 PM",
        }
    ],

    instructorContactInformation: [
        {}
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "HazMat - Chapter 6 Test",
      "Chapter 07 Incident Management and Respnse Objectives",
      "and Action Options ppt",
      "HazMat - Chapter 7 Test",
      "Chapter 08 Terrorist Attacks, Criminal Activities, and Disasters ppt",
      "HazMat • Chapter 8 Test",
      "Chapter 09 Personal Protective Equipment ppt",
      "HazMat - Chapter 9 Test",
      "Chapter 10 Decontamination ppt",
      "HazMat - Chapter 10 Test",
      "Chapter 11 Mission Specific Detection, Monitoring, and Sampling ppt",
      "HazMat - Chapter 11 Test",
      "Chapter 12 Mission-Specific Victim !Rescue and Recovery",
      "HazMat - Chapter 12 Test",
      "Chapter 13 Mission-Specific Product Control ppt",
      "HazMat - Chapter 13 Test",
      "Chapter 14 Mission-Specific Evidence Preservation and",
      "Public Safety Sampling ppt",
      "HazMat - Chapter 14 Test",
      "Chapter 15 Mission-specific Illicit Laboratories ppt",
      "HazMat - Chapter 15 Test",
      "State Haz-Mat Tests Ops, Awareness, Written/Practical",
      "HazMat Awareness and Ops Skill Sheet",
      "End Of Course Survey",
      "Graduation Ceremony",
      "Firefighter 1 Study Guide",
      "FF 2 Study Guide",
      "Hazmat Study Guide",
      "End of Course Survey",
    ]
  }
]

export default TEFF1200;