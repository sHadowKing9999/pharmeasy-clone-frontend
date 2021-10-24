function navbarReducer(state = { navbar: false }, action) {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return { ...state, navbar: !state.navbar };
    default:
      return state;
  }
}
export default navbarReducer;
