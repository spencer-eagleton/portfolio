import "./Projects.css";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Resourcery from "../Resourery/Resourcery";
import Friends from "../Friends/Friends";
import Yahfood from "../Yahfood/Yahfood";

const containerVariants = {
  hidden: {
    y: 1000,
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.3, delay: 0.6 },
  },
  exit: {
    y: 1000,
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
        <div className="featuredproject">
          <Routes>
          {/* <Resourcery /> */}
            
            <Route path="resourcery" element={<Resourcery />} />
            <Route path="friends" element={<Friends />} />
            <Route path="yahfood" element={<Yahfood />} />
          </Routes>
        </div>

        <div className="icons">
          <div className="resourcerylogo"></div>
          <div className="yahfoodlogo"></div>
          <div className="friendslogo"></div>
        </div>
      </motion.div>
    </div>
  );
}
