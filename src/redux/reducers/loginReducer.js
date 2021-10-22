function loginReducer(
  state = {
    token: { token: null, firstname: null },
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
    default:
      return state;
  }
}
export default loginReducer;
