import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative w-screen min-h-screen bg-[#000000]">
      <div className="py-20 w-[70%] mx-auto">
        <div className="my-12 flex justify-between">
          <h1 className="text-[72px] leading-[72px]">
            Let's Work <br /> together
          </h1>
          <div className="relative">
            <p className="mb-12 text-[56px]">{"<-"}</p>
            <motion.button
              className="absolute text-sm bottom-[-140px] right-12 w-[120px] h-[120px] flex justify-center items-center rounded-full text-[#ffffff] bg-[#0b35a7]"
              whileHover={{
                x: [-10, 0, 10, 0],
                y: [-10, 0, 10, 0],
                backgroundColor: ["#0b35a7", "#24408b", "#0b35a7"],
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Get in touch
            </motion.button>
          </div>
        </div>
        <hr className="my-20" />
        <div className="flex gap-6">
          <motion.button
            drag
            className="border border-[#fff] py-4 px-6 rounded-full"
          >
            javedhussain.dev@gmail.com
          </motion.button>
          <motion.button className="border border-[#fff] py-4 px-6 rounded-full">
            +92 343 1631551
          </motion.button>
        </div>

        <ul className="absolute bottom-8 flex gap-8 font-light">
          <motion.li
            whileHover={{ x: [-10, 0, 10, 0], transition: { duration: 0.5 } }}
          >
            <Link to={"/"}>Github</Link>
          </motion.li>
          <motion.li
            whileHover={{ x: [-10, 0, 10, 0], transition: { duration: 0.5 } }}
          >
            <Link>LinkedIn</Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
