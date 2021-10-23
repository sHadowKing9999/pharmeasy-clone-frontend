import axios from "axios";
function modifyBasketandDb(token, _id, quantity) {
  return function fetch(dispatch) {
    const auth = { token: token, cartId: _id, quantity: quantity };
    dispatch({ type: "MODIFYING_BASKET_DB" });
    axios
      .put("http://localhost:8000/cart", auth)
      .then((res) =>
        dispatch({ type: "MODIFIED_BASKET_DB", payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: "MODIFYING_BASKET_DB_FAILED", payload: err.message })
      );
  };
}
export default modifyBasketandDb;
