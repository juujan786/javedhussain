import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const menuBtnScale = useTransform(scrollY, [0, 200, 250], [0, 0, 1]);

  const handleMenuClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <div className="relative flex justify-between w-[95%] md:w-[90%] m-auto py-5">
      <motion.span
        whileHover={{ x: [-10, 0, 10, 0], transition: { duration: 0.5 } }}
      >
        <Link to={"/"}>Javed Hussain</Link>
      </motion.span>
      <ul className="relative flex gap-8 font-light">
        <motion.li
          whileHover={{ x: [-10, 0, 10, 0], transition: { duration: 0.5 } }}
        >
          <Link to={"about"}>About</Link>
        </motion.li>
        <motion.li
          whileHover={{ x: [-10, 0, 10, 0], transition: { duration: 0.5 } }}
        >
          Work
        </motion.li>
        <motion.li
          whileHover={{ x: [-10, 0, 10, 0], transition: { duration: 0.5 } }}
        >
          Contact
        </motion.li>
        <motion.span
          onClick={handleMenuClick}
          whileHover={{ backgroundColor: "#103bb4" }}
          // translate={{}}
          style={{ scale: menuBtnScale }}
          className="border border-[#fff] text-[42px] z-10 font-light cursor-pointer flex justify-center items-center w-20 h-20 rounded-full fixed top-6 right-12 bg-[#000]"
        >
          {isOpen ? "X" : "="}
        </motion.span>
      </ul>
    </div>
  );
};

export default Navbar;
