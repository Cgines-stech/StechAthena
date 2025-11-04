// TEIT 1100

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEIT1100 = [
  {
    id: 70003,
    programId: 1,
    courseNumber: "TEIT 1100",
    courseName: "Introduction to Networking",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 0.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Introduction to Networking provides foundational-level instruction on the concepts, models, services, settings, protocols, topologies, and devices used in computer networks.  Students will also explore the Open Systems Interconnection (OSI) and Transmission Control Protocol/Internet Protocol (TCP/IP) models.",

    courseObjectives: [
      "Define common concepts and terms associated with computer networking.",
      "Identify and differentiate the purpose and function of common networking devices.",
      "Identify and differentiate common networking ports, protocols and services.",
      "Identify components of the OSI and TCP/IP models.",
      "Compare and contrast network topologies and access methods.",
    ],

    courseOutline: [
      { title: "Data Transmission", hours: 15},
      { title: "Hardware and Topologies", hours: 15},
    ],

    courseBooks: [
      {
        name: "CompTIA CertMaster Learn Network+", 
        price: 121.0,
        isbn: "9781642745245",
        note: "Networking Technology"
      },
    ],

    syllabiBooks: [
      {
        name: "CompTIA CertMaster Learn Network+", 
        price: 121.0,
        isbn: "9781642745245",
        note: "Networking Technology"
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
      "1.1 - Networking Overview",
      "1.1.7 - Identify Network Topologies",
      "1.1.8 - Lab: Create Network Topologies",
      "1.1.9 - Lesson Review",
      "1.2.9 - Lesson Review",
      "1.3.8 - Laib: Explore a Single Location in a Lab",
      "1.3.9 - Lab: Create a Home Wireless Network",
      "1.3.10 - Lab: Create a SOHO Network",
      "1.3.11 - Lesson Review",
      "1.4.10 - Lab: Troubleshooting Methodology",
      "1.4.11- Lesson Review",
      "1.6 - Module Quiz",
      "2.1.7 - Lab: Reconnect to an Ethernet Network",
      "2.1.8 - Lesson Review",
      "2.2.7 - Identify Copper Cables",
      "2.2.8 - Identify Copper Connect ors",
      "Skills Check: Network Cabling",
      "2.2.9 - Lab: Connect to an Ethernet Network",
      "2.2.10 - Lab: Connect a Cable Modem",
      "2.2.11- Lesson Review",
      "2.3.6 - Lab: Explore Multiple Locations in a Lab",
      "2.3.7 - Laib: Connect Network Devic,es",
      "2.3.8 - Lab: Connect Patch Panel Cables 1",
      "2.3.9 - Laib: Connect Patch Panel Cables 2",
      "2.3.10 - Lesson Review",
      "2.4.7 - Identify Fiber Optic Connect ors",
      "2.4.9 - Lab: Connect Fiber Optic Cables",
      "2.4.10 - Lesson Review",
      "2.5.5 - Lesson Review",
      "2.6.10 - Lab: Explore Physical Connectivity 1",
      "2.6.11- Lab: Explore Physical Connectivity 2",
      "2.6.12 - Lab: Troubleshoot Physical Connectivity 1",
      "2.6.13 - Lab: Troubleshoot Physical Connectivity 2",
      "2.6.14 - Lab: Troubleshoot Physical Connectivity 3",
      "2.6.15 - Lab: Troubleshoot Physical Connectivity 4",
      "2.6.16 - Lesson Review",
      "2.8 - Module Quiz",
      "Student Acknowledgement Statement Module 1",
      "Checkpoint Meeting Module 1",
      "3.1 - Network Interfaces",
      "3.1.7 - Identify Parts of a MAC Address",
      "3.1.8 - Lab: Select and Install a Network Adapter",
      "3.1.9 - Lab: Connect a Media Converter",
      "3.1.10 - Lesson Review",
      "3.2.7 - Lab: Install a Switch in the Rack",
      "3.2.8 - Laib: Secure a Switch",
      "3.2.9 - Lab: Cisco 105 Basics",
      "3.2.10 - Lesson Review",
      "3.3.6 - Laib: Configure Port Aggregation",
      "3.3.7 - Lab: Enable Jumbo Frame Support",
      "3.3.9 - Lesson Review",
      "3.4.8 - Lab: Troubleshoot Disabled Ports",
      "3.4.9 - Lab: Switching Loop",
      "3.4.10 - Lesson Review",
      "3.6 - Modlule Quiz",
      "3.7 - Checkpoint Review",
      "4.1.6 - Lab: Explore Packets and Frames",
      "4.1.7 - Lab: Explore ARP in Wireshark",
      "4.1.8 - Lesson Review",
      "4.2.9 - Lab: Configure IP Addresses",
      "4.2.10 - Lab: Configure IP Addresses on Mobile Devices",
      "4.2.11- Lab: Configure IP Addresses on Linux",
      "4.2.12 - Lesson Review",
      "4.3.7 - Laib: Configure IP Networks and Subnets",
      "Skills Check Subnetting",
      "4.3.8 - Lesson Review",
      "4.4.5 - Lab: IPv4 Troubleshooting Tools",
      "4.4.6 - Lab: IPv4 Troubleshooting tools for Linux",
      "4.4.7- Laib: Use IPv4 Test Tools",
      "4.4.8 - Lesson Review",
      "4.5.9 - Lab: Configure an 1Pv6 Address",
      "4.5.10 - Lesson Review",
      "4.6.4 - Lab: Use ping and t racert on Windows",
      "4.6.5 - Lab: Use ping and t raceroute on Linux",
      "4.6.6 - Lab: Assisted Troubleshooting 1",
      "4.6.7 - Lab: Assisted Troubleshooting 2",
      "4.6.8 - Lab: Assisted Troubleshooting 3",
      "4.6.9 - Lesson Review",
      "4.8 - Module Quiz",
      "End of Course Survey",
      "Checkpoint Meeting Module 2",
      "Student Acknowledgement Statement Module 2",
    ]
  }
]

export default TEIT1100;