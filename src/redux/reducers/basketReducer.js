function basketReducer(state = { baskets: [] }, action) {
  switch (action.type) {
    case "ADDING_TO_BASKET":
      return { ...state, baskets: state.baskets.concat(action.payload) };
    case "REMOVE_FROM_BASKET":
      const index = state.baskets.findIndex(
        (item) => item.id === action.payload
      );
      console.log(index);
      let newbasket = [...state.baskets];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn("item not found");
      }
      return { ...state, baskets: newbasket };
    default:
      return state;
  }
}
export default basketReducer;
