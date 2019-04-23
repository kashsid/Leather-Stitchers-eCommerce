const collectionsReducer = (state = [], action) => {
  console.log("this is collections reducer");

  switch (action.type) {
    case "SET_COLLECTION":
      console.log("yayh", action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default collectionsReducer;
