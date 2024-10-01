import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.heroHeadText}>Contact</p>
    </motion.div>
    <motion.div
    variants={fadeIn("","",0.1,1)}>
      <EarthCanvas/>
    </motion.div>
    </>
    
  )
}

export default Contact