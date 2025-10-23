// TEAU 1050

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAU1050 = [
  {
    id: 30001,
    programId: 3,
    courseNumber: "TEAU 1050",
    courseName: "Workshop Practices and Safety",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 296.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In Workshop Practices and Safety, students will be introduced to the various tools and equipment to be used in the Automotive Industry. Additionally, students will  complete an in-depth automotive specific safety training program. This course meets the required tasks in preparation for successful certification in ASE (Automotive Service Excellence).",

    courseObjectives: [
      "Practice shop safety.",
      "Use and understand a digital multimeter and how to test basic electrical circuits.",
      "Demonstrate working knowledge of automobile information systems.",
      "Use and understand automotive computer diagnostic tools and equipment.",
      "Use and read precision measurement tools.",
    ],

    courseOutline: [
      "Introduction to Safety",
      "Basic Electrical Testing Tools and Equipment",
      "Repair Information Systems",
      "Computer Diagnostics Tools and Equipment",
    ],

    courseBooks: [
      {
        name:
          "Cengage Unlimited Subscription",
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      }
    ],
    
    courseTools: [
      {}
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
        "Automotive Student OE Instructions",
        "Right to Know Agreement",
        "Syllabus",
        "Cell Phone",
        "Personal Data Information",
        "Remind Txt Group",
        "Student Tool and Equipment Use Waiver",
        "Cleaning Expectations",
        "Lab Assignment Examples",
        "SWAM 1105 Workshop Practices & Safety Check Sheet",
        "SWAM 1105 Workshop Practices and Safety Lab",
        "Assignments",
        "Youtube Link",
        "Uniform Request Form",
        "Required Tool List",
        "Introduction to Automotive Safety",
        "The Importance of Workplace Safety",
        "Safety Data Sheets (SDS) and the Hazard Communication",
        "Standard (HCS)",
        "Personal Protective Equipment (PPE)",
        "Respirators and Air Quality",
        "Bloodborne Pathogens (BBPs)",
        "First Aid",
        "Eyewash Stations",
        "Slips, Trips, and Falls in the Shop Environment",
        "Fire Prevention and Fire Safety",
        "Electrical Safety",
        "Power Tool, Hand Tool, and Equipment Safety",
        "Lockout-Tagout (LOTO)",
        "Jump-Starting",
        "Jacks and Other Lifting Equipment",
        "Welding",
        "Electric and Alternative Fuel Vehicles",
        "Operating Vehicles and Defensive Driving",
        "Back Injuries and Ergonomics",
        "Conclusion and Final Exam",
        "Introduction To Pollution",
        "Understanding Pollution Prevention",
        "Waste Management and Shop Housekeeping",
        "Oil and Other Vehicle and Equipment Fluids",
        "Antifreeze",
        "Solvents",
        "Wastewater Management and Handling Spills",
        "Batteries",
        "Tires",
        "Asbestos",
        "Refrigerants",
        "Other P2 Opportunities",
        "Conclusion and Final Exam",
        "Automotive Chemicals 101",
        "Automotive Fluids 101",
        "Motor Oil 101",
        "Caring for Your Tools and Equipment",
        "Hand Tools vs. Power Tools",
        "Ethics and YOU in the Automotive Industry",
        "Shop Safety Walkthrough",
        "Shop Safety Walkthrough Key",
        "Basics Of The Fluke 115 Volt/Ohm Meter (Video)",
        "Electrical Trainer Set Up (Video)",
        "Demonstration Of Voltage Testing (Video)",
        "Demonstration Of Resistance Testing (Video)",
        "Lab 1: Demonstrate Proper Volt/Ohm Meter Setup",
        "Lab 2: Demonstrate Proper Set Up Of The Electrical Trainer",
        "Lab 3: Using A Voltmeter, Test The Voltage Of The Power",
        "Supply And Record The Measurement, Perform Voltage Drop",
        "Testing.",
        "Lab 4: Using A Ohm Meter, Measure The Resistance Of A",
        "Resistor, Switch, Circuit, And Record The Measurements",
        "Basics Of A Test Light (Video)",
        "Lab 5: Using A Test Light, Check For Power",
        "Basics Of The Power Probe (Video)",
        "Lab 6: Using A Power Probe, Provide The Light Bulb A Path",
        "To Ground",
        "ALLDATA Instructions",
        "Lab 7: Using ALLDATA, Enter Three Different Vehicles And",
        "Find Their Oil Level Specifications",
        "Lab 8: Using The ALLDATA, Find Service Information",
        "Regarding Crankshaft End Play Specifications",
        "Lab 9: Using ALLDATA, Find The Torque Specifications For",
        "Cylinder Head Bolts",
        "Lab 10: Using ALLDATA, Find The Labor Time To Change A",
        "Turbocharger",
        "Lab 11: Using ALLDATA, Find A Wiring Diagram Relating To",
        "The Radio Of The Vehicle",
        "Lab 12: Using ALLDATA, Find A Wiring Diagram Interactive",
        "Features",
        "Basics Of The Snap-On Verus (Video)",
        "Lab 18: Using Snap-On Verus, Connect To Three Different",
        "Vehicles In The Shop And Check For DTCs",
        "Lab 19: Using The Snap-On Verus, Find Powertrain Related",
        "To the O2 sensors",
        "Lab 20: Using The Snap-On Verus, Check To See If There Is",
        "Any Available System Tests Available",
        "Lab 21: Using The Snap-On Verus, Check To See If There Is",
        "Any Controllable Vehicle Functions",
        "Basics Of The Matco Maximus (Video)",
        "Lab 22: Using Matco Maximus, Connect To Three Different",
        "Vehicles In The Shop And Check For DTCs",
        "Lab 23: Using The Matco Maximus, Find Heating and A/C",
        "Related Data",
        "Lab 24: Using The Matco Maximus, Check To See If There Is",
        "Any Controllable Vehicle Functions",
        "Lab 25: Using The Matco Maximus, Check To See If There Is",
        "Any Available System Tests Available",
        "End of Course Survey",
    ]
  }
]

export default TEAU1050;