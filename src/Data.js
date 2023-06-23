import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

export const projects = [
  {
    title: "Airbnb Homepage Demo",
    subtitle: "React",
    stack: "JavaScript, HTML, CSS, React, Material UI",
    image: require("./Assets/project-1.gif"),
    link: "https://courageous-zabaione-f217d3.netlify.app/",
  },
  {
    title: "React-Demo-App",
    subtitle: "React",
    stack: "Javascript, SCSS, React, Redux, Thunk, Jest, Reqres",
    image: require("./Assets/project-2.gif"),
    link: "https://sparkling-bonbon-256338.netlify.app/",
  },
  // {
  //     title: "Airbnb Homepage Demo",
  //     subtitle: "MERN Stack",
  //     stack: "JavaScript, HTML/CSS, React, Material UI",
  //     image: "my-portfolio\public\project-1.gif",
  //     link: "https://courageous-zabaione-f217d3.netlify.app/"
  // },
];

export const languages = [
  "Javascript (ES6)",
  "React.js",
  "Node.js",
  "HTML5",
  "CSS",
];

export const libraries = ["Tailwind.CSS", "Bootstrap", "SCSS", "Material UI"];

export const misc = ["MySQL", "Jest", "RESTful API", "Git", "Netlify"];

export const social = [
  {
    icon: (
      <a
        href="https://github.com/HonarchianMonte"
        target="_blank"
        rel="noreferrer"
        title="Github"
        className="m-4 text-green-400"
      >
        <GitHubIcon sx={{ fontSize: 35 }} />
      </a>
    ),
  },
  {
    icon: (
      <a
        href="https://www.linkedin.com/in/monte-honarchian/"
        target="_blank"
        rel="noreferrer"
        title="Linkedin"
        className="m-4 text-green-400"
      >
        <LinkedInIcon sx={{ fontSize: 35 }} />
      </a>
    ),
  },
];

export const Educate = [
  {
    school: "Coding Dojo",
    cert: "Full-Stack Development Certification",
    description:
      "4-month full-stack web development boot camp specializing in Python, Java, & MERN (MongoDB, Express, React, Node.js) Spent 1000+ hours on intensive course work through all phases of project development of full-stack applications, including building, testing, debugging, and deploying Worked and collaborated in daily remote scrums with my cohort for project development and assignment completion ",
    diploma: require("../src/Assets/dojo.png"),
  },
  {
    school: "University of California, Irvine",
    cert: "Bachelor of Arts, Political Science",
    description: "Did my undergrad with a specailty in American Politics ",
    diploma: require("../src/Assets/bachelors.png"),
  },
];

const ReadMoreReadLess = ({ limit, children }) => {
  const text = children || ""; // Assign an empty string if `children` is undefined or null
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const shouldShowButton = text.length > limit; // Check if the text exceeds the character limit

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };
  return (
    <div className="read-more-read-less">
      {isReadMoreShown ? text : text.substring(0, limit)}
      {shouldShowButton && (
        <button onClick={toggleBtn} className="text-white">
          {isReadMoreShown ? " ...Read Less" : " ...Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreReadLess;
