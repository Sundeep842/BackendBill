import { createStore, combineReducers } from 'redux';
import {  cartReducer} from "./reducers/cart";

import { itemListReducer } from "./reducers/itemlist";
import { billListReducer } from "./reducers/billlist";


 
 const initialState = {

    items: {
      item: "",
      price:"",     
      cart:""
    }
  }
const store = createStore(combineReducers({cart:cartReducer,itemlist:itemListReducer,bills:billListReducer}),initialState)
export default  store