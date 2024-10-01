import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <p className={styles.sectionSubText}>Email:<span className="lowercase"> kostger2@gmail.com</span> </p>
      <a className={styles.sectionSubText} href="https://www.linkedin.com/in/konstantinos-gerogiannis-108804151/" target="_blank">LinkedIn</a>
      <p className={styles.sectionSubText}>Phone:<span> +30 6947137227</span></p>
      <a className={styles.sectionSubText} href="https://github.com/kostger" target="_blank">Github</a>
      
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <EarthCanvas />
    </motion.div>
  </div>
    
  )
}

export default SectionWrapper(Contact,"contact")