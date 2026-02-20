import {
  web,
  frontend,
  backend,
  fullstack,
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
  philips,
  techtologics,
  nec,
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
    title: "Angular / React Developer",
    icon: frontend,
  },
  {
    title: "Node.js Backend Developer",
    icon: backend,
  },
  {
    title: "MEAN / MERN Stack Developer",
    icon: fullstack,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern - Node.js Developer",
    company_name: "Philips India Ltd.",
    icon: philips,
    iconBg: "#FFFFFF",
    date: "Aug 2019 - July 2020",
    points: [
      "Developed a serverless architecture using AWS SAM to capture and analyze regulatory-compliant audit logs leveraging Amazon Kinesis, AWS Lambda, and Amazon CloudWatch.",
      "Built secure and scalable RESTful APIs to handle high-volume data uploads to Amazon S3, ensuring data integrity, performance optimization, and fault tolerance.",
      "Designed and implemented a simulator application to test and validate cloud-based infrastructure within a regulatory-compliant environment.",
      "Automated infrastructure provisioning and deployment using Infrastructure as Code (IaC) practices, improving release efficiency, consistency, and compliance adherence across environments.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "TechToLogics",
    icon: techtologics,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Full-Stack Developer with expertise in Node.js, React.js, Express.js, and MongoDB, building scalable web applications and RESTful APIs for authentication, user management, and data storage.",
      "Designed and deployed applications on AWS (Route53, Amplify, Elastic Beanstalk, CodePipeline, CodeBuild, CloudFront, S3) with monitoring and log management.",
      "Implemented secure authentication using JWT, integrated Nodemailer for email services and Twilio for SMS notifications.",
      "Developed pre-launch and production-ready applications with responsive UI using HTML5, SCSS, and CSS3, ensuring secure signup and manual verification workflows.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NEC Software Solutions",
    icon: nec,
    iconBg: "#FFFFFF",
    date: "Dec 2021 - Present",
    points: [
      "Engineered device onboarding and configuration workflows using the OS2IOT framework, enabling seamless remote lifecycle management for MQTT and LoRaWAN sensors.",
      "Developed the \"Context Broker Toolkit\" using Angular & Node.js to monitor real-time sensor data streams and integrated IoT platforms using FIWARE for enhanced data visualization.",
      "Contributed to the Open-Source community via OS2IoT and QuantumLeap, improving time-series database functionalities.",
      "Designed comprehensive UI/UX frameworks in Figma to streamline the user interface for monitoring dashboards.",
      "Architected a supplier hierarchy system to ensure EU regulation compliance and prevent social dumping, supporting UN Sustainable Development Goals.",
      "Developed core, reusable UI components using Angular 16, TypeScript, and Storybook, ensuring design consistency across the platform.",
      "Optimized data retrieval by implementing efficient GraphQL queries and integrated BPMN processes for complex backend workflows.",
      "Enhanced team productivity by identifying and integrating specialized third-party NPM packages for document compliance and state management."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
