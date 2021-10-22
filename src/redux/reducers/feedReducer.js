function feedReducer(
  state = { feeds: [], isLoading: false, error: null },
  action
) {
  switch (action.type) {
    case "POSTS_FETCH_REQ":
      return { ...state, isLoading: true };
    case "POSTS_FETCH_SUCCESS":
      return { ...state, feeds: action.payload, isLoading: false };
    case "POSTS_FETCH_FAILED":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
export default feedReducer;
