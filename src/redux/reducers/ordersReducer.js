const ordersReducer = (state = [], action) => {
  console.log("this is orders reducer");

  switch (action.type) {
    case "SET_ORDERS":
      console.log("yayh", action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default ordersReducer;
