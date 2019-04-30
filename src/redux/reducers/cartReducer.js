//import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  console.log(`in cartReducer....`);

  if (action.type === "ADD_CART") {
    console.log(`Adding product in cart...`);

    return [...state, action.payload];
  }

  if (action.type === "REMOVE_CART") {
    console.log("in actiontype remove from cart",action.payload);
    for (let i = 0; i < state.length; i++) {
      console.log("yeah i am in loop");
      if (
        state[i].product_id === action.payload ) {
        state.splice(i, 1);
        console.log("in if statement", state);

        return state;
      }
    }
  }

  if (action.type === "EMPTY_CART") {
    return [];
  }

  return state;
};



  
  
export default cartReducer;
