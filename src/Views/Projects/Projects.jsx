import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import Resourcery from "../Resourery/Resourcery";
import Friends from "../Friends/Friends";
import Yahfood from "../Yahfood/Yahfood";
import { useTheme } from "../../Hooks/useTheme";


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
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <motion.div
        className={`projects ${theme}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="featuredproject">
          <AnimatePresence>
          <Routes >            
              <Route path="/" element={<Resourcery />} />
              <Route path="friends" element={<Friends />} />
              <Route path="yahfood" element={<Yahfood />} />
            </Routes>
          </AnimatePresence>
        </div>
        <div className="icons">
          <Link to={'/projects/'} className="resourcerylogo" onClick={toggleTheme}></Link>
          <Link to={'/projects/yahfood'} className="yahfoodlogo" onClick={toggleTheme}></Link>
          <Link to={'/projects/friends'} className="friendslogo" onClick={toggleTheme}></Link>
        </div>
      </motion.div>
    </div>
  );
}
