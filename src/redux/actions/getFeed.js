import axios from "axios";
function getFeed() {
  return function fetch(dispatch) {
    dispatch({ type: "POSTS_FETCH_REQ" });
    axios
      .get("https://api99pharmeasy.herokuapp.com/products")
      .then((res) =>
        dispatch({ type: "POSTS_FETCH_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        console.log(err);
        dispatch({ type: "POSTS_FETCH_FAILED", payload: err });
      });
  };
}
export default getFeed;
