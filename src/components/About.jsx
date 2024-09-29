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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, x``
          animi est quis libero perspiciatis qui reiciendis sit labore eos vitae
          odio maiores perferendis necessitatibus voluptatem optio dolor in
          repellat a amet temporibus voluptatum ratione! Ab laudantium numquam
          impedit et eos asperiores inventore velit aspernatur culpa sint.
          Impedit commodi distinctio saepe?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil
          inventore placeat amet nesciunt. Sed quo, quibusdam adipisci impedit
          ad voluptates voluptatem, eum, veniam maiores est velit. Explicabo
          quaerat aspernatur debitis corporis! Blanditiis nisi, praesentium
          nesciunt minima, qui vitae quo esse vero in velit sit saepe quae
          dolorem doloremque eveniet.
        </p>
      </div>
    </div>
  );
};

export default About;
