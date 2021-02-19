//import "./Item.css"
import React, { useEffect,useState } from 'react'
import Additem from './Additem'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { BILL_LIST_SUCCESS } from "../reducers/billlist";

function Mybills(){
  const dispatch = useDispatch()

  const [bills, setBills] = useState({bills:[]});
  const [billloading, setBillloading] = useState("");

  const m = useSelector(state => state)

    useEffect(() => {
        
        const fetchData = async () => {
          const result = await fetch(
            'http://localhost:5000/bills'
          ).then(res=>res.json())
          .catch(err=>console.log(err))
          dispatch({
            type: BILL_LIST_SUCCESS,
            payload: result,
          })
          setBills(result);
          setBillloading("true");
        
        console.log(result)
        };
     
        fetchData();
      }, []);
      const rtiev=(a,b)=>{
        const c= a*b
        return(<div>{c}</div>)

      }
    return(
    <div className="item-item">
{console.log(m)}
    <h3>My Bills</h3>
               {billloading?              ((bills.z).map(bill=>
               <div className="bill-a"><ul><li>{bill.item }</li>
               <li>{rtiev(bill.Price,bill.Quantity)}</li></ul> </div>)):<div>error</div>} 
    <div>
        
      </div>  
    </div>    
        )
}

export default Mybills