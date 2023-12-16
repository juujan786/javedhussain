import React from "react";

const Projects = () => {
  return (
    <section className="z-20 w-full min-h-screen bg-[#fff] text-[#000]">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between w-[80%] mx-auto py-16">
          <p className="text-2xl font-light w-[55%]">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </p>
          <p className="w-[30%] text-[#2e2e2e]">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </div>
        <div className="flex justify-between items-end w-[80%] mx-auto">
          <p className="font-light text-[#2e2e2e]">Recent Work</p>
          <button className="w-[100px] h-[100px] flex justify-center items-center rounded-full text-[#fff] bg-[#000]">
            About Me
          </button>
        </div>
        <hr className="my-8 bg-[#494848]" />
        <div className="w-[80%] mx-auto">
          <h1 className="text-[54px]">Project Name</h1>
        </div>
        <hr className="my-8 bg-[#494848]" />
        <div className="flex justify-center">
          <button className="border border-[#000] py-4 px-6 rounded-full">
            More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
