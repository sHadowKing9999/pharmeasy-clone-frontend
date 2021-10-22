import axios from "axios";
function signup(username, firstname, lastname, password) {
  const auth = {
    username: username,
    firstname: firstname,
    lastname: lastname,
    password: password,
  };
  return function fetch(dispatch) {
    dispatch({ type: "SIGNING_UP" });

    axios
      .post("http://localhost:8000/users/signup", auth)
      .then((res) => dispatch({ type: "SIGNUP_SUCCESS", payload: res.data }))
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SIGNUP_FAILED", payload: err });
      });
  };
}
export default signup;
