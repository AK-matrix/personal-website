const siteData = {
    name: "Arnav Kamath",
    bio: "Computer Science undergraduate at the National University of Singapore, specializing in AI and Algorithms. Incoming Exchange Student at Georgia Tech.\n\nI work on software systems that combine algorithms, constraints, and real world decision making. My main interests are AI systems, optimization, and building tools that remain correct and explainable under real usage.",
    interests: [
        "Geopolitics and global affairs",
        "Traveling and exploring new places",
        "Cycling as a way to relax and explore the city",
        "Investing and financial markets",
        "Close up magic",
        "Gaming"
    ],
    achievements: [
        "Top Student award for CS2040S Data Structures and Algorithms",
        "Two time Dean’s List recipient",
        "All India Rank 2 in Class 12",
        "Managed a personal mutual fund portfolio starting at age 15"
    ],
    experience: [
        {
            company: "Developer Group @ NUS Computing",
            role: "Head of Technology",
            period: "Jul 2025 - Present",
            description: "Led a team of developers to build production-grade web and internal tools for student-led technical initiatives. Shipped features iteratively based on cross-team feedback, with emphasis on code quality and reliability."
        },
        {
            company: "National University of Singapore",
            role: "CS2040S Teaching Assistant",
            period: "Jan 2026 - Present",
            description: "CS2040S (Data Structures & Algorithms): Taught algorithm design, data structures, graph algorithms, dynamic programming, and complexity analysis. Led tutorials focused on algorithmic thinking, correctness, and trade-offs."
        },
        {
            company: "National University of Singapore",
            role: "CS1101S Teaching Assistant",
            period: "Aug 2025 - Present",
            description: "CS1101S (Programming Methodology I): Taught abstraction, recursion, and functional programming. Led problem-solving sessions on program reasoning and decomposition."
        },
        {
            company: "National University of Singapore Students' Union (NUSSU)",
            role: "Relations Executive",
            period: "Nov 2025 - Present",
            description: "Partnered with technology and multinational companies to deliver technical skill-development workshops for students."
        },
        {
            company: "KPMG",
            role: "AI/ML Intern",
            period: "Jun 2025 - Jul 2025",
            description: "Built AI-driven analytics solutions, including time-series forecasting models for revenue and viewership prediction at a leading media company. Designed end-to-end ML pipelines and data models, and communicated results to non-technical business stakeholders. Developed NLP-based chatbot interfaces integrated with SAP Analytics Cloud for decision support."
        }
    ],
    social: {
        github: "https://github.com/AK-matrix",
        linkedin: "https://linkedin.com/in/arnav-kamath-011913266",
        email: "arnav.kamath.tech@gmail.com"
    },
    projects: [
        {
            id: "modulus-ai",
            title: "ModulusAI",
            summary: "AI powered academic planning system using constraint solving.",
            description: "An AI powered academic planning system that generates valid multi year degree plans under real university constraints.",
            stack: "OR-Tools, Python, React",
            tags: ["Constraint Solving", "AI"],
            caseStudy: `The core challenge was not recommendation quality, but correctness. Degree planning involves prerequisite chains, workload limits, timetable clashes, and program specific rules that interact across semesters. A small local change can invalidate an entire four year plan.

I designed the backend as a constraint solving system using OR Tools, modeling degree requirements as hard constraints and preferences as soft objectives. The planner maintains global consistency while still allowing users to make local edits such as swapping modules or shifting semesters.

On top of the solver, I built an AI layer that explains why certain plans are valid or invalid and suggests alternatives when constraints are violated. A key focus was ensuring explanations were grounded in the actual constraint logic rather than generic language model output.

On the frontend, I worked extensively on state consistency across multi semester edits, immediate feedback for invalid actions, and clear visualizations for long term planning. Much of the complexity lies in synchronizing solver outputs with interactive UI changes in real time.`,
            github: "#"
        },
        {
            id: "flux",
            title: "Flux",
            summary: "Dark, modern, NUS-only social matching app.",
            description: "A dark, modern, NUS-only social matching app to get students meeting in minutes/hours. Built with Next.js, TypeScript, and Prisma.",
            stack: "Next.js, TypeScript, AI",
            tags: ["Social Graph", "AI"],
            caseStudy: `A dark, modern, NUS-only social matching app to get students meeting in minutes/hours. Built with Next.js, TypeScript, and Prisma.

Features:
- Dark Modern UI: Glassmorphism design with custom design tokens.
- NUS-Only Access: Email verification with NUS domain preference.
- Anonymous Posting: Optional anonymous mode with generated codes.
- Ephemeral Communities: Self-disappearing group threads.
- Trending Algorithm: Server-side scoring for content discovery.
- Credit Score System: Trust metrics and reporting system.
- Real-time Updates: Framer Motion animations and micro-interactions.

**Unique Edge**: The core matching engine uses Graph Algorithms and AI to connect users based on shared interests and proximity, creating a "live social graph" of the campus.`,
            github: "#"
        },
        {
            id: "psa-report",
            title: "PSA Report Efficiency",
            summary: "Analyzing port operations logs to detect incidents faster.",
            description: "A system that analyzes complex port operation logs to help teams identify and resolve incidents closer to real-time.",
            stack: "LangGraph, RAG, Docker",
            tags: ["Multi-Agent", "Enterprise AI"],
            caseStudy: `Port operations generate massive amounts of log data, making it difficult for human operators to spot incidents immediately. The goal was to build a system that could read these logs and flag issues automatically.

I built a retrieval-augmented generation (RAG) pipeline using LangGraph to orchestrate different 'agents'. One agent scans the logs for errors, another checks historical data to see if this has happened before, and a third drafts a summary for the human operator.

We used a hybrid search approach—combining keyword matching with semantic search—to make sure we didn't miss specific error codes while still catching broader context. The system wraps everything in Docker for easy deployment and sends automated email alerts when high-priority incidents are detected.`,
            github: "#"
        },
        {
            id: "diagnostic-agent",
            title: "Medical Diagnostic Agent",
            summary: "Structured reasoning agent for medical decision support.",
            description: "An AI agent designed to assist with diagnostic reasoning by mapping patient reports and test results to possible conditions and next step recommendations.",
            stack: "AI Agents, Knowledge Graphs",
            tags: ["Decision Support", "Healthcare"],
            caseStudy: `Rather than treating diagnosis as a pure text generation task, I approached it as a structured reasoning problem. Inputs are normalized into representations that separate symptoms, measurements, and observations.

The agent reasons over this structure using a combination of learned representations and rule based medical logic. Outputs include possible conditions, confidence signals, and recommended follow up tests, each accompanied by traceable explanations.

A major focus of this project was explainability and auditability. Every recommendation is grounded in specific inputs or medical rules, enabling human review and downstream validation.`,
            github: "#"
        }
    ]
};
