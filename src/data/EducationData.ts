export interface EducationItemType {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduation: string;
  highlights: string[];
}

const EducationData: EducationItemType[] = [
  {
    id: "masters-degree",
    degree:
      "Master’s Degree in Electrical and Computer Engineering (4.21/4.30 GPA)",
    institution: "Ontario Tech University",
    location: "Oshawa, ON, Canada",
    graduation: "December 2025",
    highlights: [
      "Relevant coursework: Programming Methods & Abstraction, Foundations of Software Engineering, Advanced Optimization, Pervasive & Mobile Computing, Advanced Engineering Mathematics, Project Management for Engineers",
      "Orientation Leader: Fall 2025 multi-day orientation, supporting campus-wide onboarding for 2,300+ incoming students.",
      "Engineering Planning Project Team Lead: Led a 7-member team using the Waterfall methodology to delegate work, run weekly progress meetings, resolve conflicts, and keep deliverables on schedule; represented the team in meetings with the professor and presented the final plan.",
    ],
  },
  {
    id: "bachelors-degree",
    degree:
      "Bachelor’s Degree in Electrical Engineering and Management (Honours)",
    institution: "Ontario Tech University",
    location: "Oshawa, ON, Canada",
    graduation: "May 2019",
    highlights: [
      "Capstone Project Team Lead: Led a 3-person team developing an embedded fault-detection system, built a mobile app for receiving fault notifications, used SQL to manage notification records, and configured IFTTT to automate SMS alerts.",
    ],
  },
];

export default EducationData;
