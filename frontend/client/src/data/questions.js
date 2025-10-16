export const questions = [
  {
    question: "Which layer of the OSI model is responsible for logical addressing and routing?",
    options: ["Physical", "Network", "Transport", "Data Link"],
    answer: "Network"
  },
  {
    question: "Which network topology connects every node to a single central node?",
    options: ["Ring", "Mesh", "Star", "Bus"],
    answer: "Star"
  },
  {
    question: "Which OSI layer is responsible for end-to-end communication and reliability?",
    options: ["Transport", "Network", "Session", "Application"],
    answer: "Transport"
  },
  {
    question: "In the TCP three-way handshake, the sequence is:",
    options: ["SYN, SYN-ACK, ACK", "SYN-ACK, SYN, ACK", "ACK, SYN, SYN-ACK", "SYN, ACK, FIN"],
    answer: "SYN, SYN-ACK, ACK"
  },
  {
    question: "Which IP address class has default subnet mask 255.0.0.0?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: "Class A"
  },
  {
    question: "Which port number is standard for HTTPS?",
    options: ["20", "80", "443", "22"],
    answer: "443"
  },
  {
    question: "Which protocol is connectionless and best-effort delivery?",
    options: ["TCP", "UDP", "HTTP", "SSH"],
    answer: "UDP"
  },
  {
    question: "Which component translates domain names to IP addresses?",
    options: ["DHCP server", "DNS server", "Router", "Proxy"],
    answer: "DNS server"
  },
  {
    question: "Which protocol is used by routers to exchange routing information dynamically?",
    options: ["DNS", "RIP", "SMTP", "FTP"],
    answer: "RIP"
  },
  {
    question: "Which topology provides redundant paths and is most fault-tolerant?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    answer: "Mesh"
  },
  {
    question: "In the CIA triad, what does 'I' stand for?",
    options: ["Identification", "Integrity", "Isolation", "Inspection"],
    answer: "Integrity"
  },
  {
    question: "Which phase of ethical hacking generally comes first?",
    options: ["Exploitation", "Reconnaissance (Footprinting)", "Privilege Escalation", "Reporting"],
    answer: "Reconnaissance (Footprinting)"
  },
  {
    question: "What is the main goal of a Red Team?",
    options: ["Build patches", "Defend systems in real time", "Emulate attackers and test defenses", "Monitor network logs"],
    answer: "Emulate attackers and test defenses"
  },
  {
    question: "Which step is NOT part of the Cyber Kill Chain?",
    options: ["Reconnaissance", "Weaponization", "Containment", "Command & Control"],
    answer: "Containment"
  },
  {
    question: "Purple Team typically means:",
    options: ["Only attackers", "Only defenders", "Collaboration between Red and Blue teams", "Legal compliance team"],
    answer: "Collaboration between Red and Blue teams"
  },
  {
    question: "Which cybersecurity domain focuses on preventing unauthorized data disclosure?",
    options: ["Availability", "Integrity", "Confidentiality", "Usability"],
    answer: "Confidentiality"
  },
  {
    question: "Which of the following is an ethical rule for penetration testers?",
    options: ["Testing production without permission", "Using obtained credentials for other work", "Having explicit written authorization before testing", "Publishing client data after testing"],
    answer: "Having explicit written authorization before testing"
  },
  {
    question: "Which one of these is NOT a domain in cybersecurity?",
    options: ["Network Security", "Application Security", "Physical Security", "Data Cooking"],
    answer: "Data Cooking"
  },
  {
    question: "Which phase produces the final remediation/report in ethical hacking?",
    options: ["Scanning", "Exploitation", "Reporting", "Enumeration"],
    answer: "Reporting"
  },
  {
    question: "Which team handles incident response and defense?",
    options: ["Red Team", "Blue Team", "Grey Team", "Purple Team"],
    answer: "Blue Team"
  },
  {
    question: "In Linux, what permission bits does `rwxr-xr--` give the group?",
    options: ["Read, write, execute", "Read, execute", "Read only", "Execute only"],
    answer: "Read, execute"
  },
  {
    question: "What command shows current directory contents with detailed info in Linux?",
    options: ["pwd", "ls -l", "cd", "chmod"],
    answer: "ls -l"
  },
  {
    question: "Where is the root user's home directory typically located?",
    options: ["/home/root", "/root", "/usr/root", "/etc/root"],
    answer: "/root"
  },
  {
    question: "What does `chmod 644 file.txt` set for owner/group/others?",
    options: ["Owner read/write, group read, others read", "Owner read-only, group read-only, others read-only", "Owner full, group full, others full", "Owner execute, group execute, others execute"],
    answer: "Owner read/write, group read, others read"
  },
  {
    question: "Which Linux command is used to change ownership of a file?",
    options: ["chmod", "chown", "mv", "cp"],
    answer: "chown"
  },
  {
    question: "Which activity is passive reconnaissance?",
    options: ["Scanning open ports with Nmap directly against target", "Reading publicly available WHOIS and DNS records", "Attempting SQL injection on target forms", "Brute-forcing SSH"],
    answer: "Reading publicly available WHOIS and DNS records"
  },
  {
    question: "WHOIS lookup provides information about:",
    options: ["Running services on the machine", "Domain registration and registrant contact details", "User passwords", "Open ports"],
    answer: "Domain registration and registrant contact details"
  },
  {
    question: "Which tool is commonly used for DNS and network reconnaissance?",
    options: ["Nmap", "dig", "Metasploit", "John the Ripper"],
    answer: "dig"
  },
  {
    question: "Social engineering reconnaissance aimed at a person often starts with:",
    options: ["Scanning ports", "Collecting publicly available social media info", "Malware deployment", "Cryptanalysis"],
    answer: "Collecting publicly available social media info"
  },
  {
    question: "Which technique helps discover subdomains of a target domain?",
    options: ["Port forwarding", "Subdomain enumeration (DNS brute-force)", "File permission change", "Packet sniffing"],
    answer: "Subdomain enumeration (DNS brute-force)"
  },
  {
    question: "Port 22 is commonly used by which service?",
    options: ["FTP", "SSH", "HTTP", "SMTP"],
    answer: "SSH"
  },
  {
    question: "Which Nmap switch is used for service version detection?",
    options: ["-sV", "-O", "-A", "-Pn"],
    answer: "-sV"
  },
  {
    question: "Nmap’s `-sU` option runs which type of scan?",
    options: ["TCP SYN scan", "UDP scan", "Version detection", "OS detection"],
    answer: "UDP scan"
  },
  {
    question: "Which protocol is used to transfer files in plain text (insecure) over port 21?",
    options: ["SFTP", "FTP", "FTPS", "SCP"],
    answer: "FTP"
  },
  {
    question: "Which port number is used by Telnet?",
    options: ["22", "23", "25", "110"],
    answer: "23"
  },
  {
    question: "What does a “ping” command primarily test?",
    options: ["Application availability", "Network connectivity and latency", "File permissions", "Firewall rules"],
    answer: "Network connectivity and latency"
  },
  {
    question: "Which command shows open network connections on Linux/Windows?",
    options: ["ping", "netstat", "chmod", "df"],
    answer: "netstat"
  },
  {
    question: "Which port is default for HTTP?",
    options: ["443", "21", "80", "25"],
    answer: "80"
  },
  {
    question: "What does the `-O` flag in Nmap do?",
    options: ["Perform OS detection", "Perform UDP scan", "Display only open ports", "Output XML format"],
    answer: "Perform OS detection"
  },
  {
    question: "What does SMB primarily allow?",
    options: ["File and printer sharing", "Email transfer", "VPN connections", "Remote desktop"],
    answer: "File and printer sharing"
  },
  {
    question: "Privilege escalation on a system means:",
    options: ["Dropping to guest account", "Gaining higher-level permissions (e.g., root/administrator)", "Changing network topology", "Removing files only"],
    answer: "Gaining higher-level permissions (e.g., root/administrator)"
  },
  {
    question: "Which tool is widely used for post-exploitation and maintaining access on Windows?",
    options: ["netstat", "Metasploit (Meterpreter)", "dig", "nslookup"],
    answer: "Metasploit (Meterpreter)"
  },
  {
    question: "A common way to maintain persistent access on a Linux server is to:",
    options: ["Change directory names", "Add a cron job or authorized SSH key for a backdoor account", "Reboot the server daily", "Disable SSH"],
    answer: "Add a cron job or authorized SSH key for a backdoor account"
  },
  {
    question: "Which command in Windows lists all user accounts?",
    options: ["net user", "ipconfig", "nslookup", "whoami"],
    answer: "net user"
  },
  {
    question: "What’s the main goal of an exploit?",
    options: ["Gain unauthorized access or control", "Encrypt files", "Stop network", "Patch system"],
    answer: "Gain unauthorized access or control"
  },
  {
    question: "Which OWASP Top 10 category involves improperly validated input that allows attacker-supplied scripts to run in victims’ browsers?",
    options: ["SQL Injection", "Broken Authentication", "Cross-Site Scripting (XSS)", "Security Misconfiguration"],
    answer: "Cross-Site Scripting (XSS)"
  },
  {
    question: "SQL Injection attacks target:",
    options: ["Client-side JavaScript execution only", "Server-side database queries when inputs are not sanitized", "Network switches", "DNS records"],
    answer: "Server-side database queries when inputs are not sanitized"
  },
  {
    question: "IDOR stands for:",
    options: ["Insecure Direct Object Reference", "Internal Domain Object Resource", "Internet Data Of Requests", "Indexed Data Object Retrieval"],
    answer: "Insecure Direct Object Reference"
  },
  {
    question: "Which mitigation helps prevent arbitrary file upload vulnerabilities?",
    options: ["Validating file type, storing uploads outside web root, and renaming files", "Disabling authentication", "Using HTTP instead of HTTPS", "Allowing all file types and storing them in web root"],
    answer: "Validating file type, storing uploads outside web root, and renaming files"
  },
  {
    question: "Account hijacking typically involves:",
    options: ["Finding open ports only", "Compromising user credentials or session tokens to impersonate users", "Changing topology of network", "Upgrading server OS"],
    answer: "Compromising user credentials or session tokens to impersonate users"
  }
];
