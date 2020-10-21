import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';

function Checkout() {
  const [{basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
    <div className="checkout_left">
    <img className="checkout__ad"
    src="https://bloximages.chicago2.vip.townnews.com/journaltimes.com/content/tncms/assets/v3/classifieds/c/1a/c1af8f22-422b-5900-8b94-7dee804cf7b9/5f3eba5c6186d.preview.jpg?resize=1200%2C364" alt=""/>

    <div>
    <h2 className="checkout_title"> Your shopping Basket </h2>
    </div> 
    </div>
      <div className="checkout_right">
      <Subtotal/>
      
    
      </div>
    </div>
  )
}

export default Checkout;
