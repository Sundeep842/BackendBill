import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect,useState } from 'react'

function Sales(){
  const bills = useSelector(state => state)
  const rtieve=(price)=>{
   if(bills.bills.bills.length>0){
   // console.log(price)
  const v=price.map(x=>{return(<div>{x.Price} {x.item}</div>)}) 

   return(<div>{v}</div>)
   }
    }
  

  return(

    <div>
    {console.log(bills)}
<h3>Sales</h3>
  <div>Today</div>{rtieve(bills.bills.bills.z)}
    
        

    <div></div>
  </div>)
}
export default Sales