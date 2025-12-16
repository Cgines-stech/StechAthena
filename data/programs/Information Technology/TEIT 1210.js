// TEIT 1210

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEIT1210 = [
  {
    id: 70002,
    programId: 1,
    courseNumber: "TEIT 1210",
    courseName: "A+ Core II",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "A+ Core II is a follow up to A+ Core1 and provides further instruction on installation, configuration, maintenance, and security of various common operating systems and  platforms.  This course aligns with the objectives of the CompTIA A+ Core 2 certification exam.",

    courseObjectives: [
      "Install and Configure Windows, Mac, and Linux.",
      "Identify best practices for safety, environmental impacts, communication, and professionalism.",
      "Troubleshoot common operating system, malware, and security issues.",
      "Identify basic vulnerabilities and protect against threats.",
      "Install, configure, and maintain software in computers and mobile devices",
    ],

    courseOutline: [
      { title: "Managing Windows", hours: 15},
      { title: "Securing Windows", hours: 15},
      { title: "Operating System Management", hours: 15},
      { title: "Security Best Practices", hours: 15},
      { title: "Mobile Devices", hours: 15},
      { title: "Data Security", hours: 15},
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
      "Module 13.0 introduction",
      "13.1.4 - Lab: Disk Management",
      "13.1.7 - Lab: Users and Groups",
      "13.1.12 - Lesson Review",
      "13.2.4 - Lab: Manage Files and Folders",
      "13.2.7 - Use System Management Commands",
      "13.2.8 - Lesson Review",
      "13.3.7 - Lab: Configure a VPN Connection",
      "13.3.9 - Lab: Local Firewall Settings",
      "13.3.10 - Lab: Configure TCP/ IP Settings on Windows 10",
      "13.3.11 - Lab: Configure TCP/IP Settings on Windows 11",
      "13.3.12 - Lesson Review",
      "13.5 - Module Quiz",
      "14.1.2 - Lab: Assisted Troubleshooting",
      "14.1.4 - Lab: Troubleshoot Physical Connectivity",
      "14.1.8 - Lab: Connectivity",
      "14.1.9 - Lab: Services/Name Resolution",
      "14.1.10 - Lesson Review",
      "14.2.4 - Lab: Configure Remote Services",
      "14.2.10 - Lesson Review",
      "14.3.10 - Lab: Manage Applications",
      "14.3.14 - Lesson Review",
      "Student Acknowledgement Statement Module 1",
      "Checkpoint Meeting Module 1",
      "14.4 - Troubleshoot Windows OS Problems",
      "14.4.3 - Lab: Boot into the Windows Recovery Environment",
      "14.4.5 - Lab: Create a Restore Point",
      "14.4.9 - Lab: Configure the Boot Order",
      "14.4.14 - Lesson Review",
      "14.6 - Module Quiz",
      "14.7 - Checkpoint Review",
      "15.1.4 - Asymmetric Encryption",
      "15.1.8 - Lab: Create User Accounts",
      "15.1.10 - Authentication",
      "15.1.11 - Lesson Review",
      "15.2.3 - Lab: Create OUs",
      "15.2.5 - Lab: Use System Commands",
      "15.2.6 - Lab: Group Policy Management",
      "15.2.7 - Lesson Review",
      "15.3.6 - Lab: Configure NTFS Permissions",
      "15.3.11- Lab: Support AD Domain Networking",
      "15.3.12 - Lesson Review",
      "15.5 - Module Quiz",
      "16.1.6 - Lab: Windows 11 Features/Desktop",
      "16.1.7 - Lesson Review",
      "16.2.6 - Lesson Review",
      "16.4 - Module Quiz",
      "Student Acknowledgement Statement Module 2",
      "Checkpoint Meeting Module 2",
      "Mnrl11IP 1 7 0 int rnrl11rtinn",
      "17.1.7 - Lab: File Management",
      "17.1.10 - Lab: Manage Linux File Ownership",
      "17.1.11- Lesson Review",
      "17.2.4 - Lab: Informational and Network Tools",
      "17.2.6 - Lab: Configure Linux",
      "17.2.7 - Lesson Review",
      "17.3.11- Lesson Review",
      "17.5 - Module Quiz",
      "17.6 - Checkpoint Review",
      "18.1.3 - Lab: Respond to Social Engineering Exploits",
      "18.1.9 - Lab: Explore SQL Injection Flaws",
      "18.1.10 - Lesson Review",
      "18.2.4 - Authentication Methods",
      "18.2.6 - Lesson Review",
      "Student Acknowledgement Statement Module 3",
      "Checkpoint Meeting Module 3",
      "18.3 - SOHO Router Security",
      "18.3.2 - Lab: SOHO Router Configuration",
      "18.3.9 - Secure a Small Wireless Network",
      "18.3.10 - Lesson Review",
      "18.4.2 - Lab: Implement Physical Security",
      "18.4.5 - Lesson Review",
      "18.6 - Module Quiz",
      "19.1.2 - Lab: Enforce Password Settiings",
      "19.1.9 - Lab: User Policy Management",
      "19.1.10 - Lesson Review",
      "19.2.7 - Lab: Configure Microsoft Defender Antivirus",
      "19.2.9 - Windows Defender",
      "19.2.11- Lab: Encrypt Files with EFS",
      "19.2.13 - Lab: Configure BitLockerwith a TPM",
      "19.2.14 - Lesson Review",
      "19.3.2 - Lab: Practice Installing & Removing Browser",
      "Software",
      "19.3.4 - Lab: Safe Browsing Best Practices",
      "19.3.9 - Clear Browser History",
      "19.3.10 - Lesson Review",
      "Student Acknowledgement Statement Module 4",
      "Checkpoint Meeting Module 4",
      "19.4 - Troubleshoot Workstation Security",
      "19.4.9 - Check for Anti-Malware on a Machine",
      "19.4.13 - Lesson Review",
      "19.6 - Module Quiz",
      "20.1.8 - Lab: Configure Remote Wipe",
      "20.1.9 - Lesson Review",
      "20.2.2 - Mobile Device Troubleshooting",
      "20.2.6 - Lab: Connect to WiFi",
      "20.2.7 - Lesson Review",
      "20.3.4 - Lesson Review",
      "20.5 - Module Quiz",
      "20.6 - Checkpoint Review",
      "21.1.3 - Lab: Back Up t he Computer",
      "21.1.6 - Lab: Restore Data from File History",
      "21.1.7 - Lesson Review",
      "Student Acknowledgement Statement Module 5",
      "Checkpoint Meeting Module 5",
      "21.2 - Data Handling Best Practices",
      "21.2.7 - Lesson Review",
      "21.3.5 - Lesson Review",
      "21.5 - Module Quiz",
      "22.1.7 - Lesson Review",
      "22.2.8 - Lab: Install a UPS",
      "22.2.9 - Lesson Review",
      "22.3.2 - Bash Command Syntax",
      "22.3.4 - Conditionals",
      "22.3.7 - Lab: JavaScript",
      "22.3.10 - Lesson Review",
      "22.5 - Module Quiz",
      "22.6 - Checkpoint Review",
      "End of Course Survey",
      "End of Course Student Acknowledgement Statement",
      "Course Completion Checkpoint Meeting",
    ]
  }
]

export default TEIT1210;