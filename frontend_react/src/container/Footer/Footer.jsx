import React, { useState } from 'react'

import {images} from '../../constants'
import {AppWrap,MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message}=formData

  const handleChangeInput = (e) =>{
    //gettting the name and value from the element targeted
    const {name,value} = e.target
    // destructure and copy formData, then rename the name to value
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = () =>{
    setLoading(true)
    const contact ={
      _type:'contact',
      name:name,
      email:email,
      message:message
    }
    //use form data to create
    client.create(contact).then(()=>{
      setLoading(false);
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee and chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:aaron.perez989@gmail.com' className='p-text'>aaron.perez989@gmail</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel: +1 (408) 464-2963' className='p-text'>+1 (408) 464-2963</a>
        </div>
      </div>
      {!isFormSubmitted?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' value={name} onChange={handleChangeInput}></input>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' value={name} onChange={handleChangeInput}></input>
        </div>
        <div>
          <textarea
          className='p-text'
          placeholder='Your Message'
          value={message}
          name='message'
          onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading?'Sending':'Send Message'}</button>
      </div>
      :<div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  'app__whitebg'
  )