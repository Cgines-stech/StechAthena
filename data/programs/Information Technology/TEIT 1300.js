// TEIT 1300

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEIT1300 = [
  {
    id: 70006,
    programId: 1,
    courseNumber: "TEIT 1300",
    courseName: "Linux Foundations",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Linux Foundations focuses on the installation, configuration, and process management of a Linux workstation. Students will explore shell programming, file system  management, user accounts, access and permissions, and managing multiple concurrent processes to achieve higher utilization.",

    courseObjectives: [
      "Install and maintain a Linux workstation.",
      "Configure Linux from the GUI and command line.",
      "Configure file and access permissions.",
      "Perform maintenance tasks including user management, backup and restore, shut down, and reboot.",
    ],

    courseOutline: [
      { title: "Linux Terminal and Installation", hours: 15},
      { title: "Software Installation", hours: 15},
      { title: "Users and Filesystem Management", hours: 15},
      { title: "System Monitoring", hours: 15},
    ],

    courseBooks: [
      {
        name: "TestOut Linux Pro", 
        price: 139.0,
        isbn: "9781935080381",
        note: "Linux Fundamentals"
      },
    ],

    syllabiBooks: [
      {
        name: "TestOut Linux Pro", 
        price: 139.0,
        isbn: "9781935080381",
        note: "Linux Fundamentals"
      },
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {},
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
      "Course Introduction and Standards",
      "Meet Your Instruction Team",
      "Rules of the Lab",
      "CS Code of Conduct Policy",
      "Submitting Assignments in Canvas",
      "Taking a Screenshot",
      "Orientation",
      "Syllabus Agreement",
      "0.1 - Course Introduction",
      "0.1.3 - Manage Linux Files",
      "0.1.4 - Practice Questions",
      "0.2 - The TestOut Lab Simulator",
      "1.1 - Linux Introduction",
      "1.1.5 - Practice Questions",
      "2.1 - The Linux Shell",
      "2.1.7 - Practice Questions",
      "2.2 - Linux Help",
      "2.2.4 - Get Help",
      "2.2.5 - Practice Questions",
      "2.3 - Text Editors",
      "2.3.5 - Create a New File",
      "2.3.6 - Modify an Existing File",
      "2.3.7 - Use t he nano Editor",
      "2.3.8 - Practice Questions",
      "2.4 - Aliases",
      "2.4.4 - Practice Questions",
      "2.5 - Environment Variables",
      "2.5.4 - View Environment Variables",
      "2.5.5 - Practice Questions",
      "2.6 - Shell Configuration Files",
      "2.6.4 - Practice Questions",
      "2.7 - Redirection, Piping and Command Substitution",
      "2. 7 .8 - Practice Questions",
      "2.8 - Directories",
      "2.8.6 - Working with Directories",
      "2.8. 7 - Create Directories",
      "2.8.8 - Delete Directories",
      "2.8. 9 - Practice Questions",
      "Skills Check: SSH Terminal Connection",
      "Checkpoint Meeting Module 1",
      "Student Acknowledgement Statement Module 1",
      "2.10 - Links",
      "2.10.4 - Create a Hard Link",
      "2.10.5 - Create a Symbolic Link",
      "2.10.6 - Practice Questions",
      "2.11 - Filesystem Hierarchy Standard (FHS)",
      "2.11.3 - Practice Questions",
      "2.12 - Locating and Searching Files",
      "2.12.8 - Use grep",
      "2.12.9 - Practice Questions",
      "2.13 - Text Stream Processing",
      "2.13.3 - Practice Questions",
      "Skills Check: Linux Installation",
      "5.1 - Graphical User Interfaces",
      "5.1.3 - Practice Questions",
      "5.2 - Linux Desktops",
      "5.2.3 - Practice Questions",
      "5.3 - Remote Desktop",
      "5.4 - Accessibility",
      "5.4.4 - Practice Questions",
      "6.1 - Red Hat Package Manager (RPM)",
      "6.1.4 - Install an RPM Package",
      "6.1.5 - Remove an RPM Package",
      "6.1.6 - Update an RPM Package",
      "6.1.8 - Practice Questions",
      "Checkpoint Meeting Module 2",
      "Student Acknowledgement Statement Module 2",
      "6.2 - Online Package Installation",
      "6.2.5 - Use DNF to Install an RPM Package",
      "6.2.6 - Use DNF to Remove an RPM Package",
      "6.2. 7 - Practice Questions",
      "6.3 - Debian Package Manager (dpkg)",
      "6.3.5 - Use apt",
      "6.3.6 - Practice Questions",
      "6.4 - Shared Libraries",
      "6.4.4 - Practice Questions",
      "7.1 - User and Group Overview",
      "7.1.5 - View User Account Information",
      "7.1.6 - View Group Membership Information",
      "7.1.7 - Practice Questions",
      "7.2 - User Management",
      "7.2.5 - Create a User Account",
      "7.2.6 - Rename a User Account",
      "7.2.7 - Delete a User",
      "7.2.8 - Change Your Password",
      "7.2.9 - Change a User's Password",
      "7.2.10 - Lock and Unlock User Accounts",
      "7 .2.11 - Practice Questions",
      "7.3 - Group Management",
      "7.3.4 - Rename and Create Groups",
      "7.3.5 -Add Users to a Group",
      "7.3.6 -Add a User to Additional Groups",
      "7.3.7 - Delete a Group and Users",
      "7.3.8 - Remove a User from a Group",
      "7.3.9 - Remove a User from All Groups",
      "7.4 - Troubleshoot User Issues",
      "7.4.4 - Practice Questions",
      "Skills Check: (WSL) Windows Subsystem for Linux",
      "Checkpoint Meeting Module 3",
      "10.1 - Processes",
      "743 x 1552 r odule 3",
      "10.1.9 - View Process Information",
      "10.1.10 - Use pidof",
      "10.1.11 • Practice Questions",
      "10.2 - Process Management",
      "10.2.10 - Stop a Zombie Process",
      "10.2.11-:Srmg an Appllcation to t he Foreground",
      "10.2.12 - Practice Questions",
      "10.3 - Task Management",
      "10.3.10 - Configure Crontab",
      "10.3.11 - Practice Questions",
      "10.4 - System Time Configuration",
      "10.4.11 - Practice Questions",
      "11.1 - System Logging",
      "11.1.10 - View Log Files",
      "11.1.11- Practice Questions",
      "11.2 - Resource Monitoring",
      "11.2.4 - Use Uptime",
      "11.2.5 - Use top",
      "11.2.6 - Practice Questions",
      "12.1- 1Pv4 Overview",
      "12.1.9 - Practice Questions",
      "12.2 - Net work Interface Configuration",
      "12.2.8 - Use ping and traceroute",
      "12.2.9 - Start a NIC",
      "12.2.10 - Stop a NIC",
      "12.2.11- Configure IP Addresses",
      "12.2.12 - Practice Questions",
      "Student Feedback",
      "Course Completion Checkpoint Meeting",
      "End of Course Student Acknowledgement Statement",
    ]
  }
]

export default TEIT1300;