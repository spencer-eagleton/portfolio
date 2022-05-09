import './Yahfood.css'
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


export default function Yahfood() {
  return (
    <motion.div className="yahfoodcontainer" variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
      <h1>Yahfood</h1>
      <div className="samplecontainer">
        <div className="yahfoodsample"></div>
        <p>
      <div className="links">
        <a href="https://hopeful-curie-14d366.netlify.app/">Website</a>
        <a href="https://github.com/Yah-food">Github</a>
      </div>
          Yah-Food is a fun, simple, and creative app that helps the user
          discover new foods based on the ingredients they already have. It
          offers a small featured recipe section, ability to favorite certain
          recipes, and create your own recipes. This App is suited for mobile
          use.
        </p>
      </div>

    </motion.div>
  );
}
