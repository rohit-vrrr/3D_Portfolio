import {
  web,
  frontend,
  backend,
  fullstack,
  html,
  css,
  javascript,
  typescript,
  nodejs,
  angular,
  reactjs,
  tailwind,
  mongodb,
  threejs,
  git,
  figma,
  docker,
  philips,
  techtologics,
  nec,
  memento,
  stringchat,
  anonymousio,
  keeper,
  newsletter,
  blog,
  upbeat,
  tapztap,
  madbird
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Memento",
    description:
      "Social media platform built with the MERN stack, enabling users to share memorable life events, manage posts, and interact through a responsive and dynamic social experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "oauth2",
        color: "pink-text-gradient",
      },
    ],
    image: memento,
    source_code_link: "https://github.com/rohit-vrrr/memories-project",
  },
  {
    name: "String",
    description:
      "A real-time anonymous chat application allowing users to create or join chat rooms for seamless, low-latency group conversations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
    ],
    image: stringchat,
    source_code_link: "https://github.com/rohit-vrrr/Chat-App",
  },
  {
    name: "Anonymous.io",
    description:
      "An anonymous social sharing platform inspired by Whisper, enabling users to post and explore messages securely with backend-driven content management.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: anonymousio,
    source_code_link: "https://github.com/rohit-vrrr/Anonymous.io",
  },
  {
    name: "Keeper",
    description:
      "Designed for quick note management, letting users create, organize, and store notes with smooth UI interactions and dynamic rendering.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: keeper,
    source_code_link: "https://github.com/rohit-vrrr/Keeper-App",
  },
  {
    name: "Newsletter",
    description:
      "A subscription-based web application integrated with Mailchimp APIs to collect user details and sync them directly to Mailchimp audiences.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mailchimp",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: newsletter,
    source_code_link: "https://github.com/rohit-vrrr/Newsletter-Web-App",
  },
  {
    name: "Blog Website",
    description:
      "A customizable EJS-based blogging template with dynamic routing and reusable layouts, enabling quick deployment with minimal configuration.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/rohit-vrrr/Blog-Website",
  },
  {
    name: "UpBeat",
    description:
      "Brings an interactive drum kit to the browser using JavaScript and DOM events, enabling sound playback through keyboard and click actions.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "dom",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: upbeat,
    source_code_link: "https://github.com/rohit-vrrr/Drums-UpBeat-Web-Dev",
  },
  {
    name: "Tap-Z-Tap",
    description:
      "An endless Unity-based arcade game where players control a ball with single-tap mechanics to navigate an infinite zigzag path.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: tapztap,
    source_code_link: "https://github.com/rohit-vrrr/Tap-Z-Tap-Game",
  },
  {
    name: "Mad Bird",
    description:
      "A Unity arcade game inspired by Flappy mechanics, featuring physics-based movement, obstacle avoidance, and real-time score tracking.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: madbird,
    source_code_link: "https://github.com/rohit-vrrr/Mad-Bird-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
