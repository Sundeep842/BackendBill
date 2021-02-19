import "./Item.css"
import React, { useEffect,useState } from 'react'
import Additem from './Additem'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { ITEM_LIST_SUCCESS } from "../reducers/itemlist";

function Items(){
  const dispatch = useDispatch()

  const [items, setItems] = useState({items:[]});
  const [loading, setLoading] = useState("");

  
    useEffect(() => {
        
        const fetchData = async () => {
          const result = await fetch(
            'http://localhost:5000/items'
          ).then(res=>res.json())
          .catch(err=>console.log(err))
          dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: result,
          })
          setItems(result);
          setLoading("true");
        };
     
        fetchData();
      }, []);
    return(
    <div className="item-item">
    <h3>Items</h3>
               {loading?              ((items.z).map(item=>
               <div className="item-a"><ul><li>{item.item}</li><li>{item.Price}</li></ul> </div>)):<div>error</div>} 
    <div>
        <Additem/> 
      </div>     
    </div>    
        )
}

export default Items