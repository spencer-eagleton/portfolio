import "./Projects.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: 600,
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.3, delay: 0.3 },
  },
  exit: {
    y: 600,
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
        <div>
          <div className="resourcerylogo"></div>
        </div>
        <div>
          <div className="yahfoodlogo"></div>
        </div>
        <div>
          <div className="friendslogo"></div>
        </div>
      </motion.div>
    </div>
  );
}
