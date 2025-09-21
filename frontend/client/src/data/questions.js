export const questions = [
  {
    "question": "Which hashing algorithm is considered broken due to collision vulnerabilities?",
    "options": ["SHA-256", "SHA-1", "MD5", "SHA-3"],
    "answer": "SHA-1"
  },
  {
    "question": "Which Linux file shows system startup messages?",
    "options": ["/var/log/syslog", "/etc/hosts", "/var/log/shadow", "/etc/init.d"],
    "answer": "/var/log/syslog"
  },
  {
    "question": "What is the default port for DNS?",
    "options": ["80", "25", "53", "443"],
    "answer": "53"
  },
  {
    "question": "Which Nmap option enables aggressive timing without stealth?",
    "options": ["-T1", "-T2", "-T4", "-T0"],
    "answer": "-T4"
  },
  {
    "question": "In Linux, what does the grep -i option do?",
    "options": ["Count matches", "Case-insensitive search", "Invert match", "Show line numbers"],
    "answer": "Case-insensitive search"
  },
  {
    "question": "Which tool is commonly used for password brute forcing network services?",
    "options": ["Hydra", "Netcat", "Wireshark", "Nmap"],
    "answer": "Hydra"
  },
  {
    "question": "Which attack is mitigated by enabling 802.1X port-based authentication?",
    "options": ["SQL Injection", "Man-in-the-Middle", "ARP Spoofing", "Buffer Overflow"],
    "answer": "Man-in-the-Middle"
  },
  {
    "question": "Which Linux command checks current disk partitions?",
    "options": ["df -h", "lsblk", "fdisk -h", "mount"],
    "answer": "lsblk"
  },
  {
    "question": "Which port does HTTPS use by default?",
    "options": ["22", "80", "443", "8080"],
    "answer": "443"
  },
  {
    "question": "What does scp do in Linux?",
    "options": ["Securely copy files between systems", "Scan ports", "Change file permissions", "Compress files"],
    "answer": "Securely copy files between systems"
  },
  {
    "question": "Which type of firewall inspects traffic at the application layer?",
    "options": ["Packet-filter firewall", "Proxy firewall", "Circuit-level gateway", "Stateless firewall"],
    "answer": "Proxy firewall"
  },
  {
    "question": "Which tool is used for directory brute-forcing on websites?",
    "options": ["Gobuster", "Wireshark", "Hydra", "Nikto"],
    "answer": "Gobuster"
  },
  {
    "question": "Which Linux command shows memory usage?",
    "options": ["free -m", "ls -lh", "ps aux", "du -h"],
    "answer": "free -m"
  },
  {
    "question": "Which vulnerability allows attackers to inject malicious SQL queries?",
    "options": ["Command Injection", "Cross-Site Scripting", "SQL Injection", "Path Traversal"],
    "answer": "SQL Injection"
  },
  {
    "question": "Which protocol does Ping use?",
    "options": ["TCP", "ICMP", "UDP", "ARP"],
    "answer": "ICMP"
  },
  {
    "question": "What does the Metasploit exploit/multi/handler module do?",
    "options": ["Creates phishing pages", "Listens for reverse shells", "Cracks passwords", "Scans open ports"],
    "answer": "Listens for reverse shells"
  },
  {
    "question": "Which Linux command shows currently logged-in users?",
    "options": ["who", "id", "ps", "uname"],
    "answer": "who"
  },
  {
    "question": "Which tool is used for wireless network packet sniffing?",
    "options": ["Aircrack-ng", "Hydra", "Nikto", "Gobuster"],
    "answer": "Aircrack-ng"
  },
  {
    "question": "What is the purpose of OSINT in reconnaissance?",
    "options": ["Exploiting firewalls", "Gathering public information", "Cracking passwords", "Deploying persistence"],
    "answer": "Gathering public information"
  },
  {
    "question": "Which vulnerability occurs when user input is executed as code?",
    "options": ["Path Traversal", "Command Injection", "XSS", "CSRF"],
    "answer": "Command Injection"
  },
  {
    "question": "What does the Linux chmod 644 file command do?",
    "options": ["Owner full, group/others read-only", "Full access to everyone", "Owner read-only", "Hidden file"],
    "answer": "Owner full, group/others read-only"
  },
  {
    "question": "Which Nmap scan type is used for UDP services?",
    "options": ["-sS", "-sT", "-sU", "-sA"],
    "answer": "-sU"
  },
  {
    "question": "Which protocol is commonly exploited in DNS cache poisoning?",
    "options": ["TCP", "UDP", "ICMP", "ARP"],
    "answer": "UDP"
  },
  {
    "question": "Which Linux command shows system uptime?",
    "options": ["date", "uptime", "who", "last"],
    "answer": "uptime"
  },
  {
    "question": "Which cryptographic concept ensures that data is not modified?",
    "options": ["Confidentiality", "Integrity", "Availability", "Authentication"],
    "answer": "Integrity"
  },
  {
    "question": "Which port is used by SMTP?",
    "options": ["25", "21", "22", "110"],
    "answer": "25"
  },
  {
    "question": "Which Linux command kills a process by PID?",
    "options": ["kill -9 PID", "stop PID", "end PID", "ps -k"],
    "answer": "kill -9 PID"
  },
  {
    "question": "Which vulnerability allows injecting malicious scripts into web pages?",
    "options": ["SQL Injection", "XSS", "CSRF", "RCE"],
    "answer": "XSS"
  },
  {
    "question": "Which tool is used to brute-force SSH login?",
    "options": ["Hydra", "Nmap", "Wireshark", "Gobuster"],
    "answer": "Hydra"
  },
  {
    "question": "Which Linux command extracts archive.tar.gz?",
    "options": ["tar -xvzf archive.tar.gz", "unzip archive.tar.gz", "gzip -d archive.tar.gz", "extract archive.tar.gz"],
    "answer": "tar -xvzf archive.tar.gz"
  },
  {
    "question": "Which port does FTP use by default?",
    "options": ["20/21", "22", "25", "110"],
    "answer": "20/21"
  },
  {
    "question": "Which attack involves session hijacking by stealing cookies?",
    "options": ["SQL Injection", "XSS", "DoS", "ARP Spoofing"],
    "answer": "XSS"
  },
  {
    "question": "Which Linux command displays CPU info?",
    "options": ["lscpu", "free -m", "uname -a", "top"],
    "answer": "lscpu"
  },
  {
    "question": "Which encryption mode is vulnerable due to pattern leaks?",
    "options": ["CBC", "ECB", "GCM", "CTR"],
    "answer": "ECB"
  },
  {
    "question": "Which command in Nmap enables traceroute?",
    "options": ["--traceroute", "-R", "-T", "-O"],
    "answer": "--traceroute"
  },
  {
    "question": "Which protocol does SNMP use?",
    "options": ["TCP", "UDP", "ICMP", "ARP"],
    "answer": "UDP"
  },
  {
    "question": "Which Linux command shows system kernel version?",
    "options": ["uname -r", "lsb_release -a", "cat /proc/version", "hostname"],
    "answer": "uname -r"
  },
  {
    "question": "Which malware type encrypts files and demands ransom?",
    "options": ["Worm", "Trojan", "Ransomware", "Rootkit"],
    "answer": "Ransomware"
  },
  {
    "question": "Which attack exploits weak input validation in file uploads?",
    "options": ["Path Traversal", "File Upload Vulnerability", "CSRF", "XSS"],
    "answer": "File Upload Vulnerability"
  },
  {
    "question": "Which Linux command shows open ports and listening services?",
    "options": ["netstat -tuln", "ps -ef", "ifconfig", "route -n"],
    "answer": "netstat -tuln"
  },
  {
    "question": "Which attack is mitigated by HTTPS with TLS?",
    "options": ["ARP Poisoning", "Man-in-the-Middle", "SQL Injection", "XSS"],
    "answer": "Man-in-the-Middle"
  },
  {
    "question": "Which protocol is used by Ping of Death attack?",
    "options": ["TCP", "ICMP", "UDP", "ARP"],
    "answer": "ICMP"
  },
  {
    "question": "Which tool is best for subdomain enumeration?",
    "options": ["Sublist3r", "Gobuster", "Nmap", "Hydra"],
    "answer": "Sublist3r"
  },
  {
    "question": "Which Linux command displays user’s group memberships?",
    "options": ["groups", "whoami", "id", "uname"],
    "answer": "groups"
  },
  {
    "question": "Which Nmap option performs a TCP ACK scan?",
    "options": ["-sS", "-sT", "-sA", "-sF"],
    "answer": "-sA"
  },
  {
    "question": "Which protocol is targeted in ARP spoofing?",
    "options": ["Layer 3", "Layer 2", "Layer 4", "Layer 7"],
    "answer": "Layer 2"
  },
  {
    "question": "Which Linux command appends output to a file?",
    "options": [">", ">>", "|", "&"],
    "answer": ">>"
  },
  {
    "question": "Which type of malware hides itself inside legitimate processes?",
    "options": ["Worm", "Rootkit", "Trojan", "Virus"],
    "answer": "Rootkit"
  },
  {
    "question": "Which Nmap option increases verbosity of output?",
    "options": ["-v", "-A", "-O", "-sV"],
    "answer": "-v"
  },
  {
    "question": "Which security measure blocks email spoofing by validating sending IPs?",
    "options": ["SPF", "SSL", "TLS", "HTTPS"],
    "answer": "SPF"
  }
]

