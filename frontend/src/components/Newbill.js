import axios from 'axios';

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function Newbill(){
        const m = useSelector(state => state)
        
        const a=m.cart.price
        const b=m.cart.quantity
        const result=a*b
    const bill=async()=>{
    await axios.post('http://localhost:5000/items',{"data":m})
    }
    return(
    <div>
       <h3> New Bill</h3>
       <ul>
       <li>{m.cart.item}</li>

       <li>{result}</li>
       </ul>
       <button onClick={bill}>checkout</button>
    </div>    
        
        )
}

export default Newbill