const customerReducer = (state = {}, action) => {
  if (action.type === "ADD_CUSTOMER_INFO") {
    console.log(`Adding customer in redux`, action);
    return (state = action.payload);
  }
  if (action.type === "EMPTY_CART") {
    return (state = {});
  }
  return state;
};
export default customerReducer;