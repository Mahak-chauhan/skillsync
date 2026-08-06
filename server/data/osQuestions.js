const osQuestions = [

{
    question: "What does OS stand for?",
    options: [
        "Operating System",
        "Open Software",
        "Operating Software",
        "Online System"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "OS stands for Operating System."
},

{
    question: "Which of the following is an Operating System?",
    options: [
        "Linux",
        "Oracle",
        "Python",
        "HTML"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "Linux is an Operating System."
},

{
    question: "Which OS is open source?",
    options: [
        "Windows",
        "Linux",
        "macOS",
        "DOS"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "Linux is an open-source operating system."
},

{
    question: "Which scheduling algorithm follows First Come First Serve?",
    options: [
        "FCFS",
        "Round Robin",
        "SJF",
        "Priority"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "FCFS executes processes in arrival order."
},

{
    question: "Which scheduling algorithm gives every process equal CPU time?",
    options: [
        "Priority",
        "Round Robin",
        "FCFS",
        "SJF"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Round Robin uses time slices for fair scheduling."
},

{
    question: "Which scheduling algorithm has the shortest burst time first?",
    options: [
        "Priority",
        "FCFS",
        "Round Robin",
        "SJF"
    ],
    answer: 3,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Shortest Job First executes the process with the smallest burst time."
},

{
    question: "Which memory is volatile?",
    options: [
        "ROM",
        "SSD",
        "RAM",
        "Hard Disk"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "RAM loses its contents when power is turned off."
},

{
    question: "Which memory is non-volatile?",
    options: [
        "RAM",
        "Cache",
        "ROM",
        "Register"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "ROM retains its contents even after power is removed."
},

{
    question: "What is the main function of an Operating System?",
    options: [
        "Compile Programs",
        "Manage Hardware and Software",
        "Design Websites",
        "Create Databases"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "The OS manages computer resources and provides services."
},

{
    question: "Which memory is the fastest?",
    options: [
        "RAM",
        "Cache",
        "Hard Disk",
        "ROM"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Cache memory is faster than RAM."
},

{
    question: "Which memory is directly accessed by CPU?",
    options: [
        "RAM",
        "Hard Disk",
        "DVD",
        "USB"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "CPU directly accesses RAM for execution."
},

{
    question: "What is Deadlock?",
    options: [
        "Fast execution",
        "CPU Failure",
        "Processes waiting forever",
        "Memory leak"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Deadlock occurs when processes wait indefinitely for each other."
},

{
    question: "Which condition is NOT required for Deadlock?",
    options: [
        "Mutual Exclusion",
        "Hold and Wait",
        "Preemption",
        "Circular Wait"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Hard",
    explanation: "No Preemption is a condition, not Preemption."
},

{
    question: "Which memory management technique uses pages?",
    options: [
        "Segmentation",
        "Paging",
        "Swapping",
        "Fragmentation"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Paging divides memory into fixed-size pages."
},

{
    question: "Which memory management technique uses variable-size blocks?",
    options: [
        "Paging",
        "Segmentation",
        "Swapping",
        "Caching"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Segmentation divides memory into logical variable-sized segments."
},

{
    question: "Which component manages files?",
    options: [
        "CPU",
        "File System",
        "Compiler",
        "Shell"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "The file system organizes and manages files."
},

{
    question: "Which command lists files in Linux?",
    options: [
        "dir",
        "ls",
        "show",
        "list"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "ls displays files and directories."
},

{
    question: "Which command changes directory in Linux?",
    options: [
        "move",
        "goto",
        "cd",
        "dir"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "cd changes the current working directory."
},

{
    question: "Which Linux command creates a directory?",
    options: [
        "mkdir",
        "newdir",
        "create",
        "folder"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "mkdir creates a new directory."
},

{
    question: "Which Linux command removes a directory?",
    options: [
        "rmdir",
        "removedir",
        "delete",
        "erase"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "rmdir removes an empty directory."
},
{
    question: "Which scheduling algorithm may cause starvation?",
    options: [
        "FCFS",
        "Round Robin",
        "Priority Scheduling",
        "FIFO"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Low-priority processes may wait indefinitely in Priority Scheduling."
},

{
    question: "Which scheduling algorithm uses a time quantum?",
    options: [
        "FCFS",
        "SJF",
        "Round Robin",
        "Priority"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "Round Robin assigns a fixed time quantum to each process."
},

{
    question: "Which memory allocation suffers from external fragmentation?",
    options: [
        "Paging",
        "Segmentation",
        "Virtual Memory",
        "Cache"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Segmentation uses variable-sized memory blocks, leading to external fragmentation."
},

{
    question: "Which memory allocation eliminates external fragmentation?",
    options: [
        "Segmentation",
        "Paging",
        "Swapping",
        "Partitioning"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Paging divides memory into fixed-size pages."
},

{
    question: "Which memory is used when RAM becomes full?",
    options: [
        "Cache",
        "Virtual Memory",
        "ROM",
        "Registers"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "Virtual Memory extends RAM using disk space."
},

{
    question: "Which algorithm is commonly used for page replacement?",
    options: [
        "FIFO",
        "LRU",
        "Optimal",
        "All of the above"
    ],
    answer: 3,
    category: "Operating System",
    difficulty: "Hard",
    explanation: "FIFO, LRU, and Optimal are all page replacement algorithms."
},

{
    question: "What is Thrashing?",
    options: [
        "Fast CPU execution",
        "Excessive paging",
        "Disk formatting",
        "Process creation"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Hard",
    explanation: "Thrashing occurs when excessive paging reduces system performance."
},

{
    question: "Which component interprets user commands?",
    options: [
        "Kernel",
        "Shell",
        "Compiler",
        "Loader"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "The shell acts as an interface between the user and the operating system."
},

{
    question: "Which is the core of an Operating System?",
    options: [
        "Kernel",
        "Shell",
        "BIOS",
        "Compiler"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "The Kernel is the core component of an Operating System."
},

{
    question: "Which system call creates a new process in Linux?",
    options: [
        "exec()",
        "fork()",
        "spawn()",
        "clone()"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Hard",
    explanation: "fork() creates a new child process."
},

{
    question: "Which system call replaces the current process image?",
    options: [
        "fork()",
        "exec()",
        "wait()",
        "exit()"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Hard",
    explanation: "exec() replaces the current process with a new program."
},

{
    question: "Which system call waits for a child process to finish?",
    options: [
        "sleep()",
        "wait()",
        "join()",
        "pause()"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "wait() pauses the parent process until the child completes."
},

{
    question: "Which state is a process in while waiting for CPU?",
    options: [
        "Running",
        "Ready",
        "Blocked",
        "Terminated"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "A process in the Ready state is waiting to be assigned the CPU."
},

{
    question: "Which state is a process in while waiting for I/O?",
    options: [
        "Running",
        "Blocked",
        "Ready",
        "New"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "Processes waiting for I/O are in the Blocked state."
},

{
    question: "Which technique allows multiple processes to run seemingly at the same time?",
    options: [
        "Multiprogramming",
        "Paging",
        "Spooling",
        "Fragmentation"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Multiprogramming keeps multiple processes in memory to maximize CPU utilization."
},

{
    question: "Which OS allows multiple users simultaneously?",
    options: [
        "Single-user OS",
        "Multi-user OS",
        "Embedded OS",
        "Batch OS"
    ],
    answer: 1,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "A multi-user OS supports multiple users at the same time."
},

{
    question: "Which OS guarantees task completion within a fixed time?",
    options: [
        "Batch OS",
        "Time-sharing OS",
        "Real-Time OS",
        "Distributed OS"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Real-Time Operating Systems provide predictable response times."
},

{
    question: "Which OS is commonly used in ATMs and embedded devices?",
    options: [
        "Real-Time OS",
        "Batch OS",
        "Network OS",
        "Desktop OS"
    ],
    answer: 0,
    category: "Operating System",
    difficulty: "Medium",
    explanation: "Real-Time Operating Systems are widely used in embedded systems."
},

{
    question: "Which process state comes immediately after process creation?",
    options: [
        "Ready",
        "Running",
        "New",
        "Blocked"
    ],
    answer: 2,
    category: "Operating System",
    difficulty: "Easy",
    explanation: "A newly created process enters the New state."
},

{
    question: "Which scheduling algorithm provides the minimum average waiting time (ideal case)?",
    options: [
        "FCFS",
        "Round Robin",
        "Priority",
        "Shortest Job First"
    ],
    answer: 3,
    category: "Operating System",
    difficulty: "Hard",
    explanation: "Shortest Job First minimizes average waiting time when burst times are known."
},
];
module.exports = osQuestions;