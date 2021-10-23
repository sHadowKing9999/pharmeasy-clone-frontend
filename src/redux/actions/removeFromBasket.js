export default function removeFromBasket(id) {
  return function fetch(dispatch) {
    dispatch({ type: "REMOVING_FROM_BASKET", payload: id });
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };
}
