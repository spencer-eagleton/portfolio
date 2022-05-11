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
    exit="exit">
      <div className='contactitem'>
        <h3>Location</h3>
        <h2>Portland, OR</h2>
      </div>
      <div className='contactitem'>
        <h3>Phone</h3>
        <h2>940-390-9141</h2>
      </div>
      <div className='contactitem'>
        <h3>Email</h3>
        <h2>eagletonspencer@gmail.com</h2>
      </div>
      <div className='contactitem'>
      <a href="https://github.com/spencer-eagleton">Github</a>
      </div>
      <div href={'www.linkedin.com/in/spencer-eagleton'} className='contactitem'>
        <a href="https://www.linkedin.com/in/spencer-eagleton/">LinkedIn</a>      </div>
    </motion.div>
  )
}
