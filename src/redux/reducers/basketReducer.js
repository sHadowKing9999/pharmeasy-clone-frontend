function basketReducer(
  state = { baskets: [], error: null, loading: false },
  action
) {
  switch (action.type) {
    case "ADDING_TO_BASKET":
      return { ...state, loading: true, error: null };
    case "ADDED_TO_BASKET":
      const ind = state.baskets.findIndex(
        (item) => item.productId._id === action.payload.productId._id
      );
      if (ind < 0)
        return {
          ...state,
          loading: false,
          baskets: state.baskets.concat(action.payload),
          error: null,
        };
      else {
        console.warn("not found ", action.payload.productId._id);
        let newbasket = [...state.baskets];
        newbasket[ind].quantity = state.baskets[ind].quantity + 1;
        return { ...state, loading: false, baskets: newbasket, error: null };
      }
    case "REMOVING_FROM_BASKET":
      return { ...state, loading: true, error: null };
    case "REMOVED_FROM_BASKET":
      const index = state.baskets.findIndex(
        (item) => item.productId._id === action.payload
      );
      let newbasket = [...state.baskets];
      if (index >= 0) {
        newbasket[index].quantity = state.baskets[index].quantity - 1;
        if (newbasket[index].quantity === 0) newbasket.splice(index, 1);
      } else {
        console.warn("item not found");
      }
      return { ...state, loading: false, baskets: newbasket, error: null };
    case "FETCHING_CART":
      return { ...state, loading: true, error: null };
    case "FETCH_CART":
      return { ...state, loading: false, baskets: action.payload, error: null };
    case "ADDING_TO_BASKET_DB":
      return { ...state, loading: true, error: null };
    case "ADDED_TO_BASKET_DB":
      return { ...state, loading: false, baskets: action.payload, error: null };
    case "MODIFYING_BASKET_DB":
      return { ...state, loading: true, error: null };
    case "MODIFIED_BASKET_DB":
      return { ...state, loading: false, baskets: action.payload, error: null };
    case "DELETING_BASKET_DB":
      return { ...state, loading: true, error: null };
    case "DELETED_BASKET_DB":
      return { ...state, loading: false, baskets: action.payload, error: null };
    case "FETCH_CART_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "ADDING_TO_BASKET_DB_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "MODIFYING_BASKET_DB_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "DELETING_BASKET_DB_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default basketReducer;
