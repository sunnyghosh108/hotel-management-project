// import React, { useEffect, useState } from 'react';
// import Catagories from './Catagories/Catagories';
// import './Shared/Home.css'
// const Home = () => {
//     const [category,setCategory]=useState([]);
//     useEffect(()=>{
//      fetch('category.json')
//      .then(res=>res.json())
//      .then (data=>setCategory(data.category_section.cards))
//     },[])
    
   
    
//     return (
//         <div>
       
//         <div className='background-details'>
//              <img className='background' src='../../assets/background.jpg'></img>
             
//              <div className='detail'>
//                <h3>Our Facility:</h3>
//              <ul>
//              <li>We care our tourist and provide better facility.Lorem ipsum dolor.</li>
//              <li>Sit amet consectetur adipisicing elit.</li>
//              <li>Sit amet consectetur adipisicing elit.</li>
//              <li>Sit amet consectetur adipisicing elit.</li></ul>
//              </div>
//              <button className='btn-see'>See More </button>
//              </div>
             
//        <div className='catagories'>
//        {
//         category.map(catagories =><Catagories key={catagories.room_img} catagories={catagories}></Catagories>)
//        }
//        </div>
          
//         </div>
        
//     );
// };

// export default Home;


