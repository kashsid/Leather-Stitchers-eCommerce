const products = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
