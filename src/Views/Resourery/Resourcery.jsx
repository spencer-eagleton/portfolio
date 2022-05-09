import "./Resourcery.css";
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

export default function Resourcery() {
  return (
    <motion.div className="resourcerycontainer" variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
      <h1>Resourcery</h1>
      <container className="samplecontainer">
        <div className="resourcerysample"></div>
        <p>
      <div className="links">
        <a href="https://resourcery-resourcery.netlify.app/">Website</a>
        <a href="https://github.com/resourcery-final-project">Github</a>
      </div>
          Resourcery is a mutual-aid web app that enables people to support
          others directly with free resources on a personnal level. Users are
          able to post anything from free food, pet supplies, camping supplies
          to services for those in need. Built with Google Maps API, ReactJS,
          CSS, PostgreSQL and Express. Users can choose a populated address from
          Google Places autofill or place a marker on the map with a click.
        </p>
      </container>

    </motion.div>
  );
}
