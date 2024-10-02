import {
    mobile,
    backend,
    creator,
    web,
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
    uoi,
    jobit,
    shopify,
    carrent,
    bee,
    tripguide,
    threejs,
    uni,
    githubPage,
    tesla
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "3D Designer",
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
    }
  ];
  
  const experiences = [
    {
      title: "Computer Science and Engineering",
      company_name: "University of Ioannina",
      icon: uoi,
      iconBg: "#000000",
      date: "September 2016 - September 2023",
      points: [
        "BSc & MSc in Computer Science and Engineering",
        "Implemented thesis with title 'Incremental cycle detection and topological ordering'",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Unisystems",
      icon: uni,
      iconBg: "#ffffff",
      date: "Oct 2022 - December 2022",
      points: [
        "Implemented applications, focusing on mobile development with React Native.",
        "Assisted in documentation efforts by creating detailed documentation for new features and functionalities."
      ],
    },
    {
      title: "Junior Software Engineer",
      company_name: "Unisystems",
      icon: uni,
      iconBg: "#ffffff",
      date: "December 2022 - September 2024",
      points: [
        "Utilized modern technologies including Spring Boot, TypeScript, Node.js, Swift, Kotlin, Redux, Firebase, Android Studio, XCode and React.js to enhance application functionality",
        "Developed and maintained cross-platform mobile applications using React Native, optimizing UI/UX and ensuring seamless performance across both iOS and Android platforms",
        "Utilized Azure AD to ensure secure authentication for all the applications",
        "Gained experience in deploying and publishing enterprise applications"
      ],
    }
  ];
  

  const testimonials = [];
  const projects = [
    {
      name: "Tesla Clone",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "styled",
          color: "pink-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/kostger/tesla-clone",
    },
    {
      name: "Bee",
      description:
        "Concept web application stating reasons why bees are cool in a... cool way!",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: bee,
      source_code_link: "https://github.com/kostger/bee",
    },
    {
      name: "My Github Page",
      description:"Check out all of my public repositories on my github page!",
      tags: [
        
      ],
      image: githubPage,
      source_code_link: "https://github.com/kostger",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // }
  ];
  
  export { services, technologies, experiences, testimonials, projects };