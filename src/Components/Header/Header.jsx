import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

//     const {user, logOut}=useContext(AuthContext);
//     console.log(user);

//    const handleLogout=()=>{
//        logOut()
//        .then(result=>{ })
//        .catch(error=>console.error(error));
//    }



    return (
        <nav className='flex'>
            <div className='title'>
            <h2 className='hotel-title'>Shivaji Grand hotel</h2>
            </div>
        <div className='menu'>
        <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          {/* {
                user && <span className='text-white'>Welcome:{user.email}<button onClick={handleLogout}> Log out</button></span>
                } */}
        </div>

       
        </nav>
    );
};

export default Header;