import "./About.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: 700,
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.3, delay: 0.3 },
  },
  exit: {
    x: 700,
    transition: { type: "tween", duration: 0.3 },
  },
};

export default function About() {
  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></motion.div>
  );
}
