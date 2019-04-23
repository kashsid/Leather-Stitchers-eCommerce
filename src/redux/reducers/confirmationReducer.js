// Used to store confirmation boolean on POST to server/database
const confirmationReducer = (state = false, action) => {
  switch (action.type) {
    case "CONFIRM_POST":
      return {
        open: true,
        status: action.payload
      };
    case "RESET_POST":
      return {
        open: false
      };
    default:
      return state;
  }
};
export default confirmationReducer;