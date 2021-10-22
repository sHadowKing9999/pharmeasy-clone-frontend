export default function addtoBasket(product) {
  return function fetch(dispatch) {
    dispatch({ type: "ADDING_TO_BASKET", payload: product });
  };
}
