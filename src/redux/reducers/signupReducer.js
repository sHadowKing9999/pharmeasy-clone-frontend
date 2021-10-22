function signupReducer(
  state = {
    message: null,
    isLoading: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "SIGNING_UP":
      return { ...state, isLoading: true };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        message: action.payload,
        isLoading: false,
      };
    case "SIGNUP_FAILED":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
export default signupReducer;
