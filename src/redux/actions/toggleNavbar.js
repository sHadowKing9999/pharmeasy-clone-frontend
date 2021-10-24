function navbarToggler() {
  return function fetch(dispatch) {
    dispatch({ type: "TOGGLE_NAVBAR" });
  };
}
export default navbarToggler;
