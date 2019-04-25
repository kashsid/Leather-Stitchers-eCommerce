const productImageReducer = (state = [], action) => {
  console.log("this is eComm reducer", action.type);

  switch (action.type) {
   
    case "SET_IMAGES":
      console.log("selected Images", action.payload);
      return action.payload;

    default:
      return state;
  }
};
export default productImageReducer;
