import './Friends.css'
import { motion } from "framer-motion";

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

export default function Friends() {
  return (
    <motion.div className="friendscontainer" variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
    <h1>friends.map()</h1>
    <container className="samplecontainer">
      <div className="friendssample"></div>
      <p>
       friends.map() is a convenient travel companion that helps to keep you and your groups safe and organized in unfamiliar places while protecting your privacy.
      </p>
    </container>

    <div className="links">
      <a href="https://friends-dot-map.netlify.app/">Deployed Site</a>
      <a href="https://github.com/friends-dot-map">Github</a>
    </div>
  </motion.div>
  )
}
