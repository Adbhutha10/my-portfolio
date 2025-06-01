import {
  mobile,
  backend,
  creator,
  web,
  bc,
  ebs,
  tp,
  java,
  firebase,
  mysql,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "BVRIT Connect",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bc,
    source_code_link: "https://github.com/Adbhutha10/BVRIT-Connect",
  },
  {
    name: "Event Ticket Booking System",
    description:
      "A web application that allows users to search for events, book tickets, and manage their bookings, providing a seamless experience for event enthusiasts.",
    tags: [
      {
        name: "javax swings",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },
    ],
    image: ebs,
    source_code_link: "https://github.com/Adbhutha10/Event-Ticket-Booking-System",
  },
  {
    name: "Trip Planner",
    description:
      "A modern travel planning platform that helps users organize itineraries, explore activities, check weather forecasts, and access essential emergency information—all in one place",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "leaflet",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: tp,
    source_code_link: "https://github.com/Adbhutha10/Trip-Planner",
  },
];

const education = [
  {
    title: "B.Tech in Computer Science Engineering",
    company_name: "B. V. Raju Institute of Technology, Narsapur",
    date: "2023 - Present",
    points: [
      "CGPA: 9.74"
    ]
  },
  {
    title: "Intermediate - MPC",
    company_name: "IIIT Rgukt Basar",
    date: "2021-2023",
    points: [
      "CGPA: 9.43"
    ]
  },
  {
    title: "10th - ICSE",
    company_name: "Sri Sai Public School, Patancheru",
    date: "2017-2021",
    points: [
      "Percentage: 96.5%"
    ]
  },
];


export { services, technologies, projects, education };
