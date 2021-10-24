import axios from "axios";
function addtoBasketandDb(token, productId) {
  return function fetch(dispatch) {
    const auth = { token: token, productId: productId, quantity: 1 };
    dispatch({ type: "ADDING_TO_BASKET_DB" });
    axios
      .post("https://api99pharmeasy.herokuapp.com/cart", auth)
      .then((res) =>
        dispatch({ type: "ADDED_TO_BASKET_DB", payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: "ADDING_TO_BASKET_DB_FAILED", payload: err.message })
      );
  };
}
export default addtoBasketandDb;
