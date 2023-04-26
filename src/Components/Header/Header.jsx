import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Marquee from "react-fast-marquee";
const Header = () => {






    return (
        <nav className='flex'>
            <div className='title'>
            <h2 className='hotel-title'>Shivaji Grand hotel</h2>
            </div>
        <div className='menu'>
        <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          
          <Marquee className='text-danger' speed={100}>
            
            Welcome To Shivaji grand hotel
         </Marquee>
        </div>
        </nav>
    );
};

export default Header;