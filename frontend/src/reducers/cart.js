
export const CART_ADD_ITEM="CART_ADD_ITEM";
export const CART_ADD_QUAN="CART_ADD_QUAN";



export const cartReducer = (state = {items:{item:"",price:"",quantity:""}},action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
       return{ item : action.payload.item,
        price:action.payload.price
      }
      case CART_ADD_QUAN:
        return{ 
       ...state,  quantity:action.payload
       }
  
        //const existItem = state.cartItems.find((x) => x.product === item.product)
      default:
        return state
    }
  }