import { createStore, combineReducers } from 'redux';


import {itemListReducer } from "./reducer/itemlist";

 
 const initialState = {
    items: {
      item: "",
      price:""     
    }
  }
 const store = createStore(itemListReducer,initialState)

    return (store)
