const cnQuestions = [

{
    question: "What does LAN stand for?",
    options: [
        "Local Area Network",
        "Large Area Network",
        "Long Area Network",
        "Line Area Network"
    ],
    answer: 0,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "LAN stands for Local Area Network."
},

{
    question: "What does WAN stand for?",
    options: [
        "Wide Area Network",
        "Wireless Area Network",
        "Web Area Network",
        "World Area Network"
    ],
    answer: 0,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "WAN stands for Wide Area Network."
},

{
    question: "Which device connects different networks?",
    options: [
        "Hub",
        "Switch",
        "Router",
        "Repeater"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "Routers connect multiple networks."
},

{
    question: "Which device forwards data using MAC addresses?",
    options: [
        "Router",
        "Hub",
        "Switch",
        "Gateway"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "Switches forward frames using MAC addresses."
},

{
    question: "Which protocol is used to browse websites?",
    options: [
        "FTP",
        "SMTP",
        "HTTP",
        "SSH"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "HTTP is used to access websites."
},

{
    question: "Which protocol is the secure version of HTTP?",
    options: [
        "SSL",
        "HTTPS",
        "SSH",
        "TLS"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "HTTPS encrypts communication using SSL/TLS."
},

{
    question: "Which protocol is used to transfer files?",
    options: [
        "SMTP",
        "FTP",
        "POP3",
        "SNMP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "FTP stands for File Transfer Protocol."
},

{
    question: "Which protocol is used to send emails?",
    options: [
        "SMTP",
        "POP3",
        "IMAP",
        "HTTP"
    ],
    answer: 0,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "SMTP is used for sending emails."
},

{
    question: "Which protocol is commonly used to receive emails?",
    options: [
        "SMTP",
        "FTP",
        "POP3",
        "ARP"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "POP3 retrieves emails from a mail server."
},

{
    question: "What does IP stand for?",
    options: [
        "Internet Protocol",
        "Internal Process",
        "Internet Program",
        "Input Protocol"
    ],
    answer: 0,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "IP stands for Internet Protocol."
},

{
    question: "Which protocol converts domain names into IP addresses?",
    options: [
        "DHCP",
        "DNS",
        "SMTP",
        "HTTP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "DNS translates domain names into IP addresses."
},

{
    question: "Which protocol automatically assigns IP addresses?",
    options: [
        "DNS",
        "DHCP",
        "FTP",
        "ARP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "DHCP dynamically assigns IP addresses."
},

{
    question: "How many layers are there in the OSI model?",
    options: [
        "5",
        "6",
        "7",
        "8"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "The OSI model consists of 7 layers."
},

{
    question: "Which layer of the OSI model is responsible for routing?",
    options: [
        "Transport",
        "Network",
        "Session",
        "Application"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "The Network layer handles routing."
},

{
    question: "Which layer of the OSI model is closest to the user?",
    options: [
        "Presentation",
        "Application",
        "Session",
        "Transport"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "The Application layer interacts directly with the user."
},
{
    question: "Which layer of the OSI model is responsible for error detection using frames?",
    options: [
        "Physical",
        "Data Link",
        "Network",
        "Transport"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "The Data Link layer performs framing and error detection."
},

{
    question: "Which layer of the TCP/IP model corresponds to the OSI Transport layer?",
    options: [
        "Internet",
        "Application",
        "Transport",
        "Network Access"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "The TCP/IP Transport layer provides end-to-end communication."
},

{
    question: "Which protocol provides reliable data transmission?",
    options: [
        "UDP",
        "TCP",
        "IP",
        "ARP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "TCP is a connection-oriented and reliable protocol."
},

{
    question: "Which protocol is connectionless?",
    options: [
        "TCP",
        "UDP",
        "HTTP",
        "FTP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "UDP is connectionless and does not guarantee delivery."
},

{
    question: "Which command is used to test network connectivity?",
    options: [
        "ping",
        "ipconfig",
        "netstat",
        "route"
    ],
    answer: 0,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "The ping command checks whether a host is reachable."
},

{
    question: "Which command displays the IP configuration in Windows?",
    options: [
        "ping",
        "ifconfig",
        "ipconfig",
        "tracert"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "ipconfig displays the network configuration in Windows."
},

{
    question: "Which command traces the route packets take to a destination?",
    options: [
        "ping",
        "tracert",
        "route",
        "arp"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "tracert shows the path taken by packets."
},

{
    question: "What is the default port number for HTTP?",
    options: [
        "21",
        "25",
        "80",
        "443"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "HTTP uses port 80 by default."
},

{
    question: "What is the default port number for HTTPS?",
    options: [
        "80",
        "21",
        "443",
        "25"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "HTTPS uses port 443."
},

{
    question: "Which topology connects every device to every other device?",
    options: [
        "Star",
        "Ring",
        "Bus",
        "Mesh"
    ],
    answer: 3,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "Mesh topology provides direct connections between all devices."
},

{
    question: "Which topology uses a central hub or switch?",
    options: [
        "Ring",
        "Star",
        "Bus",
        "Tree"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "Star topology connects all devices through a central device."
},

{
    question: "Which protocol resolves an IP address into a MAC address?",
    options: [
        "DNS",
        "ARP",
        "DHCP",
        "FTP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "ARP maps an IP address to a MAC address."
},

{
    question: "Which device regenerates network signals?",
    options: [
        "Router",
        "Switch",
        "Repeater",
        "Gateway"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "A repeater regenerates weak network signals."
},

{
    question: "Which protocol is used for secure remote login?",
    options: [
        "FTP",
        "Telnet",
        "SSH",
        "SMTP"
    ],
    answer: 2,
    category: "Computer Networks",
    difficulty: "Easy",
    explanation: "SSH provides encrypted remote login."
},

{
    question: "Which protocol is commonly used for video streaming because of low latency?",
    options: [
        "TCP",
        "UDP",
        "FTP",
        "HTTP"
    ],
    answer: 1,
    category: "Computer Networks",
    difficulty: "Medium",
    explanation: "UDP is preferred for streaming because it has lower overhead."
},
];

module.exports = cnQuestions;