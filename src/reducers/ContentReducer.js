export default (state = "dashboard", action) => {
  switch (action.type) {
    case "SET":
      return action.mode;
    default:
      return state;
  }
};
