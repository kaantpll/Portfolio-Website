import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
   <div className="footer">
       <img src={Wave} alt=""  style={{width:'100%'}}/>
       <div className="f-content">
           <span>kaant43@gmail.com</span>
           <div className="f-icons">

            <Facebook size='3.5rem' color='white'/>
            <Twitter size='3.5rem' color='white'/>
            <Github size='3.5rem' color='white'/>

            
           </div>
       </div>
   </div>
  )
}

export default Footer