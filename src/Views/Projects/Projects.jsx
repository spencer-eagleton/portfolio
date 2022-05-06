import "./Projects.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: 700,
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.3, delay: 0.6 },
  },
  exit: {
    y: 700,
    transition: { type: "tween", duration: 0.3 },
  },
};

export default function Projects() {
  return (
    <div>
      <motion.div
        className="projects"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="featuredproject"></div>
        <div className="icons">
          <div className="resourcerylogo"></div>
          <div className="yahfoodlogo"></div>
          <div className="friendslogo"></div>
        </div>
      </motion.div>
    </div>
  );
}
