const skillsDatabase = {
    // ===== PROGRAMMING LANGUAGES =====
    "Programming Languages": {
        icon: "💻",
        description: "Master popular programming languages",
        skills: {
            "JavaScript": {
                difficulty: "Beginner",
                duration: "3-4 months",
                prerequisites: ["HTML", "CSS"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Variables & Data Types", "Control Flow", "Functions & Scope", "Arrays & Objects", "DOM Manipulation"], resources: ["MDN Web Docs", "JavaScript.info", "freeCodeCamp"], projects: ["Todo List", "Calculator", "Form Validation"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["ES6+ Features", "Promises & Async/Await", "Array Methods", "OOP Concepts", "Fetch API"], resources: ["Eloquent JavaScript", "JavaScript30", "You Don't Know JS"], projects: ["Weather App", "Movie Search", "Quiz App"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Closures & Prototypes", "Design Patterns", "Testing", "Performance", "TypeScript Intro"], resources: ["JS Design Patterns", "Testing JavaScript", "Web.dev"], projects: ["E-commerce Cart", "Chat App", "Chrome Extension"] }
                ],
                next_steps: ["TypeScript", "React", "Node.js"],
                career_paths: ["Frontend Developer", "Full Stack Developer"]
            },
            "Python": {
                difficulty: "Beginner",
                duration: "3-5 months",
                prerequisites: ["Basic Computer Knowledge"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Variables & Types", "Control Flow", "Functions", "Lists & Dicts", "File Handling"], resources: ["Python.org", "Automate Boring Stuff", "Codecademy"], projects: ["Guessing Game", "Password Generator", "File Organizer"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["OOP", "Exception Handling", "APIs", "Libraries (pandas, numpy)", "Databases"], resources: ["Python Crash Course", "Real Python", "Corey Schafer"], projects: ["Web Scraper", "Data Analysis", "API Consumer"] },
                    { phase: "Advanced", duration: "8 weeks", topics: ["Decorators", "Generators", "Threading", "Testing", "Package Distribution"], resources: ["Fluent Python", "Talk Python", "PyTest"], projects: ["CLI Tool", "Data Pipeline", "PyPI Package"] }
                ],
                next_steps: ["Django", "FastAPI", "Data Science", "ML"],
                career_paths: ["Backend Developer", "Data Scientist", "ML Engineer"]
            },
            "TypeScript": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["JavaScript (ES6+)"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["Setup", "Basic Types", "Interfaces", "Functions", "Enums"], resources: ["TS Handbook", "Total TypeScript"], projects: ["TS Todo App", "Form Validator"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["Generics", "Union Types", "Type Guards", "Classes", "Modules"], resources: ["TS Deep Dive", "Matt Pocock Tips"], projects: ["API Client", "React Components"] },
                    { phase: "Advanced", duration: "3 weeks", topics: ["Advanced Generics", "Utility Types", "Config Deep Dive"], resources: ["Effective TypeScript", "Type Challenges"], projects: ["Full-stack App", "NPM Library"] }
                ],
                next_steps: ["React + TS", "Next.js", "NestJS"],
                career_paths: ["Frontend Developer", "Full Stack Developer"]
            },
            "Go": {
                difficulty: "Intermediate",
                duration: "3-4 months",
                prerequisites: ["Programming Basics"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Variables & Types", "Functions", "Slices & Maps", "Structs", "Pointers"], resources: ["Tour of Go", "Go by Example", "Effective Go"], projects: ["CLI Todo", "HTTP Server"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["Goroutines", "Channels", "Interfaces", "Testing", "JSON", "REST APIs"], resources: ["Concurrency in Go", "Let's Go"], projects: ["Web Scraper", "REST API", "Chat Server"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Context", "gRPC", "Profiling", "Microservices"], resources: ["Ultimate Go", "GopherCon Talks"], projects: ["gRPC Services", "K8s Operator"] }
                ],
                next_steps: ["Kubernetes", "Docker", "Cloud Native"],
                career_paths: ["Backend Developer", "DevOps Engineer"]
            },
            "Rust": {
                difficulty: "Advanced",
                duration: "4-6 months",
                prerequisites: ["Programming Experience", "Memory Concepts"],
                path: [
                    { phase: "Foundation", duration: "6 weeks", topics: ["Ownership", "Borrowing", "Types", "Structs", "Enums", "Error Handling"], resources: ["The Rust Book", "Rustlings"], projects: ["Calculator CLI", "grep Clone"] },
                    { phase: "Intermediate", duration: "8 weeks", topics: ["Traits", "Generics", "Lifetimes", "Smart Pointers", "Concurrency"], resources: ["Programming Rust", "Jon Gjengset"], projects: ["Web Server", "JSON Parser"] },
                    { phase: "Advanced", duration: "8 weeks", topics: ["Async/Await", "Unsafe", "Macros", "FFI", "WebAssembly"], resources: ["Async Book", "Rustonomicon"], projects: ["Async API", "WASM Module"] }
                ],
                next_steps: ["Systems Programming", "WebAssembly"],
                career_paths: ["Systems Programmer", "Blockchain Developer"]
            },
            "Java": {
                difficulty: "Intermediate",
                duration: "4-6 months",
                prerequisites: ["Programming Basics"],
                path: [
                    { phase: "Foundation", duration: "6 weeks", topics: ["OOP Concepts", "Data Types", "Control Flow", "Methods", "Arrays"], resources: ["Oracle Docs", "Java Tutorial", "Codecademy"], projects: ["Banking App", "Student Management"] },
                    { phase: "Intermediate", duration: "8 weeks", topics: ["Collections", "Exceptions", "IO Streams", "JDBC", "Lambdas"], resources: ["Java SE Docs", "Baeldung"], projects: ["E-commerce Console", "Database App"] },
                    { phase: "Advanced", duration: "8 weeks", topics: ["Multithreading", "Spring Boot", "REST APIs", "Microservices"], resources: ["Spring Docs", "Java Brains"], projects: ["REST API", "Spring Boot App"] }
                ],
                next_steps: ["Spring", "Android", "Microservices"],
                career_paths: ["Backend Developer", "Android Developer"]
            },
            "C++": {
                difficulty: "Advanced",
                duration: "6-9 months",
                prerequisites: ["Programming Basics"],
                path: [
                    { phase: "Foundation", duration: "8 weeks", topics: ["Syntax", "Pointers", "Memory", "OOP", "STL"], resources: ["cplusplus.com", "LearnCpp"], projects: ["Game Engine", "Data Structures"] },
                    { phase: "Intermediate", duration: "10 weeks", topics: ["Templates", "Modern C++", "File IO", "Performance"], resources: ["Effective C++", "Modern C++"], projects: ["Image Processor", "Network Tool"] },
                    { phase: "Advanced", duration: "12 weeks", topics: ["Concurrency", "Design Patterns", "Systems Programming"], resources: ["C++ Concurrency", "CPP Core"], projects: ["Operating System", "Game Development"] }
                ],
                next_steps: ["Game Dev", "Systems Programming", "Unreal/Unity"],
                career_paths: ["Systems Programmer", "Game Developer", "Algo Engineer"]
            },
            "C#": {
                difficulty: "Intermediate",
                duration: "3-5 months",
                prerequisites: ["Programming Basics"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Syntax", "OOP", "Collections", "LINQ"], resources: ["Microsoft Docs", "C# Corner"], projects: ["Console App", "Windows Forms"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["ASP.NET Core", "Entity Framework", "Web API"], resources: ["ASP.NET Docs", "Pluralsight"], projects: ["Web API", "MVC App"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Microservices", "Blazor", "Azure"], resources: ["Microsoft Learn", ".NET Docs"], projects: ["Full-stack App", "Cloud Deployment"] }
                ],
                next_steps: [".NET", "Xamarin", "Azure"],
                career_paths: ["Backend Developer", "Game Developer (Unity)"]
            },
            "Ruby": {
                difficulty: "Beginner",
                duration: "3-4 months",
                prerequisites: ["Programming Basics"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Syntax", "OOP", "Blocks", "Modules"], resources: ["Ruby Docs", "Why's Poignant Guide"], projects: ["CLI Tool", "Basic App"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["Rails", "MVC", "ActiveRecord", "REST"], resources: ["Rails Guides", "GoRails"], projects: ["Blog App", "E-commerce"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Advanced Rails", "Performance", "API Design"], resources: ["Rails Performance", "Ruby Science"], projects: ["SaaS Platform", "API Service"] }
                ],
                next_steps: ["Rails", "Sinatra", "Full Stack"],
                career_paths: ["Backend Developer", "Full Stack Developer"]
            },
            "PHP": {
                difficulty: "Beginner",
                duration: "3-4 months",
                prerequisites: ["HTML", "CSS"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Syntax", "Arrays", "Functions", "Forms"], resources: ["PHP.net", "W3Schools"], projects: ["Contact Form", "Guestbook"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["OOP", "MySQL", "PDO", "Laravel Intro"], resources: ["Laravel Docs", "PHP Academy"], projects: ["CMS", "Blog System"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Laravel", "REST APIs", "Authentication"], resources: ["Laracasts", "Laravel Beyond"], projects: ["E-commerce", "API Platform"] }
                ],
                next_steps: ["Laravel", "WordPress", "Symfony"],
                career_paths: ["Backend Developer", "WordPress Developer"]
            },
            "Swift": {
                difficulty: "Intermediate",
                duration: "3-5 months",
                prerequisites: ["Programming Basics"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Syntax", "Optionals", "Structs", "Classes"], resources: ["Apple Docs", "Hacking with Swift"], projects: ["BMI Calculator", "Weather App"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["UIKit", "SwiftUI", "Networking", "Core Data"], resources: ["Swift Docs", "Ray Wenderlich"], projects: ["Todo App", "Social Feed"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Advanced SwiftUI", "Combine", "Testing", "App Store"], resources: ["Advanced iOS", "Objc.io"], projects: ["Published App", "Complex UI"] }
                ],
                next_steps: ["iOS Development", "SwiftUI", "Combine"],
                career_paths: ["iOS Developer", "Mobile Developer"]
            },
            "Kotlin": {
                difficulty: "Intermediate",
                duration: "3-4 months",
                prerequisites: ["Java Basics"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Syntax", "Null Safety", "Classes", "Extensions"], resources: ["Kotlin Docs", "Kotlinlang"], projects: ["Android App", "CLI Tool"] },
                    { phase: "Intermediate", duration: "5 weeks", topics: ["Coroutines", "Android Basics", "Jetpack Compose"], resources: ["Android Developers", "Jetbrains Academy"], projects: ["Weather App", "Note Taking"] },
                    { phase: "Advanced", duration: "5 weeks", topics: ["Advanced Coroutines", "Multiplatform", "Architecture"], resources: ["Kotlin Conf", "Resourceful"], projects: ["Production App", "Multiplatform Lib"] }
                ],
                next_steps: ["Android", "Kotlin Multiplatform", "Spring Boot"],
                career_paths: ["Android Developer", "Backend Developer"]
            }
        }
    },

    // ===== FRAMEWORKS & LIBRARIES =====
    "Frameworks & Libraries": {
        icon: "⚛️",
        description: "Learn powerful frameworks and libraries",
        skills: {
            "React": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["JavaScript (ES6+)", "HTML/CSS"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["JSX", "Components", "Props", "State", "Events", "Lists"], resources: ["React Docs", "Scrimba React"], projects: ["Counter", "Todo List", "Weather App"] },
                    { phase: "Intermediate", duration: "5 weeks", topics: ["useEffect", "Custom Hooks", "Context", "Router", "Forms", "HTTP"], resources: ["Epic React", "useHooks.com"], projects: ["Movie DB", "Dashboard"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Redux/Zustand", "Testing", "TypeScript", "Performance", "Accessibility"], resources: ["Testing Library", "React TS Cheatsheet"], projects: ["Social App", "Admin Panel"] }
                ],
                next_steps: ["Next.js", "React Native", "GraphQL"],
                career_paths: ["Frontend Developer", "React Developer"]
            },
            "Vue.js": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["JavaScript", "HTML/CSS"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["Vue 3", "Composition API", "Components", "Reactivity"], resources: ["Vue Docs", "Vue Mastery"], projects: ["Todo App", "Counter"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["Vue Router", "Pinia", "Axios", "Composables"], resources: ["Vue School", "Vuetify"], projects: ["SPA", "Dashboard"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["SSR (Nuxt)", "Testing", "Performance", "TypeScript"], resources: ["Nuxt Docs", "Advanced Vue"], projects: ["Production App", "SSR Website"] }
                ],
                next_steps: ["Nuxt.js", "Vue Native", "Pinia"],
                career_paths: ["Frontend Developer", "Vue Developer"]
            },
            "Angular": {
                difficulty: "Intermediate",
                duration: "3-4 months",
                prerequisites: ["JavaScript", "TypeScript", "HTML/CSS"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Components", "Templates", "Modules", "Services"], resources: ["Angular Docs", "Angular.io"], projects: ["Todo App", "Blog"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["RxJS", "Routing", "Forms", "HTTP", "State"], resources: ["RxJS Docs", "Ultimate Angular"], projects: ["E-commerce", "Dashboard"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["SSR (Angular Universal)", "Testing", "Performance", "NGRX"], resources: ["NgRx Docs", "Angular Advanced"], projects: ["Enterprise App", "PWA"] }
                ],
                next_steps: ["Nx", "Angular Universal", "NativeScript"],
                career_paths: ["Frontend Developer", "Angular Developer"]
            },
            "Django": {
                difficulty: "Intermediate",
                duration: "3-4 months",
                prerequisites: ["Python", "HTML/CSS", "SQL Basics"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["MVT", "URLs", "Views", "Templates", "Models", "Admin"], resources: ["Django Tutorial", "Django for Beginners"], projects: ["Blog", "Todo App"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["CBVs", "Forms", "Auth", "ORM Advanced", "Middleware"], resources: ["Two Scoops", "Simple Better Complex"], projects: ["E-commerce", "Social Platform"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["DRF", "JWT", "Testing", "Celery", "Channels", "Deployment"], resources: ["DRF Docs", "TDD with Django"], projects: ["REST API", "Real-time Chat"] }
                ],
                next_steps: ["FastAPI", "Docker", "AWS"],
                career_paths: ["Backend Developer", "Python Developer"]
            },
            "Spring Boot": {
                difficulty: "Intermediate",
                duration: "3-5 months",
                prerequisites: ["Java", "OOP"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Setup", "Annotations", "REST", "JPA", "Security"], resources: ["Spring Docs", "Baeldung"], projects: ["REST API", "CRUD App"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["Microservices", "JWT", "Testing", "Actuator"], resources: ["Microservices Docs", "Spring In Action"], projects: ["E-commerce Backend", "User Management"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Cloud Native", "Kubernetes", "Reactive", "Observability"], resources: ["Spring Cloud", "Cloud Native Java"], projects: ["Microservices", "Cloud Deployment"] }
                ],
                next_steps: ["Kubernetes", "Cloud Native", "Reactive"],
                career_paths: ["Backend Developer", "Java Developer"]
            },
            "Next.js": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["React", "JavaScript/TypeScript"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["App Router", "Pages", "SSR", "SSG", "API Routes"], resources: ["Next.js Docs", "Next.js Learn"], projects: ["Blog", "Portfolio"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["Auth", "Database", "Deployment", "Image Opt"], resources: ["NextAuth", "Vercel Docs"], projects: ["SaaS App", "E-commerce"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Performance", "Caching", "Edge Functions", "Testing"], resources: ["Advanced Next", "Performance Guide"], projects: ["Production SaaS", "High Traffic App"] }
                ],
                next_steps: ["Full Stack", "tRPC", "Serverless"],
                career_paths: ["Full Stack Developer", "Frontend Developer"]
            },
            "Express.js": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["JavaScript", "Node.js"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["Routing", "Middleware", "Requests", "Responses"], resources: ["Express Docs", "Node.js Info"], projects: ["REST API", "CRUD App"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["Auth (JWT)", "Validation", "Error Handling", "Testing"], resources: ["Passport.js", "Jest for Node"], projects: ["Auth System", "E-commerce API"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Performance", "Microservices", "WebSockets", "GraphQL"], resources: ["GraphQL Docs", "Socket.io"], projects: ["Real-time Chat", "GraphQL API"] }
                ],
                next_steps: ["Node.js", "GraphQL", "Microservices"],
                career_paths: ["Backend Developer", "Full Stack Developer"]
            },
            "Flask": {
                difficulty: "Beginner",
                duration: "2-3 months",
                prerequisites: ["Python"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["Routes", "Templates", "Blueprints", "SQLAlchemy"], resources: ["Flask Docs", "Miguel Grinberg"], projects: ["Blog", "Todo App"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["REST APIs", "Authentication", "Deployment"], resources: ["Flask-RESTful", "Deploy Flask"], projects: ["REST API", "Portfolio"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Large Scale", "Testing", "Celery", "Performance"], resources: ["Flask Extensions", "Testing Flask"], projects: ["Production API", "ML API Service"] }
                ],
                next_steps: ["FastAPI", "Docker", "ML Integration"],
                career_paths: ["Backend Developer", "Python Developer"]
            },
            "FastAPI": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["Python"],
                path: [
                    { phase: "Foundation", duration: "3 weeks", topics: ["Routes", "Pydantic", "SQLAlchemy", "Dependencies"], resources: ["FastAPI Docs", "Tiangolo"], projects: ["REST API", "CRUD App"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["Auth", "Background Tasks", "WebSockets", "Testing"], resources: ["FastAPI Auth", "Testdriven.io"], projects: ["E-commerce API", "Real-time App"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Performance", "Deployment", "Advanced Pydantic"], resources: ["FastAPI Pro", "Full Stack FastAPI"], projects: ["Production API", "ML Model Serving"] }
                ],
                next_steps: ["Docker", "Kubernetes", "MLOps"],
                career_paths: ["Backend Developer", "ML Engineer"]
            },
            "Laravel": {
                difficulty: "Intermediate",
                duration: "3-4 months",
                prerequisites: ["PHP", "OOP"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Routing", "Blade", "Eloquent", "Migrations"], resources: ["Laravel Docs", "Laracasts"], projects: ["Blog", "Todo App"] },
                    { phase: "Intermediate", duration: "5 weeks", topics: ["Auth", "REST APIs", "Events", "Queues"], resources: ["Laravel News", "Beyond Code"], projects: ["E-commerce", "SaaS"] },
                    { phase: "Advanced", duration: "5 weeks", topics: ["Microservices", "Testing", "Laravel Octane"], resources: ["Laravel Pro", "Scale Laravel"], projects: ["Enterprise App", "Real-time Platform"] }
                ],
                next_steps: ["Livewire", "Laravel Vapor", "Vue/React"],
                career_paths: ["Backend Developer", "PHP Developer"]
            }
        }
    },

    // ===== WEB DEVELOPMENT =====
    "Web Development": {
        icon: "🌐",
        description: "Complete developer paths",
        skills: {
            "Frontend Development": {
                difficulty: "Beginner-Intermediate",
                duration: "6-9 months",
                prerequisites: ["Basic Computer Skills"],
                path: [
                    { phase: "HTML & CSS", duration: "6 weeks", topics: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive", "Sass"], resources: ["MDN", "freeCodeCamp", "CSS Tricks"], projects: ["Portfolio", "Landing Page"] },
                    { phase: "JavaScript", duration: "8 weeks", topics: ["JS Fundamentals", "DOM", "ES6+", "Async", "APIs"], resources: ["JavaScript.info", "Eloquent JS"], projects: ["Todo App", "Weather App"] },
                    { phase: "React & Tools", duration: "10 weeks", topics: ["React", "Hooks", "Router", "State", "Tailwind", "Testing"], resources: ["React Docs", "Tailwind Docs"], projects: ["E-commerce", "Dashboard"] }
                ],
                next_steps: ["Next.js", "TypeScript", "Backend"],
                careers: ["Frontend Developer", "UI Developer"]
            },
            "Full Stack Development": {
                difficulty: "Intermediate-Advanced",
                duration: "9-12 months",
                prerequisites: ["HTML/CSS", "JavaScript"],
                path: [
                    { phase: "Frontend Mastery", duration: "12 weeks", topics: ["Advanced CSS", "TypeScript", "React", "State Management"], resources: ["Full Stack Open", "Odin Project"], projects: ["SPA", "Admin Dashboard"] },
                    { phase: "Backend Development", duration: "14 weeks", topics: ["Node/Django", "REST APIs", "Auth", "Databases", "Security"], resources: ["Node Docs", "Django Docs"], projects: ["API", "Auth System"] },
                    { phase: "DevOps & Deploy", duration: "14 weeks", topics: ["Docker", "CI/CD", "Cloud", "Monitoring", "System Design"], resources: ["Docker Docs", "AWS Free Tier"], projects: ["Full App", "CI/CD Pipeline"] }
                ],
                next_steps: ["Microservices", "DevOps", "Mobile"],
                careers: ["Full Stack Developer", "Software Engineer"]
            },
            "Backend Development": {
                difficulty: "Intermediate",
                duration: "6-9 months",
                prerequisites: ["Programming Basics", "SQL"],
                path: [
                    { phase: "Fundamentals", duration: "8 weeks", topics: ["Language (Node/Python)", "REST APIs", "SQL", "Git"], resources: ["Node.js Docs", "SQL Zoo"], projects: ["REST API", "CRUD App"] },
                    { phase: "Core Skills", duration: "10 weeks", topics: ["Authentication", "ORMs", "Caching", "Testing", "Security"], resources: ["JWT.io", "OWASP"], projects: ["E-commerce API", "Auth System"] },
                    { phase: "Advanced", duration: "10 weeks", topics: ["Microservices", "Message Queues", "Docker", "Cloud"], resources: ["Docker Course", "AWS Fundamentals"], projects: ["Production API", "Cloud Deployment"] }
                ],
                next_steps: ["DevOps", "System Design", "Cloud"],
                careers: ["Backend Developer", "API Developer"]
            }
        }
    },

    // ===== DATA SCIENCE & AI =====
    "Data Science & AI": {
        icon: "🤖",
        description: "Machine Learning, Data Science, AI",
        skills: {
            "Machine Learning": {
                difficulty: "Advanced",
                duration: "6-12 months",
                prerequisites: ["Python", "Math (Linear Algebra, Stats)"],
                path: [
                    { phase: "Data Foundation", duration: "10 weeks", topics: ["NumPy", "Pandas", "Visualization", "Statistics", "EDA"], resources: ["Python for Data Analysis", "Kaggle Learn"], projects: ["EDA Project", "Visualization Dashboard"] },
                    { phase: "Core ML", duration: "14 weeks", topics: ["Supervised Learning", "Unsupervised", "Scikit-learn", "Feature Engineering"], resources: ["Hands-On ML", "Andrew Ng Course"], projects: ["Price Prediction", "Clustering"] },
                    { phase: "Deep Learning", duration: "16 weeks", topics: ["Neural Networks", "TensorFlow/PyTorch", "CNNs", "RNNs", "Deployment"], resources: ["Deep Learning Specialization", "Fast.ai"], projects: ["Image Classifier", "NLP Model"] }
                ],
                next_steps: ["MLOps", "Computer Vision", "NLP"],
                careers: ["ML Engineer", "Data Scientist"]
            },
            "Data Science": {
                difficulty: "Advanced",
                duration: "8-12 months",
                prerequisites: ["Python", "Statistics", "SQL"],
                path: [
                    { phase: "Data Foundation", duration: "10 weeks", topics: ["Python", "SQL", "Statistics", "EDA", "Visualization"], resources: ["Python DS Handbook", "Mode SQL"], projects: ["Analysis Project", "Dashboard"] },
                    { phase: "ML & Analytics", duration: "14 weeks", topics: ["Hypothesis Testing", "A/B Testing", "Regression", "Classification"], resources: ["Intro Statistical Learning", "StatQuest"], projects: ["Churn Prediction", "Forecasting"] },
                    { phase: "Production", duration: "16 weeks", topics: ["Deep Learning", "NLP", "Big Data", "Cloud", "Deployment"], resources: ["Made With ML", "Designing Data Apps"], projects: ["End-to-end ML", "Production Model"] }
                ],
                next_steps: ["Deep Learning", "MLOps", "Big Data"],
                careers: ["Data Scientist", "ML Engineer"]
            },
            "Deep Learning": {
                difficulty: "Advanced",
                duration: "6-9 months",
                prerequisites: ["Python", "ML Basics", "Math"],
                path: [
                    { phase: "Neural Networks", duration: "8 weeks", topics: ["Perceptrons", "Backpropagation", "TensorFlow/Keras", "PyTorch Basics"], resources: ["DL Specialization", "Deep Learning with PyTorch"], projects: ["NN from Scratch", "Image Classification"] },
                    { phase: "CNNs & Computer Vision", duration: "10 weeks", topics: ["Convolutional Nets", "Object Detection", "Transfer Learning", "GANs"], resources: ["CS231n", "Fast.ai CV"], projects: ["Object Detector", "Face Recognition"] },
                    { phase: "RNNs & NLP", duration: "10 weeks", topics: ["Sequence Models", "LSTM/GRU", "Transformers", "BERT/GPT"], resources: ["NLP with DL", "Hugging Face"], projects: ["Sentiment Analysis", "Language Model"] }
                ],
                next_steps: ["MLOps", "Computer Vision", "NLP Engineer"],
                careers: ["Deep Learning Engineer", "AI Researcher"]
            },
            "Data Engineering": {
                difficulty: "Intermediate-Advanced",
                duration: "6-9 months",
                prerequisites: ["Python", "SQL", "Basic Cloud"],
                path: [
                    { phase: "Data Pipelines", duration: "8 weeks", topics: ["ETL", "Apache Spark", "Airflow", "Data Modeling"], resources: ["Spark Docs", "Airflow Guide"], projects: ["Data Pipeline", "ETL System"] },
                    { phase: "Data Warehousing", duration: "8 weeks", topics: ["Snowflake", "BigQuery", "dbt", "Star Schema"], resources: ["dbt Docs", "Warehouse Guides"], projects: ["DWH Design", "Analytics Platform"] },
                    { phase: "Advanced & Cloud", duration: "10 weeks", topics: ["Stream Processing", "Kafka", "Cloud Platforms", "Data Governance"], resources: ["Kafka Docs", "GCP/AWS Data"], projects: ["Real-time Pipeline", "Production System"] }
                ],
                next_steps: ["MLOps", "Analytics Engineering"],
                careers: ["Data Engineer", "Analytics Engineer"]
            },
            "Artificial Intelligence": {
                difficulty: "Advanced",
                duration: "8-12 months",
                prerequisites: ["Python", "Math", "ML Basics"],
                path: [
                    { phase: "AI Foundations", duration: "10 weeks", topics: ["Search Algorithms", "Game Theory", "Logic", "ML Review"], resources: ["AI: A Modern Approach", "CS188"], projects: ["Game AI", "Search Problems"] },
                    { phase: "Machine Learning", duration: "14 weeks", topics: ["Supervised", "Unsupervised", "Deep Learning", "Reinforcement Learning"], resources: ["RL Course", "ML Specialization"], projects: ["ML Models", "Game Agent"] },
                    { phase: "Advanced AI", duration: "14 weeks", topics: ["LLMs", "Computer Vision", "Robotics", "AI Ethics"], resources: ["Hugging Face", "AI Research Papers"], projects: ["LLM Application", "AI Product"] }
                ],
                next_steps: ["AGI Research", "Robotics", "AI Products"],
                careers: ["AI Engineer", "Research Scientist"]
            }
        }
    },

    // ===== DEVOPS & CLOUD =====
    "DevOps & Cloud": {
        icon: "☁️",
        description: "Cloud platforms, CI/CD, DevOps",
        skills: {
            "DevOps Engineering": {
                difficulty: "Intermediate-Advanced",
                duration: "6-9 months",
                prerequisites: ["Linux", "Networking", "Python/Bash"],
                path: [
                    { phase: "Foundation", duration: "6 weeks", topics: ["Linux Admin", "Bash", "Networking", "Git", "Automation"], resources: ["Linux Journey", "Bash Guide"], projects: ["Automation Scripts", "Monitoring"] },
                    { phase: "Core Tools", duration: "10 weeks", topics: ["Docker", "Kubernetes", "CI/CD", "Terraform", "Ansible"], resources: ["Docker Deep Dive", "K8s Docs"], projects: ["Containerized App", "K8s Cluster"] },
                    { phase: "Advanced", duration: "12 weeks", topics: ["Advanced K8s", "Cloud Architecture", "Security", "Observability"], resources: ["SRE Book", "CNCF Landscape"], projects: ["Production Platform", "GitOps"] }
                ],
                next_steps: ["Cloud Architecture", "SRE", "Platform Engineering"],
                careers: ["DevOps Engineer", "SRE", "Cloud Engineer"]
            },
            "AWS Cloud": {
                difficulty: "Intermediate",
                duration: "4-6 months",
                prerequisites: ["Linux", "Networking"],
                path: [
                    { phase: "Fundamentals", duration: "6 weeks", topics: ["IAM", "EC2", "S3", "VPC", "CloudWatch", "CLI"], resources: ["AWS Cloud Practitioner", "A Cloud Guru"], projects: ["S3 Website", "EC2 Server"] },
                    { phase: "Solutions Architect", duration: "8 weeks", topics: ["Load Balancers", "RDS", "Lambda", "API Gateway", "ECS"], resources: ["SA Associate", "Stephane Maarek"], projects: ["Serverless API", "HA App"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["CloudFormation", "EKS", "Security", "Cost Optimization"], resources: ["SA Professional", "Well-Architected"], projects: ["Multi-Region", "EKS Cluster"] }
                ],
                next_steps: ["DevOps", "Multi-Cloud", "Terraform"],
                careers: ["Cloud Engineer", "Solutions Architect"]
            },
            "Google Cloud Platform": {
                difficulty: "Intermediate",
                duration: "4-6 months",
                prerequisites: ["Linux", "Networking"],
                path: [
                    { phase: "Fundamentals", duration: "6 weeks", topics: ["Compute Engine", "Cloud Storage", "VPC", "IAM", "Cloud SQL"], resources: ["Google Cloud Skills Boost", "Coursera GCP"], projects: ["VM Setup", "Storage Buckets"] },
                    { phase: "Developer", duration: "6 weeks", topics: ["App Engine", "Cloud Run", "Cloud Functions", "Cloud Build"], resources: ["GCP Docs", "Google Cloud Docs"], projects: ["Serverless App", "CI/CD Pipeline"] },
                    { phase: "Data & ML", duration: "8 weeks", topics: ["BigQuery", "Dataflow", "AI Platform", "Kubernetes Engine"], resources: ["BigQuery Docs", "GCP Data Eng"], projects: ["Data Pipeline", "ML Deployment"] }
                ],
                next_steps: ["AWS", "Azure", "Multi-Cloud"],
                careers: ["Cloud Engineer", "Data Engineer"]
            },
            "Microsoft Azure": {
                difficulty: "Intermediate",
                duration: "4-6 months",
                prerequisites: ["Networking", "Basic Cloud"],
                path: [
                    { phase: "Fundamentals", duration: "6 weeks", topics: ["Azure Portal", "Virtual Machines", "Storage", "Vnets", "IAM"], resources: ["Microsoft Learn", "AZ-900 Course"], projects: ["VM Setup", "Storage Account"] },
                    { phase: "Developer", duration: "6 weeks", topics: ["App Service", "Functions", "Azure SQL", "Cosmos DB", "DevOps"], resources: ["AZ-204 Course", "Microsoft Docs"], projects: ["Web App", "Serverless API"] },
                    { phase: "Architect", duration: "8 weeks", topics: ["AKS", "ARM Templates", "Security", "Hybrid"], resources: ["AZ-305 Course", "Azure Architecture"], projects: ["AKS Cluster", "Enterprise Architecture"] }
                ],
                next_steps: ["AWS", "GCP", "DevOps"],
                careers: ["Cloud Engineer", "Azure Developer"]
            },
            "Docker & Kubernetes": {
                difficulty: "Intermediate-Advanced",
                duration: "4-6 months",
                prerequisites: ["Linux", "Command Line"],
                path: [
                    { phase: "Docker", duration: "6 weeks", topics: ["Containers", "Images", "Dockerfile", "Docker Compose", "Networking"], resources: ["Docker Docs", "Docker Deep Dive"], projects: ["Containerized App", "Docker Compose Stack"] },
                    { phase: "Kubernetes", duration: "8 weeks", topics: ["Pods", "Services", "Deployments", "ConfigMaps", "Helm"], resources: ["K8s Docs", "Kube Academy"], projects: ["K8s Cluster", "Production Deployment"] },
                    { phase: "Advanced", duration: "8 weeks", topics: ["Service Mesh", "Security", "Monitoring", "GitOps"], resources: ["Istio Docs", "ArgoCD"], projects: ["GitOps Pipeline", "Service Mesh"] }
                ],
                next_steps: ["Cloud Native", "Platform Engineering"],
                careers: ["DevOps Engineer", "Platform Engineer"]
            },
            "Terraform": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["Cloud Basics", "YAML/JSON"],
                path: [
                    { phase: "Foundations", duration: "3 weeks", topics: ["HCL", "Providers", "Resources", "Variables", "Outputs"], resources: ["Terraform Docs", "HashiCorp Learn"], projects: ["EC2 Instance", "S3 Bucket"] },
                    { phase: "Intermediate", duration: "4 weeks", topics: ["Modules", "Workspaces", "State", "Remote Backend"], resources: ["Terraform Guide", "Best Practices"], projects: ["VPC Module", "Multi-env Setup"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Testing", "CI/CD", "Policy as Code", "CloudFormation"], resources: ["Terratest", "OPA"], projects: ["Production Infrastructure", "Automated Pipeline"] }
                ],
                next_steps: ["Pulumi", "Ansible", "DevOps"],
                careers: ["DevOps Engineer", "Infrastructure Engineer"]
            }
        }
    },

    // ===== MOBILE DEVELOPMENT =====
    "Mobile Development": {
        icon: "📱",
        description: "Build mobile applications",
        skills: {
            "React Native": {
                difficulty: "Intermediate",
                duration: "3-5 months",
                prerequisites: ["JavaScript", "React"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Setup", "Components", "Styling", "Navigation"], resources: ["RN Docs", "Expo Docs"], projects: ["Todo App", "Weather App"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["State", "APIs", "Storage", "Camera", "Maps", "Auth"], resources: ["RN School", "W. Candillon"], projects: ["Social Feed", "E-commerce"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Animations", "Native Modules", "Performance", "Deployment"], resources: ["Reanimated Docs", "App Store Guide"], projects: ["Published App", "Animation Demo"] }
                ],
                next_steps: ["Flutter", "Native Dev", "Mobile Backend"],
                careers: ["Mobile Developer", "React Native Developer"]
            },
            "Flutter": {
                difficulty: "Intermediate",
                duration: "3-5 months",
                prerequisites: ["Dart", "OOP Concepts"],
                path: [
                    { phase: "Foundation", duration: "4 weeks", topics: ["Widgets", "Dart", "State (Provider)", "Navigation"], resources: ["Flutter Docs", "Flutter Codelabs"], projects: ["Todo App", "Calculator"] },
                    { phase: "Intermediate", duration: "6 weeks", topics: ["HTTP", "Firebase", "State Management", "Local Storage"], resources: ["Firebase Docs", "Riverpod"], projects: ["Social App", "E-commerce"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Animations", "Platform Channels", "Testing", "Publishing"], resources: ["Advanced Flutter", "Flutter Internals"], projects: ["Published App", "Complex UI"] }
                ],
                next_steps: ["Dart", "Firebase", "Native iOS/Android"],
                careers: ["Mobile Developer", "Flutter Developer"]
            },
            "iOS Development (Swift)": {
                difficulty: "Intermediate",
                duration: "4-6 months",
                prerequisites: ["Swift", "OOP"],
                path: [
                    { phase: "Foundation", duration: "6 weeks", topics: ["UIKit", "Auto Layout", "View Controllers", "Navigation"], resources: ["Apple Docs", "Stanford iOS"], projects: ["Todo App", "Weather App"] },
                    { phase: "Intermediate", duration: "8 weeks", topics: ["Networking", "Core Data", "SwiftUI", "Testing"], resources: ["Hacking with Swift", "Ray Wenderlich"], projects: ["News App", "Social App"] },
                    { phase: "Advanced", duration: "8 weeks", topics: ["ARKit", "CoreML", "Performance", "App Store"], resources: ["Apple Developer", "Objc.io"], projects: ["Published App", "ML Integration"] }
                ],
                next_steps: ["SwiftUI", "ARKit", "CoreML"],
                careers: ["iOS Developer", "Mobile Developer"]
            },
            "Android Development (Kotlin)": {
                difficulty: "Intermediate",
                duration: "4-6 months",
                prerequisites: ["Kotlin", "OOP"],
                path: [
                    { phase: "Foundation", duration: "6 weeks", topics: ["Activities", "XML/Compose", "Intents", "Resources"], resources: ["Android Docs", "Kotlinlang"], projects: ["Todo App", "Weather App"] },
                    { phase: "Intermediate", duration: "8 weeks", topics: ["Networking", "Room", "MVVM", "Hilt/Dagger"], resources: ["Jetpack Docs", "Udacity"], projects: ["News App", "E-commerce"] },
                    { phase: "Advanced", duration: "8 weeks", topics: ["Jetpack Compose", "Coroutines", "Testing", "Play Store"], resources: ["Compose Docs", "Android Advanced"], projects: ["Published App", "Complex App"] }
                ],
                next_steps: ["Jetpack Compose", "Kotlin Multiplatform"],
                careers: ["Android Developer", "Mobile Developer"]
            }
        }
    },

    // ===== DESPECIALIZED SKILLS =====
    "Specialized Skills": {
        icon: "🎯",
        description: "System Design, Blockchain, Security",
        skills: {
            "System Design": {
                difficulty: "Advanced",
                duration: "4-6 months",
                prerequisites: ["Backend Dev", "Databases", "Networking"],
                path: [
                    { phase: "Fundamentals", duration: "6 weeks", topics: ["Scalability", "Load Balancing", "Caching", "CAP Theorem"], resources: ["System Design Primer", "DDIA"], projects: ["URL Shortener", "Instagram Design"] },
                    { phase: "Intermediate", duration: "8 weeks", topics: ["Microservices", "Message Queues", "Databases", "Rate Limiting"], resources: ["System Design Interview", "High Scalability"], projects: ["Netflix Design", "Uber Design"] },
                    { phase: "Advanced", duration: "6 weeks", topics: ["Distributed Systems", "Consensus", "Event-Driven", "CQRS"], resources: ["Building Microservices", "Papers We Love"], projects: ["Amazon Design", "Distributed Cache"] }
                ],
                next_steps: ["Software Architecture", "Cloud Architecture"],
                careers: ["Senior Engineer", "Staff Engineer", "Architect"]
            },
            "Blockchain Development": {
                difficulty: "Advanced",
                duration: "6-9 months",
                prerequisites: ["Programming", "Cryptography Basics"],
                path: [
                    { phase: "Fundamentals", duration: "6 weeks", topics: ["Blockchain Concepts", "Cryptography", "Consensus", "Bitcoin", "Ethereum"], resources: ["Mastering Bitcoin", "Ethereum Whitepaper"], projects: ["Simple Blockchain", "Crypto Tracker"] },
                    { phase: "Smart Contracts", duration: "10 weeks", topics: ["Solidity", "Web3.js", "Hardhat", "ERC Standards", "Security"], resources: ["CryptoZombies", "OpenZeppelin"], projects: ["ERC20 Token", "NFT Marketplace"] },
                    { phase: "Advanced DApps", duration: "10 weeks", topics: ["Full Stack DApps", "IPFS", "Layer 2", "Auditing"], resources: ["Mastering Ethereum", "Alchemy University"], projects: ["DeFi Platform", "Production DApp"] }
                ],
                next_steps: ["DeFi", "Blockchain Security"],
                careers: ["Blockchain Developer", "Smart Contract Engineer"]
            },
            "Cybersecurity": {
                difficulty: "Advanced",
                duration: "6-12 months",
                prerequisites: ["Networking", "Operating Systems", "Programming"],
                path: [
                    { phase: "Foundations", duration: "8 weeks", topics: ["Networking", "OS Concepts", "Linux", "Python for Security"], resources: ["CompTIA Security+", "OverTheWire"], projects: ["Network Analysis", "Linux Hardening"] },
                    { phase: "Offensive Security", duration: "10 weeks", topics: ["Penetration Testing", "Metasploit", "Burp Suite", "SQL Injection", "XSS"], resources: ["OWASP", "PentesterLab"], projects: ["Vulnerability Assessment", "Pen Test Report"] },
                    { phase: "Defensive Security", duration: "12 weeks", topics: ["SIEM", "Incident Response", "Malware Analysis", "Security Operations"], resources: ["Blue Team Tools", "SANS"], projects: ["SIEM Setup", "Incident Response Plan"] }
                ],
                next_steps: ["Cloud Security", "AppSec", "GRC"],
                careers: ["Security Engineer", "Penetration Tester", "SOC Analyst"]
            },
            "Game Development": {
                difficulty: "Intermediate-Advanced",
                duration: "6-12 months",
                prerequisites: ["Programming (any language)", "Math basics"],
                path: [
                    { phase: "Game Dev Foundations", duration: "8 weeks", topics: ["Game Loop", "2D Graphics", "Physics", "Input Handling"], resources: ["Unity Learn", "Godot Docs"], projects: ["2D Platformer", "Puzzle Game"] },
                    { phase: "3D Development", duration: "12 weeks", topics: ["3D Math", "Shaders", "Lighting", "Animation", "AI"], resources: ["Unity Premium", "Unreal Academy"], projects: ["3D Game", "Multiplayer Setup"] },
                    { phase: "Advanced", duration: "12 weeks", topics: ["Performance Optimization", "Multiplayer", "Publishing", "Monetization"], resources: ["Game Dev Business", "Store Guidelines"], projects: ["Published Game", "Live Ops"] }
                ],
                next_steps: ["VR/AR Dev", "Engine Development"],
                careers: ["Game Developer", "Unity/Unreal Developer"]
            },
            "UI/UX Design": {
                difficulty: "Beginner-Intermediate",
                duration: "4-8 months",
                prerequisites: ["Basic Design Eye", "Creativity"],
                path: [
                    { phase: "UI Design", duration: "8 weeks", topics: ["Design Principles", "Color Theory", "Typography", "Figma", "Components"], resources: ["Figma Learn", "Design Course"], projects: ["App Design", "Design System"] },
                    { phase: "UX Research", duration: "8 weeks", topics: ["User Research", "Wireframing", "Prototyping", "Usability Testing"], resources: ["UX Collective", "Interaction Design"], projects: ["User Research", "Wireframes"] },
                    { phase: "Advanced UX", duration: "8 weeks", topics: ["Design Systems", "Motion Design", "Accessibility", "Portfolio"], resources: ["Design Better", "UX Planet"], projects: ["Full Case Study", "Portfolio"] }
                ],
                next_steps: ["Product Design", "Design Leadership"],
                careers: ["UI Designer", "UX Designer", "Product Designer"]
            },
            "Quality Assurance (QA)": {
                difficulty: "Beginner-Intermediate",
                duration: "3-6 months",
                prerequisites: ["Basic Tech Skills", "Analytical Thinking"],
                path: [
                    { phase: "Manual Testing", duration: "6 weeks", topics: ["Test Cases", "Bug Reporting", "Test Planning", "Agile"], resources: ["ISTQB", "Software Testing Help"], projects: ["Test Suite", "Bug Reports"] },
                    { phase: "Automation Testing", duration: "8 weeks", topics: ["Selenium", "Playwright", "Cypress", "API Testing"], resources: ["Automation Testing", "Test Automation University"], projects: ["Test Framework", "CI/CD Tests"] },
                    { phase: "Advanced QA", duration: "8 weeks", topics: ["Performance Testing", "Security Testing", "CI/CD", "SDET"], resources: ["JMeter", "Postman"], projects: ["Performance Suite", "SDET Pipeline"] }
                ],
                next_steps: ["DevOps", "SDET", "Test Architecture"],
                careers: ["QA Engineer", "SDET", "Test Lead"]
            }
        }
    },

    // =====Databases =====
    "Databases": {
        icon: "🗄️",
        description: "Database design and management",
        skills: {
            "SQL & Relational Databases": {
                difficulty: "Beginner",
                duration: "2-3 months",
                prerequisites: ["Basic Programming"],
                path: [
                    { phase: "SQL Fundamentals", duration: "4 weeks", topics: ["SELECT", "JOINs", "Aggregation", "Subqueries"], resources: ["SQLZoo", "W3Schools SQL"], projects: ["Query Reports", "Database Design"] },
                    { phase: "Database Design", duration: "4 weeks", topics: ["Normalization", "Indexes", "Views", "Stored Procedures"], resources: ["Use The Index, Luke", "Database Internals"], projects: ["E-commerce Schema", "School System"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Performance Tuning", "Query Optimization", "Replication"], resources: ["High Performance MySQL", "PostgreSQL Docs"], projects: ["Query Optimization", "Database Tuning"] }
                ],
                next_steps: ["Database Administration", "Data Engineering"],
                careers: ["Database Developer", "Data Analyst"]
            },
            "MongoDB & NoSQL": {
                difficulty: "Intermediate",
                duration: "2-3 months",
                prerequisites: ["Programming Basics", "JSON"],
                path: [
                    { phase: "MongoDB Basics", duration: "3 weeks", topics: ["Documents", "Collections", "CRUD", "Aggregation"], resources: ["MongoDB University", "Docs"], projects: ["Blog Backend", "API"] },
                    { phase: "Data Modeling", duration: "4 weeks", topics: ["Schema Design", "Indexes", "Transactions"], resources: ["MongoDB Docs", "Data Modeling Guide"], projects: ["E-commerce Model", "Analytics"] },
                    { phase: "Advanced", duration: "4 weeks", topics: ["Atlas", "Realm", "Performance", "Security"], resources: ["MongoDB Advanced", "Atlas University"], projects: ["Production Cluster", "Atlas Setup"] }
                ],
                next_steps: ["Full Stack MERN", "Data Engineering"],
                careers: ["Backend Developer", "Full Stack Developer"]
            },
            "PostgreSQL": {
                difficulty: "Intermediate",
                duration: "3-4 months",
                prerequisites: ["SQL Basics"],
                path: [
                    { phase: "PostgreSQL Basics", duration: "4 weeks", topics: ["Installation", "SQL Advanced", "psql", "Data Types"], resources: ["PostgreSQL Docs", "PG Exercises"], projects: ["Database Design", "Complex Queries"] },
                    { phase: "Advanced Features", duration: "5 weeks", topics: ["JSON/JSONB", "Full Text Search", "Window Functions", "CTEs"], resources: ["PG Docs", "High Performance PG"], projects: ["Analytics DB", "Search Feature"] },
                    { phase: "Administration", duration: "5 weeks", topics: ["Replication", "Backup", "Performance", "Extensions"], resources: ["PG Docs", "Enterprise DB"], projects: ["HA Setup", "Performance Tuning"] }
                ],
                next_steps: ["Database Administration", "Data Engineering"],
                careers: ["Database Admin", "Backend Developer"]
            }
        }
    }
};

// ===== ROADMAP GENERATOR FUNCTIONS =====

function getAllCategories() {
    return Object.keys(skillsDatabase);
}

function getCategoryIcon(category) {
    return skillsDatabase[category]?.icon || "📚";
}

function getSkillsByCategory(category) {
    return Object.keys(skillsDatabase[category] || {});
}

function getSkillRoadmap(skillName, category) {
    if (skillsDatabase[category] && skillsDatabase[category][skillName]) {
        return skillsDatabase[category][skillName];
    }
    return null;
}

function searchSkills(query) {
    const results = [];
    const lowerQuery = query.toLowerCase().trim();
    
    if (!lowerQuery) return results;
    
    Object.entries(skillsDatabase).forEach(([category, data]) => {
        Object.keys(data.skills).forEach(skill => {
            if (skill.toLowerCase().includes(lowerQuery) || 
                category.toLowerCase().includes(lowerQuery)) {
                results.push({
                    category: category,
                    skill: skill,
                    icon: data.icon,
                    difficulty: data.skills[skill].difficulty,
                    duration: data.skills[skill].duration
                });
            }
        });
    });
    
    return results;
}

function generateRoadmapText(roadmapData, skillName) {
    if (!roadmapData) return "Roadmap not found for this skill.";
    
    let output = "=".repeat(70) + "\n";
    output += `${skillName.toUpperCase()} LEARNING ROADMAP\n`;
    output += "=".repeat(70) + "\n\n";
    
    output += `📊 Difficulty: ${roadmapData.difficulty}\n`;
    output += `⏱️  Duration: ${roadmapData.duration}\n`;
    output += `✅ Prerequisites: ${roadmapData.prerequisites.join(', ')}\n\n`;
    
    output += "=".repeat(70) + "\n";
    output += "LEARNING PATH\n";
    output += "=".repeat(70) + "\n\n";
    
    roadmapData.path.forEach((phase, i) => {
        output += `\n${"=".repeat(70)}\n`;
        output += `PHASE ${i + 1}: ${phase.phase}\n`;
        output += `Duration: ${phase.duration}\n`;
        output += `${"=".repeat(70)}\n\n`;
        
        output += "📚 Topics:\n";
        phase.topics.forEach(topic => output += `  • ${topic}\n`);
        
        output += "\n📖 Resources:\n";
        phase.resources.forEach(r => output += `  • ${r}\n`);
        
        output += "\n💻 Projects:\n";
        phase.projects.forEach(p => output += `  • ${p}\n`);
    });
    
    output += `\n${"=".repeat(70)}\n`;
    output += "NEXT STEPS\n";
    output += "=".repeat(70) + "\n";
    output += roadmapData.next_steps.map(n => `  ➡️ ${n}`).join('\n');
    
    output += `\n\n${"=".repeat(70)}\n`;
    output += "CAREER PATHS\n";
    output += "=".repeat(70) + "\n";
    output += roadmapData.career_paths.map(c => `  🎯 ${c}`).join('\n');
    
    output += `\n\n${"=".repeat(70)}\n`;
    return output;
}

function getTotalSkillsCount() {
    let count = 0;
    Object.values(skillsDatabase).forEach(cat => {
        count += Object.keys(cat.skills).length;
    });
    return count;
}

function getAllSkillsFlat() {
    const allSkills = [];
    Object.entries(skillsDatabase).forEach(([category, data]) => {
        Object.entries(data.skills).forEach(([skill, details]) => {
            allSkills.push({
                category,
                skill,
                icon: data.icon,
                ...details
            });
        });
    });
    return allSkills;
}

// ===== UTILITY FUNCTIONS =====

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== DISPLAY ROADMAP FUNCTION =====

function displayRoadmap(skillName, category) {
    const roadmapData = getSkillRoadmap(skillName, category);
    const container = document.getElementById('roadmapContent');
    
    if (!container) {
        console.error('Roadmap container not found');
        return;
    }
    
    if (!roadmapData) {
        container.innerHTML = '<p class="error">Roadmap not found for this skill.</p>';
        container.style.display = 'block';
        return;
    }
    
    let html = `
        <div class="roadmap-header">
            <div class="roadmap-title">
                <span class="roadmap-icon">${skillsDatabase[category]?.icon || '📚'}</span>
                <h2>${skillName}</h2>
            </div>
            <div class="roadmap-meta">
                <span class="meta-badge difficulty">${roadmapData.difficulty}</span>
                <span class="meta-badge duration">⏱️ ${roadmapData.duration}</span>
            </div>
        </div>
        
        <div class="roadmap-prerequisites">
            <h3>📋 Prerequisites</h3>
            <div class="prerequisite-tags">
                ${roadmapData.prerequisites.map(prereq => `<span class="tag">${prereq}</span>`).join('')}
            </div>
        </div>
        
        <div class="roadmap-timeline">
    `;
    
    roadmapData.path.forEach((phase, index) => {
        const isCompleted = index === 0; // First phase is considered started
        html += `
            <div class="timeline-phase ${isCompleted ? 'active' : ''}">
                <div class="phase-header">
                    <div class="phase-number">${index + 1}</div>
                    <div class="phase-info">
                        <h3>${phase.phase}</h3>
                        <span class="phase-duration">⏱️ ${phase.duration}</span>
                    </div>
                </div>
                
                <div class="phase-content">
                    <div class="topics-section">
                        <h4>📚 Topics</h4>
                        <ul class="topics-list">
                            ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="resources-section">
                        <h4>📖 Resources</h4>
                        <ul class="resources-list">
                            ${phase.resources.map(resource => `<li>${resource}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="projects-section">
                        <h4>💻 Projects</h4>
                        <ul class="projects-list">
                            ${phase.projects.map(project => `<li>${project}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `</div>`; // End timeline
    
    // Next Steps
    if (roadmapData.next_steps) {
        html += `
            <div class="roadmap-next-steps">
                <h3>🚀 Next Steps</h3>
                <div class="next-steps-grid">
                    ${roadmapData.next_steps.map(step => `
                        <div class="next-step-card">
                            <span>➡️ ${step}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Career Paths
    if (roadmapData.career_paths) {
        html += `
            <div class="roadmap-careers">
                <h3>🎯 Career Paths</h3>
                <div class="career-paths">
                    ${roadmapData.career_paths.map(career => `
                        <span class="career-badge">${career}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Fallback for careers key (some skills use 'careers' instead of 'career_paths')
    if (roadmapData.careers) {
        html += `
            <div class="roadmap-careers">
                <h3>🎯 Career Paths</h3>
                <div class="career-paths">
                    ${roadmapData.careers.map(career => `
                        <span class="career-badge">${career}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    container.style.display = 'block';
    
    // Scroll to roadmap
    container.scrollIntoView({ behavior: 'smooth' });
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navLinks) navLinks.classList.toggle('active');
        });
    }
    
    // Check if on roadmap page
    if (document.getElementById('roadmap-page')) {
        initializeRoadmapPage();
    }
    
    // Authentication check for protected pages
    if (window.location.pathname.includes('dashboard.html') || 
        window.location.pathname.includes('roadmap.html') ||
        window.location.pathname.includes('quiz.html')) {
        if (!localStorage.getItem('isLoggedIn')) {
            window.location.href = 'login.html';
        }
    }
});

// Global functions
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger?.classList.toggle('active');
    navLinks?.classList.toggle('active');
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}

function checkAuth() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// ===== ROADMAP PAGE FUNCTIONS =====

function initializeRoadmapPage() {
    const categorySelect = document.getElementById('categorySelect');
    const skillSelect = document.getElementById('skillSelect');
    const generateBtn = document.getElementById('generateBtn');
    const searchInput = document.getElementById('searchInput');
    const quickAccess = document.getElementById('quickAccess');
    
    if (!categorySelect) return;
    
    // Populate categories
    const categories = getAllCategories();
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
    
    // Render category cards
    renderCategoryCards();
    
    // Category change handler
    categorySelect.addEventListener('change', function() {
        skillSelect.innerHTML = '<option value="">Select a skill...</option>';
        
        if (this.value) {
            const skills = getSkillsByCategory(this.value);
            skills.forEach(skill => {
                const option = document.createElement('option');
                option.value = skill;
                option.textContent = skill;
                skillSelect.appendChild(option);
            });
            skillSelect.disabled = false;
        } else {
            skillSelect.disabled = true;
        }
        
        if (generateBtn) generateBtn.disabled = true;
        
        // Hide roadmap when category changes
        const roadmapContent = document.getElementById('roadmapContent');
        if (roadmapContent) roadmapContent.style.display = 'none';
    });
    
    // Skill change handler
    skillSelect.addEventListener('change', function() {
        if (generateBtn) {
            generateBtn.disabled = !this.value;
        }
    });
    
    // Generate button handler
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const cat = categorySelect.value;
            const skill = skillSelect.value;
            
            if (cat && skill) {
                displayRoadmap(skill, cat);
                if (quickAccess) quickAccess.style.display = 'none';
            }
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            const query = this.value.trim();
            if (query.length >= 2) {
                performSearch(query);
            } else if (query.length === 0) {
                renderCategoryCards();
            }
        }, 300));
    }
    
    // Category card clicks
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            const categorySelect = document.getElementById('categorySelect');
            const skillSelector = document.querySelector('.skill-selector');
            
            if (categorySelect) {
                categorySelect.value = category;
                
                // Trigger change
                const event = new Event('change');
                categorySelect.dispatchEvent(event);
                
                // Enable skill select
                const skillSelect = document.getElementById('skillSelect');
                if (skillSelect) skillSelect.disabled = false;
                
                // Hide quick access and scroll
                const quickAccess = document.getElementById('quickAccess');
                if (quickAccess) quickAccess.style.display = 'none';
                if (skillSelector) skillSelector.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    console.log(`SkillSync initialized with ${getTotalSkillsCount()} skills!`);
}

function renderCategoryCards() {
    const container = document.getElementById('categoryCards');
    if (!container) return;
    
    const categories = getAllCategories();
    container.innerHTML = categories.map(cat => {
        const data = skillsDatabase[cat];
        const skillCount = Object.keys(data.skills).length;
        return `
            <div class="category-card" data-category="${cat}">
                <div class="category-icon">${data.icon}</div>
                <h3>${cat}</h3>
                <p>${data.description}</p>
                <span class="skill-count">${skillCount} Skills</span>
            </div>
        `;
    }).join('');
}

function performSearch(query) {
    const results = searchSkills(query);
    const container = document.getElementById('categoryCards');
    const quickAccess = document.getElementById('quickAccess');
    
    if (!container) return;
    
    if (results.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 48px;">
                <span style="font-size: 3rem;">🔍</span>
                <p style="margin-top: 16px; color: var(--text-light);">
                    No skills found for "${query}". Try a different search term.
                </p>
            </div>
        `;
        return;
    }
    
    // Group results by category
    const grouped = {};
    results.forEach(r => {
        if (!grouped[r.category]) grouped[r.category] = [];
        grouped[r.category].push(r);
    });
    
    container.innerHTML = Object.entries(grouped).map(([cat, items]) => `
        <div style="grid-column: 1/-1;">
            <h3 style="margin: 24px 0 16px; color: var(--primary);">${items[0].icon} ${cat}</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
                ${items.map(item => `
                    <div class="category-card" data-category="${item.category}" data-skill="${item.skill}">
                        <div class="category-icon">${item.icon}</div>
                        <h3>${item.skill}</h3>
                        <p>${item.difficulty} • ${item.duration}</p>
                        <span class="skill-count">View Roadmap</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');}
}
