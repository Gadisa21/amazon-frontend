import React from 'react'
import checkout from "./Checkout.svg"
import "./CheckOut.css"
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function CheckOut() {
  const [{basket},dispatch]=useStateValue()
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__left_shopping">
          <div>
            <img className="checkout__ad" src={checkout} />
          </div>
          <div>
            <h3>Hello</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
        </div>
        {basket.map((item)=>
                  <CheckoutProduct 
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}

                  
                  />

        )}
      </div>
      <div className='checkout-right'>
        <Subtotal/>
      </div>
    </div>
  );
}

export default CheckOut