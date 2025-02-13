import React from "react";

function About() {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">About This Project</h2>
      <p className="text-lg text-gray-700">
        This project was created by a team of developers passionate about
        cooking and web development.
      </p>
      <div className="mt-6">
        <a
          href="https://github.com/Kyomar97"
          className="text-blue-600 hover:underline mx-2"
        >
          GitHub
        </a>
        <a
          href="www.linkedin.com/in/sebna-omar-gutiérrez-rodríguez-7099231b3"
          className="text-blue-600 hover:underline mx-2"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
