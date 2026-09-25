# company_website
Responsive Company WebsiteA modern, responsive web application for TechSolutions (Innovations & Services) developed as part of the WeIntern Pvt Ltd Full Stack Development Internship .The application utilizes a Single Page Application (SPA) structure with smooth dynamic section toggling across four core views: Home, About, Services, and Contact.
🌐 Live Demo & RepositoryLive Demo: https://your-username.github.io/company-website (Replace with your deployed site link)
📌 Project Architecture & Features🏢 Single-Page View StructureHome Section (#home): Hero banner displaying the value proposition "Transforming Ideas Into Digital Reality" with a call-to-action button to explore services.About Section (#about): Highlights company story, mission, and team profile.Services Section (#services): Displays offerings and tech solutions using a responsive CSS Grid/Flexbox layout.Contact Section (#contact): Interactive contact form with client-side JavaScript validation.📱 Responsive & Interactive FeaturesMobile Hamburger Navigation: Interactive slide-out/toggle menu for mobile screens, replacing the standard horizontal links on smaller viewports.Dynamic Page Toggling: Smooth navigation between site views using custom active-state CSS and JavaScript without full-page reloads.Consistent Branding & Modern Styling: Unified color palette, responsive container utility classes, and standardized headers/footers across views.🛠️ Tech StackFrontend: HTML5, CSS3, ES6+ JavaScriptBackend/Server Environment: Node.js / Express (server.js)Styling: CSS Custom Properties, Flexbox, CSS Grid, Media QueriesVersion Control: Git & GitHub📁 Project Directory Structurecompany-website/
├── public/
│   ├── css/
│   │   └── style.css              # Main design system & responsive styling
│   ├── js/
│   │   └── main.js                # View-switching router & mobile navigation logic
│   ├── screenshots/               # Application preview images for documentation
│   │   ├── company_website_homepage.png
│   │   ├── company_website_about.png
│   │   ├── company_website_services.png
│   │   └── company_website_contact.png
│   └── index.html                 # Main Single Page Application entry point
├── .env                           # Environment configuration
├── package.json                   # Node dependencies & project scripts
├── server.js                      # Local development Express server
└── README.md                      # Project documentation
💡 Design Decisions & Technical ChoicesSPA (Single Page Application) Approach: Implemented page views within a single index.html structure using dynamic CSS state classes (.page-view.active). This drastically improves load times and user experience.Modular CSS Styling: Centered around global container layout bounds (.container, .nav-container, .main-content) to guarantee clean margin and alignment predictability across viewports.Vanilla JavaScript Execution: Engineered dynamic navigation and mobile hamburger toggle logic using native ES6 DOM manipulation without heavy external library dependencies.📸 Screenshots & ResponsivenessViewportRangePreviewDesktop> 1024px![Desktop View](public/screenshots/company_website_homepage.png)Tablet768px - 1023px![Tablet View](public/screenshots/company_website_about.png)Mobile< 767px![Mobile View](public/screenshots/company_website_contact.png)🚀 How to Run LocallyOption 1: Node.js / Express ServerClone the repository:git clone https://github.com/your-username/company-website.git
cd company-website
Install dependencies:npm install
Start the application server:npm start
Open http://localhost:5500 or http://localhost:3000 in your browser.Option 2: Live Server / Static BrowserOpen the project directory in VS Code.Right-click public/index.html and select Open with Live Server.📋 Deliverable Checklist Compliance[x] Four distinct functional page sections (Home, About, Services, Contact)[x] Mobile navigation bar with working hamburger toggle[x] Professional layout using CSS Flexbox / Grid[x] JavaScript interaction for view navigation and mobile header[x] Included project screenshots and file structure documentation📄 License & AcknowledgmentsDeveloped as part of the WeIntern Pvt Ltd Full Stack Development Internship program.Distributed under the MIT License.
