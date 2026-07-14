// TEMA 1098

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1098 = [
  {
    id: 14014,
    programId: 1,
    courseNumber: "TEMA 1098",
    courseName: "Medical Assistant Emergency and Wellness Procedures",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 203.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Medical Assistant Emergency and Wellness Procedures course introduces students to essential lifesaving procedures and preventive health practices within the clinical and ambulatory care setting. The content of this course focuses on recognizing and responding to medical emergencies, performing CPR and first aid, and supporting patient recovery and rehabilitation. Emphasis is placed on promoting healthy living, preventive care, and the medical assistant’s role in maintaining patient safety and wellness.",

    courseObjectives: [
      "Demonstrate proficiency in performing basic lifesaving techniques, including CPR, first aid, and emergency response procedures, in accordance with current clinical guidelines.",
      "Identify and apply appropriate interventions for common medical emergencies within the ambulatory care setting, ensuring patient safety and effective coordination of care.",
      "Explain and promote preventive health and wellness strategies that support patient recovery, rehabilitation, and overall well-being as part of the medical assistant’s professional role.",
    ],

    courseOutline: [
      { title: "Medical Emergencies and CPR", hours: 10},
      { title: "First Aid for Accidents and Injuries", hours: 10},
      { title: "Rehabilitation and Healthy Living", hours: 10},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Medical Assisting: Administrative & Clinical Competencies, 10th ed.", 
        price: 150.0,
        isbn: "9798214113586",
        note: "Cengage Unlimited Subscription 1 year                        					"
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {
         name: "BLS",
         price: 45.0,
         note: ""
      },
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
      "Welcome",
      "Syllabus and Course Agreement",
      "Course Timeline ",
      "Post-enrollment Requirements ",
      "Chapter 53 Check Your Understanding 1: Responding to Medical Emergencies ",
      "Chapter 53 Check Your Understanding 2: Emergency Preparedness and Evacuation ",
      "First Aid Training ",
      "Chapter 53 Application Activity: Emergencies in the Medical Office ",
      "SALT Mass Casualty Triage Training",
      "CPR Training",
      "Chapter 53 Review Questions: Emergencies in the Medical Office ",
      "Chapter 53 Critical Thinking: The Rule of Nines",
      "Chapter 53 Quiz: Emergencies in the Medical Office ",
      "Chapter 53 - Emergencies in the Medical Office and the Community- Requires Respondus LockDown Browser ",
      "Check point meeting- Module 1 ",
      "Incident Report Form ",
      "R.I.C.E. Handout ",
      "Skill - Perform First Aid Procedures for Fractures Videos ",
      "Skill - Perform Wound Care Video ",
      "Skill Reflection 1 - Perform First Aid Procedures for Fractures",
      "Skill Reflection 2 - Perform First Aid Procedures for Fractures ",
      "Skill Reflection 3 - Perform First Aid Procedures for Fractures ",
      "Skill Reflection 1 - Perform Wound Care ",
      "Skill Reflection 2 - Perform Wound Care ",
      "Skill Reflection 3 - Perform Wound Care ",
      "Perform Wound Care Skill Pass-Off ",
      "Perform First Aid Procedures for Fractures Skill Pass-Off",
      "Chapter 54 Application Activity: First Aid for Accidents and Injuries ",
      "Chapter 54 Check Your Understanding 2: Wounds ",
      "Skill - Bandaging Wounds Videos ",
      "Skill Reflection 1 - Apply a Tube Gauze Bandage ",
      "Skill Reflection 2 - Apply a Tube Gauze Bandage ",
      "Skill Reflection 3 - Apply a Tube Gauze Bandage",
      "Apply a Tube Gauze Bandage Skill Pass-Off ",
      "Skill Reflection 1 - Apply a Spiral Bandage ",
      "Skill Reflection 2 - Apply a Spiral Bandage ",
      "Skill Reflection 3 - Apply a Spiral Bandage ",
      "Apply a Spiral Bandage Skill Pass-Off",
      "Skill Reflection 1 - Apply a Figure-Eight Bandage ",
      "Skill Reflection 2- Apply a Figure-Eight Bandage ",
      "Skill Reflection 3 - Apply a Figure-Eight Bandage ",
      "Apply a Figure-Eight Bandage Skill Pass-Off",
      "Chapter 54 Check Your Understanding 1: Accidents and Injuries, Bites and Stings",
      "Chapter 54 Critical Thinking: First Aid for an Insect Sting ",
      "Chapter 54 Review Questions: First Aid for Accidents and Injuries",
      "Chapter 54 Quiz: First Aid for Accidents and Injuries ",
      "Chapter 54 - First Aid for Accidents and Injuries- Requires Respondus LockDown Browser ",
      "Check point meeting- Module 2",
      "Chapter 55 Check Your Understanding 1: Body Mechanics ",
      "Defend Against Sports Injuries Worksheet ",
      "Chapter 55 Check Your Understanding 2: Mobility Equipment and Range of Motion ",
      "Chapter 55 Application Activity: Rehabilitation ",
      "Skill - Mobility Devices Video ",
      "Skill Reflection 1 - Apply an Arm sling ",
      "Skill Reflection 2 - Apply an Arm sling ",
      "Skill Reflection 3 - Apply an Arm sling",
      "Apply an Arm sling Skill Pass-Off ",
      "Skill Reflection 1 - Use a Cane",
      "Skill Reflection 2 - Use a Cane ",
      "Skill Reflection 3- Use a Cane ",
      "Use a Cane Skill Pass-Off ",
      "Skill Reflection 1 - Use Crutches ",
      "Skill Reflection 2- Use Crutches ",
      "Skill Reflection 3 - Use Crutches",
      "Use Crutches Skill Pass-Off ",
      "Skill Reflection 1 - Use a Walker ",
      "Skill Reflection 2 - Use a Walker",
      "Skill Reflection 3 - Use a Walker ",
      "Use a Walker Skill Pass-Off",
      "Chapter 55 Critical Thinking: Transferring a Patient from a Wheelchair",
      "Chapter 55 Review Questions: Rehabilitation ",
      "Chapter 55 Quiz: Rehabilitation ",
      "Chapter 55 - Rehabilitation- Requires Respondus LockDown Browser",
      "Schedule Your Final Scenario ",
      "Chapter 56 Check Your Understanding 1: Nutrition and Dietary Guidelines ",
      "Chapter 56 Check Your Understanding 2: Dietary Requirements for Specific Conditions and Diseases",
      "Chapter 56 Application Activity: Nutrition, Exercise, and Healthy Living",
      "Malnutrition Worksheet",
      "Skill - Instruct a Patient According to Special Dietary Needs Info ",
      "Skill Reflection 1 - Instruct a Patient According to Special Dietary Needs",
      "Skill Reflection 2 - Instruct a Patient According to Special Dietary Needs ",
      "Skill Reflection 3 - Instruct a Patient According to Special Dietary Needs ",
      "Instruct a Patient According to Special Dietary Needs Pass-Off ",
      "Food Allergies Worksheet ",
      "Food Labels Worksheet ",
      "Chapter 56 Review Questions: Nutrition, Exercise, and Healthy Living ",
      "Chapter 56 Quiz: Nutrition, Exercise, and Healthy Living ",
      "Chapter 56 Critical Thinking: Dietary Instructions ",
      "Chapter 56 - Nutrition, Exercise, and Healthy Living- Requires Respondus LockDown Browser ",
      "Check point meeting- Module 3 ",
      "Professionalism Evaluation ",
      "Skills List ",
      "Final Scenario ",
    ]
  }
]

export default TEMA1098;