import "./Header.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.div
      className="header"
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <nav className="nav">
        <Link to="/projects">
          <h3>Projects</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </nav>
      <h1 className="title">Spencer Eagleton</h1>
    </motion.div>
  );
}
