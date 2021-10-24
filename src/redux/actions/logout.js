function logout() {
  return function fetch(dispatch) {
    dispatch({ type: "LOGGING_OUT" });
    dispatch({ type: "LOG_OUT_SUCCESS" });
  };
}
export default logout;
