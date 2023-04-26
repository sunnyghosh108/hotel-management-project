
import React from 'react';
 import fb from '../../../public/icons/fb.png'
 import youtube from '../../../public/icons/youtube.png'
 import twitter from '../../../public/icons/twitter.png'
import './Footer.css';
const Footer = () => {
    return (
        <div className="foot"> 
    <div className='foot-text'>
         <p className='text-white'>About us</p>
        <p className='text-white'>Contact</p>
        <p className='text-white'>Details</p>
        <p className='text-white'> Enquiry</p>
     </div>
     <div className='icon-all'>
     
    <div class="icon">
     <img src={fb}/>
      </div>
        <div class="icon">
        <img src={twitter}/>

         </div>
         <div class="icon">
       <img src={youtube}/>
         </div>
         </div>
             
            <h5 className='text-center font-small text-white '> Copyright ©2023 - All right reserved by Shivaji Grand Hotel </h5>
        </div>
        

    );
};

export default Footer;