// TEIT 1170

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEIT1170 = [
  {
    id: 70004,
    programId: 1,
    courseNumber: "TEIT 1170",
    courseName: "Computer Networks I",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Computer Networks I explores common computer networking models, network device installation and configuration, switching and routing technologies, IP address configuration, basic wireless network configuration, and network troubleshooting tools and methodology. This course aligns with objectives from popular networking certification.",

    courseObjectives: [
      "Differentiate the purpose of each layer in the Open Systems Interconnection (OSI) model.",
      "Install and configure common networking devices, components, and services.",
      "Identify characteristics of switching and routing technologies and features.",
      "Plan and configure IPv4 and IPv6 network addresses and services.",
      "Configure a small office/home office (SOHO) wireless network.",
      "Use the appropriate methodology, tools, and protocols to troubleshoot and resolve networking issues.",
    ],

    courseOutline: [
      { title: "Network Models and Protocols", hours: 15},
      { title: "Cabling and Network Hardware", hours: 15},
      { title: "Addresses and Services", hours: 15},
      { title: "Switching and Routing", hours: 15},
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
      "Orientation Acknowledgement",
      "Syllabus Agreement",
      "5.1 - Routing Technologies",
      "5.1.9 - Lab: Install an Enterprise RoUJter",
      "5.1.10- Lab: Cisco Troubleshooting Tools",
      "5.1.11- Lesson Review",
      "5.2.7 - Lesson Review",
      "5.3.4 - Lab: Configure NAT",
      "5.3.5 - Lesson Review",
      "5.4.3 - Lesson Review",
      "5.5.3 - Compare Three-Tier Hierarchical Model",
      "5.5.4 - Laib: Create a Three-Tier Network",
      "5.5.5 - Lesson Review",
      "5.6.8 - Laib: Configure Switch IP and VLAN - GUI",
      "5.6.9 - Laib: Create VLANs - GUI",
      "5.6.10 - Lab: Configure Trunking",
      "5.6.11- Lab: Configure Switch IP Settings - CLI",
      "5.6.12- Lab: Configure ManagementVLAN Settings - CLI",
      "5.6.13 - Lesson Review",
      "5.7.4 - Lesson Review",
      "5.8 - Module Quiz",
      "6.1.7 - Laib: Explore Three-Way Handshake in Wireshark",
      "6.1.8 - Laib: View Open Ports with netstat",
      "6.1.9 - Lesson Review",
      "Skills Check: Fiber Splicing",
      "Student Acknowledgement Statement Module 1",
      "Checkpoint Meeting Module 1",
      "6.2 - Dynamic Host Configuration Protocol",
      "6.2.5 - Laib: Configure a DHCP Server",
      "6.2.6 - Laib: Configure DHCP Server Options",
      "6.2.7 - Laib: Create DHCP Exclusions",
      "6.2.8 - Lab: Create DHCP Client Reservations",
      "6.2.10 - Lab: Configure Client Addressing for DHCP",
      "6.2.11 - Lesson Review",
      "6.3.4 - Lab: Explore APIPAAddressing",
      "6.3.5 - Lab: Explore APIPAAddressing in Network Modeler",
      "6.3.7 - Lesson Review",
      "6.4.4 - Lab: Configure a DHCP Relay Agent",
      "6.4.5 - Laib: Add a DHCP Server on Another Subnet",
      "6.4.6 - Lab: Troubleshoot Address Pool Exhaustion",
      "6.4.7- Lab: Explore DHCPTroubleshooting",
      "6.4.8 - Laib: Troubleshoot IP Configuiration 1",
      "6.4.9 - Lab: Troubleshoot IP Configuiration 2",
      "6.4.10 - Lab: Troubleshoot IP Configiuration 3",
      "6.4.11 - Lesson Review",
      "6.5.11 - Lab: Configure DNS Addresses",
      "6.5.12 - Lab: Create Standard DNS Zones",
      "6.5.13 - Lab: Create Host Records",
      "6.5.14 - Lab: Create CNAME Records",
      "6.5.15 - Lab: Troubleshoot DNS Records",
      "6.5.17 - Lesson Review",
      "6.6.6 - Lab: Use nslookup",
      "6.6.7 - Lesson Review",
      "6.7 - Modlule Quiz",
      "6.8 - Checkpoint Review",
      "7.1.4 - Laib: Configure NTP on Linux",
      "7.1.5 - Lesson Review",
      "Student Acknowledgement Statement Module 2",
      "Checkpoint Meeting Module 2",
      "7.2 - Web, File, Print, and Database Services",
      "7.2.8 - Lab: Scan for Web Services with Nmap",
      "7.2.9 - Lesson Review",
      "7.3.6- Lab: Connect VoIP 1",
      "7 .3. 7 - Laib: Connect Vol P 2",
      "Skills Check: VOiP Installation",
      "7.3.8 - Lesson Review",
      "7.4.8 - Lab: Configure NIC Teaming",
      "7.4.9 - Lesson Review",
      "7.5 - Modlule Quiz",
      "8.1.11- Lab: Update Firmware",
      "8.1.12 - Lesson Review",
      "8.2.8 - Lab: Scan Using Zenmap",
      "8.2.9 - Lesson Review",
      "8.3.6 - Lesson Review",
      "8.4.6 - Lab: Configure Logging in pfSense",
      "8.4.7 - Lab: Evaluate Event Logs in pfSense",
      "8.4.8 - Lab: Auditing Device Logs on a Cisco Switch",
      "8.4.9 - Laib: Configure Logging on Linux",
      "8.4.10 - Lab: View Event Logs",
      "8.4.11- Lesson Review",
      "8.5.5 - Laib: Troubleshoot with Wireshark",
      "8.5.6 - Lab: Configure Port Mirroring",
      "8.5.7 - Lesson Review",
      "8.6.7 - Lab: Configure QoS",
      "8.6.9 - Lesson Review",
      "8.7 - Module Quiz",
      "Student Acknowledgement Statement Module 3",
      "Checkpoint Meeting Module 3",
      "9.1 - Security Concepts",
      "9.1.7 - Lab: Create a Honeypot",
      "9.1.8 - Lesson Review",
      "9.2.5 - Lab: Analyze a DoS Attack",
      "9.2.6 - Lab: Analyze a DDoS Attack",
      "9.2.7 - Lesson Review",
      "9.3.7 - Lab: Poison ARP and Analyze with Wireshark",
      "9.3.8 - Laib: Spoof MAC Addresses with SMAC",
      "9.3.9 • Laib: Perform a DHCP Spoofing On•Path Attack",
      "9.3.10 - Lesson Review",
      "9.4.6 - Lab: Discover a Rogue DHCP Server",
      "9.4.7 - Lab: Configure DHCP Snooping",
      "9.4.8 - Lab: Poison DNS",
      "9.4.9 - Lab: Analyze DNS Spoofing",
      "9.4.10 - Lesson Review",
      "9.5.3 - Laib: Respond to Social Engineering Exploits",
      "9.5.4 - Laib: Crack a Password with John t he Ripper",
      "9.5.5 - Lesson Review",
      "9.6 - Modlule Quiz",
      "9.7 - Checkpoint Review",
      "Student Acknowledgement Statement Module 4",
      "Checkpoint Meeting Module 4",
    ]
  }
]

export default TEIT1170;