import { motion } from "framer-motion";

const RunningText = () => {
  return (
    <motion.h1
      className="text-[120px] font-light"
      initial={{ x: "-100vw" }}
      animate={{ x: "100vw" }}
      exit={{ x: "200vw" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      - JAVED HUSSAIN -
    </motion.h1>
  );
};

export default RunningText;
