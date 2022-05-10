import './Contact.css'
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


export default function Contact() {
  
  return (
    <motion.div className="contact"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">Contact</motion.div>
  )
}
