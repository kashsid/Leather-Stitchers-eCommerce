const eCommerceReducer = (state =[], action) => {

    
  console.log("this is eComm reducer",action.type);

  switch (action.type) {
    case "SET_PRODUCT":
      console.log("selected", action.payload);
      return action.payload;

    default:
      return state;
  }
};
export default eCommerceReducer;
