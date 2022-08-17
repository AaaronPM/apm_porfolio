import React from 'react'
import { motion } from 'framer-motion'

import {AppWrap} from '../../wrapper'

import './Header.scss'
import { images } from '../../constants'


const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I am</p>
              <p className='head-text'>Aaron</p>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Fullstack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profilePic} alt='profile-bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile-circle'
          className='overlay_circle'
        />

      </motion.div>
      <motion.div 
       variant={scaleVariants}
       className='app__header-circles'
       >
        {
          [images.node,images.javascript,images.sass,images.react].map((circle,index)=>{
            return(
              <div className='circle-cmp app__flex' key={`circle-${index}`}>
                <img src={circle} alt='circle' />
              </div>
            )
          })
        }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');