import React, { useEffect, useState } from 'react';
import Catagories from './Catagories/Catagories';
import './Shared/Home.css'
import background from '../../public/image/background.jpg'
const Home = () => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
     fetch('category.json')
     .then(res=>res.json())
     .then (data=>setCategory(data.category_section.cards))
    },[])
    
   
    
    return (
        <div>
       <img className='background' src='../../public/image/background.jpg'></img>
        <div className='background-details'>
             {/* <img className='background' src='../../public/image/background.jpg'></img> */}
             
              <div className=''>
               <h3>Our Facility:</h3>
             <ul className='facility'>
             <li>We care our tourist and provide better facility.Lorem ipsum dolor.</li>
             <li>Sit amet consectetur adipisicing elit.</li>
             <li>Sit amet consectetur adipisicing elit.</li>
             <li>Sit amet consectetur adipisicing elit.</li></ul>
             </div> 
              
             </div>
             
       <div className='catagories'>
       {
        category.map(catagories =><Catagories key={catagories.room_img} catagories={catagories}></Catagories>)
       }
       </div>
          
        </div>
        
    );
};

export default Home;


