import axios from "axios";
function login(username, password) {
  const auth = { username: username, password: password };
  return function fetch(dispatch) {
    dispatch({ type: "LOGGING_IN" });

    axios
      .post("https://api99pharmeasy.herokuapp.com/users/signin", auth)
      .then((res) => dispatch({ type: "LOGIN_SUCCESS", payload: res.data }))
      .catch((err) => {
        console.log(err);
        dispatch({ type: "LOGIN_FAILED", payload: err });
      });
  };
}
export default login;
