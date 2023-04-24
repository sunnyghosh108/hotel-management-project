import React from 'react';
import './Catagories.css'
import { Link } from 'react-router-dom';

const Catagories = ({catagories}) => {
    const{room_img,hotel_name,room_available}=catagories;
    console.log(catagories)
     

    return (
      <div className='card-item'>
        <div className='product'>
      <img src={room_img} alt="" />
      <div className='product-info'>
          <h6 className='product-name'>{hotel_name}</h6>
          <p>Price: 200k</p>
          <p>Manufacturer: aar</p>
          
      </div>
      < button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
          
      <p><Link className='link' to="/login">  Book room</Link>  </p>
          </button>
  </div>
      </div>
    );
};

export default Catagories;