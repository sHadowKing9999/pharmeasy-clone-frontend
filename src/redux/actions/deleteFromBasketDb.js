import axios from "axios";
function deleteFromBasketDb(token, _id) {
  return function fetch(dispatch) {
    const auth = { token: token, cartId: _id };
    dispatch({ type: "DELETING_BASKET_DB" });
    axios
      .delete("https://api99pharmeasy.herokuapp.com/cart", { data: auth })
      .then((res) => dispatch({ type: "DELETED_BASKET_DB", payload: res.data }))
      .catch((err) =>
        dispatch({ type: "DELETING_BASKET_DB_FAILED", payload: err.message })
      );
  };
}
export default deleteFromBasketDb;
