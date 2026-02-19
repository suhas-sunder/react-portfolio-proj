// app/data/ProjData.ts (or your existing path)
import CapstoneUrl from "../assets/capstone-proj-screenshot.jpg";
import EMEUrl from "../assets/eme-website-screenshot.jpg";
import ATSUrl from "../assets/ats-website-screenshot.jpg";
import FreeTypingCampUrl from "../assets/free-tying-camp.png";
import iLoveSvgUrl from "../assets/i_love_svg.jpg";
import MorseWordsUrl from "../assets/morse_words.jpg";
import RentConverterUrl from "../assets/rent_converter.jpg";
import SensorPlannerUrl from "../assets/sensor_planner.jpg";
import MiniFeatureVizUrl from "../assets/feat_visualizer.jpg";

const ProjData = [
  {
    id: "smarthomesensorplanner",
    projId: "sensorplanner",
    title: "Smart Home Sensor Planner",
    description:
      "IoT planning and simulation platform to model smart home sensor placement, connectivity, and context-aware behavior.",
    techStack: [
      "React",
      "Python",
      "REST APIs",
      "Relational Database",
      "Simulation",
      "PSO-GA Optimization",
      "HouseExpo Dataset",
    ],
    imageURL: SensorPlannerUrl,
    projURL: "https://www.sensorplanner.com",
    projCSS: "project",
    projLink: "/projects/smarthomesensorplanner",
    projGitHubURL: "https://github.com/suhas-sunder/sensor-planner",
    features: [],
    challenges: [],
  },
  {
    id: "featurevariabilityvisualizer",
    projId: "featviz",
    title: "Feature Variability Visualizer",
    description:
      "Software systems modeling tool for visualizing mandatory, optional, and alternative features with searchable hierarchies and constraint highlighting.",
    techStack: [
      "JavaScript",
      "Graph Visualization",
      "Data Parsing",
      "Accessibility",
      "Responsive UI",
    ],
    imageURL: MiniFeatureVizUrl,
    projURL: "https://mini-feat.netlify.app",
    projCSS: "project",
    projLink: "/projects/featurevariabilityvisualizer",
    projGitHubURL:
      "https://github.com/Chao-Meng/Group6-mini-variability-visualizer",
    features: [],
    challenges: [],
  },
  {
    id: "alltracksystem",
    projId: "atsproj",
    title: "All Track System",
    description:
      "Marketing site for facilities management software, with feature overview and onboarding information.",
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
    imageURL: ATSUrl,
    projURL: "https://alltracksystem.com/",
    projCSS: "project",
    projLink: "/projects/alltracksystem",
    features: [],
    challenges: [],
  },
  {
    id: "emegroupinc",
    projId: "emeproj",
    title: "EME Group Inc.",
    description:
      "Consulting firm website with services, careers, and contact flow including an interactive map.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SASS",
      "GitHub",
      "Google Maps API",
      "Responsive Design",
    ],
    imageURL: EMEUrl,
    projURL: "https://www.emegroup.ca/",
    projCSS: "project",
    projLink: "/projects/emegroupinc.",
    features: [],
    challenges: [],
  },
  {
    id: "freetypingcamp",
    projId: "ftcproj",
    title: "Free Typing Camp",
    description:
      "Full-stack typing platform with gamified progression, unlockables, and account-based progress tracking.",
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
      "Google Analytics",
    ],
    imageURL: FreeTypingCampUrl,
    projURL: "https://freetypingcamp.com/",
    projCSS: "project-reverse",
    projLink: "/projects/freetypingcamp",
    projGitHubURL: "https://github.com/suhas-sunder/typing-test-app",
    features: [],
    challenges: [],
  },
  {
    id: "capstonesparcds",
    projId: "capstone",
    title: "Capstone SPArcDS",
    description:
      "Prototype arc fault detection system with mobile app notifications and activity logging.",
    techStack: [
      "Arduino Programming",
      "Mobile App Development",
      "MySQL",
      "GitHub",
      "Waterfall Management",
    ],
    imageURL: CapstoneUrl,
    projURL:
      "https://drive.google.com/file/d/1z6dohrhC-abm8A4o263mVjtBYkoRyOlJ/view?usp=sharing",
    projCSS: "project-reverse",
    projLink: "/projects/capstonesparcds",
    projProposal: "",
    features: [],
    challenges: [],
  },

  // --- Additional projects (no tech stack shown) ---
  {
    id: "morsewords",
    projId: "morsewords",
    title: "Morse Words",
    description:
      "Morse code translation and practice tool for learning, training, and decoding messages.",
    techStack: [], // intentionally omitted
    imageURL: MorseWordsUrl,
    projURL: "https://morsewords.com",
    projCSS: "project",
    projLink: "/projects/morsewords",
    features: [],
    challenges: [],
  },
  {
    id: "rentconverter",
    projId: "rentconverter",
    title: "Rent Converter",
    description:
      "Calculator tool to help renters compare and convert rent across different payment frequencies.",
    techStack: [], // intentionally omitted
    imageURL: RentConverterUrl,
    projURL: "https://rentconverter.com",
    projCSS: "project",
    projLink: "/projects/rentconverter",
    features: [],
    challenges: [],
  },
  {
    id: "ilovesvg",
    projId: "ilovesvg",
    title: "iLoveSVG",
    description:
      "Collection of simple SVG utilities for optimizing, converting, and working with vector assets.",
    techStack: [], // intentionally omitted
    imageURL: iLoveSvgUrl,
    projURL: "https://ilovesvg.com",
    projCSS: "project",
    projLink: "/projects/ilovesvg",
    features: [],
    challenges: [],
  },
];

export default ProjData;
