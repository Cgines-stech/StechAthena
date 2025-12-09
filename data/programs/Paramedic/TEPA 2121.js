// TEPA 2121

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPA2121 = [
  {
    id: 11008,
    programId: 1,
    courseNumber: "TEPA 2121",
    courseName: "Paramedic Capstone Experience",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 100.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Paramedic Capstone Experience course provides students with hands-on practice of the entire spectrum of paramedic care.",

    courseObjectives: [
      "Perform all duties as an entry-level paramedic using cognitive, affective, and psychomotor domains.",
      "Perform patient assessment in trauma situations.",
      "Demonstrate cardiac management skills.",
      "Manage patient condition competently in out-of-hospital scenarios.",
      "Demonstrate competency in airway, respiration, and ventilation, cardiology, resuscitation, trauma, medical, obstetrics and gynecology, and EMS operations for both adult and pediatric patients.",
      "Complete the required National Registry capstone portfolio.",
    ],

    courseOutline: [
      { title: "EMS Operations", hours: 20},
      { title: "Evidence-based Practice", hours: 10},
      { title: "NREMT Exam Preparation", hours: 25},
      { title: "Specific Certifications", hours: 35},
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
      {
         name: "Advanced Cardiovascular Life Support (ACLS) Certification",
         price: 150.0,
         note: "Vendor - AHA"
      },
      {
         name: "Pediatric Advanced Life Support (PALS) Certification",
         price: 150.0,
         note: "Vendor - AHA"
      },
      {
         name: "Prehospital Trauma Life Support (PHTLS) Certification",
         price: 30.0,
         note: "Vendor - NAEMT"
      },
      {
         name: "Advanced Medical Life Support (AMLS) Certification",
         price: 30.0,
         note: "Vendor - NAEMT"
      },
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
        {
          startDate: "09-28-2026",
          endDate: "12-07-2026",

          Monday: "9:00 AM - 1:00 PM\n2:00 PM - 6:00 PM",
          
          Tuesday: "",
          Wednesday: "",
          Thursday: "",

          Friday: "9:00 AM - 1:00 PM\n2:00 PM - 6:00 PM",

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
      "Professional Paramedic Presentations",
      "Evidence-Based Practice Paper, Draft 2",
      "Evidence-Based Practice Paper - Final",
      "Evidence-Based Practice Presentation",
      "Fisdap Comprehensive Exam",
      "Instructor Resources",
      "Lesson Plan: Lesson 74",
      "Rescue Scene Awareness Handout: Lesson 74",
      "Requi red Resources",
      "Lesson Guide: Lesson 74",
      "Chapter 47 Transport Operations",
      "Chapter 49 Vehicle Extrication and Special Rescue",
      "Watch t he following v ideos:",
      "Driving the Ambulance",
      "Mayo Clinic Landing Zone Training",
      "Vehicle Extrication: Size-up and Stabilization",
      "Rescue Methods FR1: Water Rescue - Throwbag",
      "Fundamentals",
      "New Backboarding Procedure (American Red Cross)",
      "How to Break Glass",
      "Skill Evaluation Sheets: Chapter 49",
      "Skill Evaluation Sheets: Lesson 74",
      "Skill Drill s: Chapter 49",
      "Interactive Lecture: Chapter 47",
      "Interactive Lecture: Chapter 49",
      "Student -Facilitated Scenario Handout: Lesson 74",
      "Scenario Role Cards: Lesson 74",
      "Recommended Resources",
      "Slides: Chapter 4 7",
      "Slides: Chapter 49",
      "Lecture Outline: Chapter 47",
      "Lecture Outline: Chapter 49",
      "Case Studies: Chapter 47",
      "Case Studies: Chapter 49",
      "Assessment in Action: Chapter 47",
      "Assessment in Action: Chapter 49",
      "Flashcards: Chapter 47",
      "Flashcards: Chapter 49",
      "Lesson 74 In-Class Quiz",
      "Instructor Resou rces",
      "Lesson Plan: Lesson 71",
      "Patient Cards: Lesson 71",
      "Required Resou rces",
      "Lesson Guide: Lesson 71",
      "Student - Facilitated Scenario Handout: Lesson 71",
      "Scenario Role Cards: Lesson 71",
      "Chapter 48 Incident Management and Mass-Casualty",
      "Incidents",
      "Chapter 52 Disaster Response",
      "Virtual Ride-Along Video: Mass-Casualty Incident Drill",
      "FEMA: ICS 100, ICS 200",
      "Interactive Lecture: Chapter 48",
      "Interactive Lecture: Chapter 52",
      "Recommended Resources",
      "Slides: Chapter 48",
      "Slides: Chapter 52",
      "Lecture Outline: Chapter 48",
      "Lecture Outline: Chapter 52",
      "Case Studies: Chapter 48",
      "Case Studies: Chapter 52",
      "Assessment in Action: Chapter 48",
      "Assessment in Action: Chapter 52",
      "Flashcards: Chapter 48",
      "Flashcards: Chapter 52",
      "Lesson 71 In-Class Quiz",
      "Instructor Resources",
      "Lesson Plan: Lesson 73",
      "Crime Scene Handout : Lesson 73",
      "Team Drills Patient Handout: Lessorn 73",
      "Lecture Outline: Chapter 51",
      "Lecture Outline: Chapter 53",
      "Required Resources",
      "Lesson Guide: Lesson 73",
      "Chapter 51 Terrorism Response",
      "Chapter 53 Crime Scene Awareness",
      "EMS Response to Crime Scenes",
      "What Are Chemical Weapons? (Lesson 1: Chemical",
      "Weapons)",
      "Chemical Weapons - Blister Agents (Lesson 2: Chemical",
      "Weapons)",
      "Chemical Weapons - Nerve Agents (Lesson 3: Chemical",
      "Weapons)",
      "Interactive Lecture: Chapter 51",
      "Interactive Lecture: Chapter 53",
      "Student-Facilitated Scenario Handout: Lesson 73",
      "Scenario Role Cards: Lesson 73",
      "Recommended Resources",
      "Slides: Chapter 51",
      "Slides: Chapter 53",
      "Case Studies: Chapter 51",
      "Case Studies: Chapter 53",
      "Assessment in Action: Chapter 51",
      "Assessment in Action: Chapter 53",
      "Flashcards: Chapter 51",
      "Flashcards: Chapter 53",
      "Lesson 73 In-Class Quiz",
      "PHTLS Coursework, Participation, Test",
      "AMLS Pre-course Work",
      "Instructor Resources",
      "Lesson Plan: Lesson 72",
      "Think, Find, Ask Handout: Lesson 72",
      "Hazardous Materials Action Plan: Lesson 72",
      "Required Resources",
      "Lesson Guide: Lesson 72",
      "Chapter 50 Hazardous Materials",
      "Watch the following videos:",
      "Overview of the Emergency Response Guidebook (ERG)",
      "Section 3: Hazardous Materials Awareness",
      "Firefighter Rehabilitation",
      "Skill Evaluation Sheets: Chapter SO",
      "Skill Drill s: Chapter SO",
      "Student-Facilitated Scenario Handout: Lesson 72",
      "Scenario Role Cards: Lesson 72",
      "Recommended Resources",
      "Slides: Chapter SO",
      "Lecture Outline: Chapter SO",
      "Case Studies: Chapter 50",
      "Assessment in Action: Chapter SO",
      "Flashcards: Chapter SO",
      "Interactive Lecture: Chapter SO",
      "Lesson 72 In-Class Quiz",
      "End Of Course Survey",
      "Appendix: Career Development",
      "Virtual Ride-Alongs",
      "Virtual Ride-Along Video: COPD",
      "Virtual Ride-Along Video: Allergic Reaction",
      "Virtual Ride-Along Video: Altered Mental Status",
      "Virtual Ride-Along Video: Assault",
      "Virtual Ride-Along Video: Attempted Suicide",
      "Virtual Ride-Along Video: Cardiac Arrest",
      "Virtual Ride-Along Video: Difficulty Breathing",
      "Virtual Ride-Along Video: Fall in Apartment",
      "Virtual Ride-Along Video: Geriatric Altered Mental Status",
      "Virtual Ride-Along Video: GI Bleed",
      "Virtual Ride-Along Video: Motorcycle Crash",
      "Virtual Ride-Along Video: Pediatric Trauma",
      "Virtual Ride-Along Video: Psychiatric Emergency",
      "Virtual Ride-Along Video: Respiratory Distress",
      "Virtual Ride-Along Video: Seizure",
      "Virtual Ride-Along Video: Weakness",
      "Virtual Ride-Along Video: Situational Awareness",
      "Skill Videos",
      "Skill Video: Apply Cervical Collar",
      "Skill Video: Bag-Mask Ventilation",
      "Skill Video: Bandaging Techniques",
      "Skill Video: Bronchodilator: Metered-Dose Inhaler",
      "Skill Video: Bronchodilator: Small Volume Nebulizer",
      "Skill Video: Epinephrine Auto-Injector",
      "Skill Video: Head Tilt-Chin Maneuver",
      "Skill Video: lntraosseous Access",
      "Skill Video: Intravenous Access",
      "Skill Video: Jaw-Thrust Maneuver",
      "Skill Video: Long Bone Injury",
      "Skill Video: Mouth-to-Mask Ventilation",
      "Skill Video: Nasopharyngeal Airway",
      "Skill Video: Nasotracheal Intubation",
      "Skill Video: Oral Medication Administration",
      "Skill Video: Oral Suctioning",
      "Skill Video: Oropharyngeal Airway",
      "Skill Video: Orotracheal Intubation by Direct Laryngoscopy",
      "Skill Video: Oxygen Administration by Nonrebreathing Mask",
      "Skill Video: Patient Lifting",
      "Skill Video: Recognition of an Airway Obst ruction",
      "Skill Video: Seated Spinal Motion Restriction",
      "Skill Video: Spine Assessment",
      "Skill Video: Supine Spinal Motion Restriction",
      "Skill Video: Tongue-Jaw Lift Maneuver",
      "Skill Video: Vital Signs Assessment",
    ]
  }
]

export default TEPA2121;