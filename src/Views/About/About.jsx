import "./About.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: 5050,
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.3, delay: 0.5 },
  },
  exit: {
    x: 5050,
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
    >      
      <h1>Hi, I'm Spencer!</h1>
      <div className="bio">
        <div className="headshot"></div>
        <p className="bioparagraph">
          I'm a full-stack software engineer based in Portland. I create web applications
          with efficient and clean code. I love learning new languages and
          frameworks that allow me to expand my tech stack.
        </p>
      </div>
      <div className="linkeroos">
        <a href="https://github.com/spencer-eagleton">Github</a>
        <a href="https://www.linkedin.com/in/spencer-eagleton/">LinkedIn</a>
      </div>
    </motion.div>
  );
}
