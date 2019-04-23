const productsReducer = (state = [], action) => {
  console.log('this is product reducer');
  
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log('yayh',action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default productsReducer;
