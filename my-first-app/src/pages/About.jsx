import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <p>Project developed by students.</p>
      <p>
        Find more projects on{" "}
        <a href="https://github.com" className="text-blue-500">
          GitHub
        </a>{" "}
        and{" "}
        <a href="https://linkedin.com" className="text-blue-500">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default About;
