import CapstoneUrl from "../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../assets/eme-website-screenshot.jpg";
import PortfolioUrl from "../assets/portfolio-screenshot.jpg";
import ATSUrl from "../assets/ats-website-screenshot.jpg";
import DobsonPartnersUrl from "../assets/dobson-partners.png"
import FreeTypingCampUrl from "../assets/free-tying-camp.png"
import { v4 as uuidv4 } from "uuid"

const ProjData = [
  {
    id: uuidv4(),
    projId: "true10proj",
    title: "Dobson Partners",
    description:
      "This full-stack web application by Dobson Partners offers valuable Real Estate services for Landlords, Tenants, and Realtors.",
    techStack: [
      "Remix",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitLab",
      "Prisma ORM",
      "PostgreSQL",
      "Postman API",
      "Figma"
    ],
    year: "2023",
    endYear: "2024",
    imageURL: DobsonPartnersUrl,
    projURL: "",
    projCSS: "project",
    projLink: "/projects/dobsonpartners",
    features: [

      "Built a full-stack web application from the ground up using Remix, TypeScript, and Tailwind CSS, aligning closely with Figma wireframes to offer valuable Real Estate services for Landlords, Tenants, and Realtors.",
      "Maintained open communication, provided progress updates via Slack and Zoom, ensured consistent commits to GitLab, and proactively addressed challenges to meet project deadlines.",
      "Implemented back-end functionality by writing server-side code and integrating Prisma ORM for safe and efficient read and write operations to a PostgreSQL database.",
      "Seamlessly integrated RESTful API endpoints from Cloudinary for media management and Stripe for user payments, performing API testing using Postman to improve functionality and reliability.",
      "Handled user authentication using Session Storage, social media authentication using the OAuth2 Framework, and wrote unit and integration tests for all components using Vitest to ensure robust security and reliable functionality.",
    ],
    challenges:
      ["At the outset of this project, I encountered a significant challenge: while I was well-versed in JavaScript, React, Express, and PostgreSQL, I had no experience with some of the project requirements or technologies such as Prisma ORM or Remix. During the interview for this position, I was frank about my limitations, but was given a chance to hit the ground running. This presented a unique chance for me to step out of my comfort zone and quickly familiarize myself with new technologies on the job, all while ensuring timely delivery of project deliverables. Embracing this challenge head on has resulted in personal and professional growth as I have greatly expanded my skills in full-stack web application development.",
        "While I cannot disclose specific details about the hurdles I faced, this project was extensive and multifaceted. It involved developing interfaces for Landlord, Tenant, and Realtor accounts with complex integrations to facilitate effective communication and information sharing. Some technical challenges included debugging errors produced by code on the client, server, and external API, as well as designing database relationships and schema for proper information storage and flow. One crucial aspect involved ensuring that access to secure pages was restricted to authorized individuals based on account type. Navigating these challenges allowed me to further hone my programming skills, particularly in full-stack application development, problem-solving, and debugging. I am eager to apply these lessons to future projects and continue pushing the boundaries of what I can achieve as a software developer.",
      ],
  },
  {
    id: uuidv4(),
    projId: "ftcproj",
    title: "Free Typing Camp",
    description:
      "Free Typing Camp is a full-stack web application that offers an accessible typing program for all users. Craft your ideal space & bring it to life by unlocking vibrant illustrations to customize the site according to your preferences. Accumulate points, monitor your progress, & gamify your learning experience with a wide array of unlockables by creating a free account.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node",
      "Express",
      "PostgreSQL",
      "GitHub",
      "Vitest",
      "Cloudflare",
      "Postman API",
      "Digital Ocean",
      "Photoshop",
      "Adobe Firefly",
      "Chat GPT 4",
      "Google Analytics",
    ],
    year: "2023",
    endYear: "2024",
    imageURL: FreeTypingCampUrl,
    projURL: "https://freetypingcamp.com/",
    projCSS: "project-reverse",
    projLink: "/projects/freetypingcamp",
    projGitHubURL: "https://github.com/suhas-sunder/typing-test-app",
    features: [
      "Built an interactive, user-friendly full-stack web application using React, TypeScript, Tailwind CSS, PostgreSQL, Node, and Express, enabling users to improve typing skills through an interactive, gamified learning experience.",
      "Hosted the web application on Digital Ocean, tracked user engagement through Google Analytics, and optimized security, performance, and reliability using Cloudflare, including SSL implementation and R2 API for file storage.",
      "Implemented secure login/authentication with JSON Web Token, configured CORS and other essential back-end middleware, and conducted comprehensive unit and integration testing using Vitest for back-end security.",
      "Utilized Adobe Firefly AI and Chat GPT to programmatically generate image and JSON text content for the website.",
    ],
    challenges: [
      "Initially, I encountered an issue where loading too many characters at once caused the application to crash. To resolve this, I implemented a solution to limit the amount of text rendered within the text area.",
      "Another challenge was hiding lines of text when the user completed typing more than two lines or showing hidden lines of text when user held the delete key. Initially, I attempted to estimate the width of each character using the Roboto font but encountered discrepancies due to rounding errors. To address this, I switched to a Monotype font and assigned a fixed width to each character, ensuring consistent line lengths and facilitating the addition or removal of lines based on user input.",
      "However, creating a responsive design without compromising the existing logic was another hurdle. I had to calculate the maximum length of each line based on the current screen width, dynamically adjusting the displayed text to maintain a maximum of two lines while accommodating varying screen sizes. This involved recalculating line lengths whenever the screen size changed to ensure the interface remained functional across different devices and resolutions.",
      "I encountered an issue where users could exploit the system by holding down a key, such as the space bar, to achieve a high score without completing the test properly. Initially, I considered implementing a modal pop-up to disqualify the test and prompt a reset when a user held any key for too long. However, I found this approach intrusive and detrimental to the user experience.", "Instead, I opted to listen to every key input and programmed the system to reject input, except for backspace, once a long keydown event was detected until a keyup event occurred. While this approach partially addressed the issue, it introduced a minor lag that affected the accuracy of user input, resulting in an unfair test experience.",
      "After exploring various solutions, I discovered that comparing the held keydown input to the last keyup input effectively prevented users from holding down keys while allowing normal typing behavior. This adjustment restored the test's functionality and prevented users from exploiting the system.",
      "Throughout the project, I encountered numerous challenges that required meticulous attention to detail and innovative problem-solving. Despite the app's seemingly simple appearance, it presented a myriad of complexities that significantly enhanced my problem-solving and programming skills. From creating a real-world application hosted live to implementing features such as manipulating text according to test difficulty presets, score tracking, and serving media and JSON files via Cloudflare R2 API, these experiences have broadened my technical capabilities and deepened my understanding of the fundamentals of programming, the nuances of using React and related technologies, user-centric design, and software development best practices."],
  },
  {
    id: uuidv4(),
    projId: "portfolio",
    title: "React Portfolio",
    description:
      "My personal portfolio website highlights my professional skills, accomplishments, and other relevant details, making it easy for potential employers to review. With easy access to my current resume, project details, links for seamless navigation, and a contact form, this portfolio presents a comprehensive overview of my work. Explore my portfolio to gain insights into my expertise and get in touch for exciting opportunities.",
    techStack: [
      "HTML5",
      "CSS3",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "GitHub",
      "Fetch API",
      "Responsive Design",
      "Netlify Hosting",
    ],
    year: "2023",
    endYear: "2024",
    imageURL: PortfolioUrl,
    projURL: "http://suhassunder.com/",
    projGitHubURL: "https://github.com/suhas-sunder/react-portfolio-proj",
    projCSS: "project-reverse",
    projLink: "/projects/reactportfolio",
    features: [
      "Tested, built, and maintained a mobile-responsive website using React, TypeScript, Tailwind CSS, Jest, and React Testing Library, to effectively highlight my personal and professional accomplishments as a software developer.",
    ],
    challenges:
      [
        "In early 2023, I constructed a basic landing page using React. Upon updating my portfolio in 2024, I identified and rectified several flaws in the project and encountered a few challenges while implementing my latest updates.",
        "I encountered an issue when I pasted my project page URL (Eg: /projects/dobsonpartners) directly into the search bar, the page would load with a 404 not found error thrown by Netlify, my hosting provider. Netlify would redirect all pages back to the home page instead of handling routing through my single page application, via an index.html file, using React Router. The solution was to add a _redirects.txt file to my application so that Netlify knows to redirect all routes back to the index.html file, allowing React Router to handle the route correctly.",
        "My initial CSS code was written using CSS modules, which was a bit cumbersome having switch between the .jsx and module.css files every time I had to make a styling change. So, I refactored almost all existing CSS code using Tailwind CSS, making it much easier to manage the styling. Similarly, to enhance type inference and reduce debugging time, I introduced TypeScript to the project.",
        "In 2024, as my skills list grew, it began to occupy more space on the page. To address this, I implemented a collapsible menu that toggles when clicked. Additionally, I utilized CSS grid to display all items responsively across various resolutions.",
        "In overcoming these challenges, I gained valuable experience in refactoring, troubleshooting, and optimizing my projects. Each obstacle presented an opportunity for growth and learning, ultimately leading to a more polished and efficient portfolio. Moving forward, I am better equipped to tackle similar issues and continue refining my skills as a developer."
      ],
  },
  {
    id: uuidv4(),
    projId: "atsproj",
    title: "All Track System",
    description:
      "The All Track System (ATS) official website offers detailed information about the ATS facilities management software built for Landlords and Contractors. Discover the powerful functionalities offered by the ATS software and mobile app, including a visual showcase of all features, as well as important information regarding the onboarding process for clients. ",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SASS",
      "GitHub",
      "AWS S3",
      "BEM Methodology",
      "Responsive Design",
      "Mobile-first",
    ],
    year: "2021",
    endYear: "2023",
    imageURL: ATSUrl,
    projURL: "https://alltracksystem.com/",
    projCSS: "project",
    projLink: "/projects/alltracksystem",
    features: [
      "Collaborated with designers and back-end team to refactor web application codebase, utilizing RESTful API endpoints, React, TypeScript, CSS modules and Tailwind CSS to create an improved UX, design, and functionality.",
      "Developed a responsive client-facing website using mobile-first design, ensuring code integrity and cooperative development through GitHub, delivering an excellent user experience.",
      "Applied BEM methodology to write maintainable HTML, CSS, JavaScript, and SASS code, crafting custom interactive designs that consistently exceeded client expectations.",
      "Conducted automated testing using Jest and React Testing Library, while implementing best practices for SEO, accessibility, and web safety to optimize performance, reliability, and search engine visibility.",
      "Crafted research-driven strategies to plan, present, and orchestrate large-scale software and app development, bolstering critical thinking skills and contributing to the successful launch of the startup.",
      "Engineered streamlined design solutions for intricate challenges, fostering engagement with partners, investors, and developers, which, in turn, contributed to the enhancement of my communication and teamwork proficiencies.",
    ],
    challenges:
      [],
  },
  {
    id: uuidv4(),
    projId: "emeproj",
    title: "EME Group Inc.",
    description:
      "The EME Group Inc. website provides clients with a clear understanding of the end-to-end consulting journey, detailed information about services offered, and a showcase of client projects categorized by industry. Additionally, the website features a comprehensive careers page that outlines available positions and their respective requirements. The contact page facilitates seamless communication through a contact form and an interactive map for easy navigation.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SASS",
      "GitHub",
      "A2 Hosting",
      "Google Maps API",
      "Responsive Design",
    ],
    year: "2021",
    endYear: "2022",
    imageURL: EMEUrl,
    projURL: "https://www.emegroup.ca/",
    projLink: "/projects/emegroupinc.",
    projCSS: "project",
    features: [
      "Created user-friendly websites with mobile-responsive design using HTML, CSS, JavaScript, SASS, GitHub, and Google Maps API, meeting all client requirements for an outstanding user experience.",
      "Launched a successful website for client’s initial online presence, expanding reach through effective SEO, accessibility, and content optimization, which resulted in over 35% increase in customer inquiries and engagement.",
      "Managed domain, hosting, and site maintenance, ensuring uninterrupted user access and UX for nearly three years.",
    ],
    challenges:
      [],
  },

  {
    id: uuidv4(),
    projId: "capstone",
    title: "Capstone SPArcDS",
    description:
      "SPArcDS is a prototype Arc Fault detection system designed to enhance home safety. When an Arc Fault is detected, SPArcDS promptly notifies the user through the SPArcDS mobile app and sends an SMS notification to all registered phone numbers. All notifications and relevant data are securely logged to a database for future reference. The SPArcDS mobile app enables users to wirelessly register new devices and view an activity log that provides detailed status updates for all registered SPArcDS devices.",
    techStack: [
      "Mobile App Development",
      "Arduino Programming",
      "GitHub",
      "MySQL",
      "Meeting Minutes",
      "Waterfall Management",
      "Corona SDK",
    ],
    year: "2019",
    imageURL: CapstoneUrl,
    projURL:
      "https://drive.google.com/file/d/1z6dohrhC-abm8A4o263mVjtBYkoRyOlJ/view?usp=sharing",
    projCSS: "project-reverse",
    projLink: "/projects/capstonesparcds",
    projProposal: "",
    features: [
      "Led a team of three students for capstone, utilizing GitHub for a collaborative and successful project outcome.",
      "Programmed an Arduino Arc Fault detection system and mobile app utilizing MySQL for real-time notifications.",
    ],
    challenges:
      [
        "In my role as team leader, I assumed various responsibilities, including documenting meeting minutes during our weekly meetings and overseeing the project and team using the waterfall method to meet project deadlines effectively. Additionally, I undertook the software development aspects of the project, which involved coding the Arduino to update a database and send SMS and mobile notifications upon detecting an Arc fault. Furthermore, I developed a mobile application to track notifications and facilitate synchronization of multiple arc fault detectors installed on various breakers in old homes.",
        "These responsibilities allowed me to develop comprehensive leadership and technical skills while ensuring the successful execution of the project. Through effective coordination and hands-on development, I contributed to the project's overall success and gained valuable experience in project management and software development. Moreover, drawing from my minor in management, I was able to apply strategic planning and organizational skills, further enhancing my contributions to the project.",
      ],
  },
];

export default ProjData;
