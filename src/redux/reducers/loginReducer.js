function loginReducer(
  state = {
    token: null,
    isLoading: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "LOGGING_IN":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };
    case "LOGIN_FAILED":
      return { ...state, error: action.payload, isLoading: false };
    case "LOG_OUT_SUCCESS":
      return { ...state, token: null, error: null };
    case "FETCH_CART_FAILED":
      return { ...state, token: null };
    default:
      return state;
  }
}
export default loginReducer;
