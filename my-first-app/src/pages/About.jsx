import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold bg-black">About</h1>
      <p>
        Project developed during the bootcamp with the aim of gaining fluency
        and integrating the knowledge learned about React. It consists of
        creating your first single-page application SPA.
      </p>
      <p>
        Find more projects on{"https://github.com/Kyomar97"}
        <a href="https://github.com" className="text-blue-500">
          GitHub
        </a>{" "}
        and{"www.linkedin.com/in/sebna-omar-gutiérrez-rodríguez-7099231b3 "}
        <a href="https://linkedin.com" className="text-blue-500">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default About;
