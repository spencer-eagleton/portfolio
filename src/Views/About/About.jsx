import "./About.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: 1250,
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.3, delay: 0.5 },
  },
  exit: {
    x: 1250,
    transition: { type: "tween", duration: 0.2 },
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
