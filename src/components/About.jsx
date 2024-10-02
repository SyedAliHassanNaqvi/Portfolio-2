import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-16">
          I am a passionate web developer with a solid foundation in HTML, CSS,
          and JavaScript. Initially, I built projects like Tic-Tac-Toe,
          Rock-Paper-Scissors, and an Amazon clone to strengthen my skills. As I
          advanced, I expanded my expertise by learning frameworks like Tailwind
          CSS and libraries like React JS, which allowed me to take my projects
          to the next level.
        </p>

        <br />

        <p className="text-xl">
          T With React and tools such as React Router, along with API
          integration, I’ve built optimized and dynamic applications. Some of my
          projects include a password generator, a sample website, and a
          currency converter that utilizes live API data.
        </p>
      </div>
    </div>
  );
};

export default About;
