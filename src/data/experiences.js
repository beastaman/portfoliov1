import skillvertex from "../assets/images/skillvertex.jpg";
import csi from "../assets/images/csi.jpg";
import imagineit from "../assets/images/imagineit.jpg";
import cloud4c from "../assets/images/cloud4c.jpg";

import { blue, green, pink, yellow } from "../utils";

export const experiences = [
  {
    logo: cloud4c,
    name: "Cloud4C",
    joined: "Dec'23",
    end: "Present",
    title: "Software Engineer",
    bio: "Used Node.js with Express.js for backend authentication and rate limiting, MySQL for database management, and Postman for API testing. Optimized React.js frontend to eliminate re-renders, developed an admin panel for data visualization and transaction management, and utilized Figma for web design. Also worked with Python, Django, and Flask",
    color: blue,
  },
  {
    logo: imagineit,
    name: "Imagine IT",
    joined: "Dec'22",
    end: "Dec'23",
    title: "Junior Frontend Developer",
    bio: "Managed UI/UX with HTML, CSS, JavaScript, and React.js, optimizing web app performance through reusable components and unit testing.",
    color: green,
  },
  {
    logo: skillvertex,
    name: "SkillVertex",
    joined: "July'22",
    end: "Dec'22",
    title: "Web Developer Intern",
    bio: "Worked on various projects from basic static sites,use figma to design web pages, build some basic static pages using html,css and js to dynamic complex websites using ReactJS, Built Rest API's for various use cases",
    color: yellow,
  },
  {
    logo: csi,
    name: "CSI",
    joined: "Sept'18",
    end: "July'22",
    title: "Technical Lead",
    bio: "In CSI(Computer Society Of India) we introduce hackathons, conecptual understanding of programing and also conduct coding challenges.We also club with Robotics and A.I and have developed collaborative skills. Built some amazing and innovative projects.",
    color: pink,
  },
];
