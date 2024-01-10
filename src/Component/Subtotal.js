import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigat=useNavigate()
    const getBasketTotal = (basket) =>
      basket?.reduce((amount, item) => amount + item.price,0);

    
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>( 

            <div>
                <p>
                    Subtotal ({basket.length} items):<strong>{value}</strong>
                </p>
                <p className='subtotal__gift'>
                    <input type='checkbox'/> This order contains a gift
                </p>
            </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        
        />
        <button onClick={(e)=>navigat("/payment")}>Proceed to Checkout</button>
        
       
    </div>
  )
}

export default Subtotal