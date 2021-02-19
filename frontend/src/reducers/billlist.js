const BILL_LIST_REQUEST="ITEM_LIST_REQUEST";
export const BILL_LIST_SUCCESS="ITEM_LIST_SUCCESS";
const BILL_LIST_FAIL="ITEM_LIST_FAIL"

export const billListReducer = (state = { bills: [] ,billloading:"false"}, action) => {
    switch (action.type) {
      case BILL_LIST_REQUEST:
        return { loading: true, bills: [] }
      case BILL_LIST_SUCCESS:
        return {
          billloading: true,
          bills: action.payload,
        }
      case BILL_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }