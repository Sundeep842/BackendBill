const ITEM_LIST_REQUEST="ITEM_LIST_REQUEST";
export const ITEM_LIST_SUCCESS="ITEM_LIST_SUCCESS";
const ITEM_LIST_FAIL="ITEM_LIST_FAIL"

export const itemListReducer = (state = { items: [] ,loading:""}, action) => {
    switch (action.type) {
      case ITEM_LIST_REQUEST:
        return { loading: true, items: [] }
      case ITEM_LIST_SUCCESS:
        return {
          loading: true,
          items: action.payload,
        }
      case ITEM_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }