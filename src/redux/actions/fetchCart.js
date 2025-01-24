import axios from "axios";

function fetchCart(token) {
  const auth = { token: token };
  return function fetch(dispatch) {
    dispatch({ type: "FETCHING_CART" });
    axios
      .post("https://localhost:3001/cart/fetch", auth)
      .then((res) => dispatch({ type: "FETCH_CART", payload: res.data }))
      .catch((err) =>
        dispatch({ type: "FETCH_CART_FAILED", payload: err.message })
      );
  };
}
export default fetchCart;
