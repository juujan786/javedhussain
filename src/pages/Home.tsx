import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import RunningText from "../components/RunningText";
import Projects from "../components/Projects";

const projects: any[] = [];

const HomePage = () => {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  // const [scope, animate] = useTransform(scrollY, [], []);
  return (
    <div className="relative">
      <section className="relative h-[600px] flex justify-center items-end">
        <div>
          <motion.img
            style={{ y: yHero }}
            transition={{ stiffness: 500 }}
            className="w-[400px] mt-[200px] z-0"
            src="hero1.png"
            alt=""
          />
        </div>
        <div className="absolute top-0 h-full w-screen overflow-hidden flex justify-end gap-16 items-center">
          <span className="absolute left-0 border-4 border-[#dad3d3] rounded-r-full bg-[#141414] flex justify-between items-center py-4 px-6 pl-16">
            <p className="text-xl">
              Located in Islamabad, <br />
              Pakistan
            </p>
            <img className="w-16 ml-4" src="web.png" alt="" />
          </span>
          <h1 className="text-4xl font-light mr-20">
            <p className="mb-12">{"->"}</p>
            <p>
              Freelance <br /> Web Developer
            </p>
          </h1>
        </div>
        <div className="flex absolute bottom-6">
          <RunningText />
        </div>
      </section>
      <Projects />
      <section
        // ref={ref}
        // style={
        //   {
        //     // scale: scrollYProgress,
        //     // opacity: scrollYProgress,
        //   }
        // }
        className="min-h-screen bg-[#fff]"
      >
        <div className="w-[1500px] mx-auto">
          <motion.div
            ref={ref}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            className="flex gap-8"
          >
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
          </motion.div>
          <div className="flex gap-8 mt-8 min-w-screen">
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
            <div className="h-[270px] w-[380px] border-x-[20px] border-y-[30px] border-[#999D9E]">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
