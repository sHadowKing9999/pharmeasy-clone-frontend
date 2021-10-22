export default function removeFromBasket(id) {
  return function fetch(dispatch) {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };
}
