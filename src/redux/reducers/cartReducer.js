const cartReducer = (state = [], action) => {
  console.log(`in cartReducer....`);

  if (action.type === "ADD_CART") {
    console.log(`Adding product in cart...`);

    return [...state, action.payload];
  }

  if (action.type === "REMOVE_CART") {
    console.log("in actiontype remove from cart");
    for (let i = 0; i < state.length; i++) {
      console.log("yeah i am in loop");
      if (state[i] === action.payload) {
        state.splice(i, 1);
        return state;
      }
    }
  }

  if (action.type === "EMPTY_CART") {
    return [];
  }

  return state;
};

const updateCartItems = (state = 0, action) => {
  if (action.type === "ADD_CART") {
    console.log(`Adding product...`);
    console.log(`Total is:`, state);

    return state = state+1;
  }

  if (action.type === "REMOVE_CART") {
    return state - Number(action.payload.product_qty);
  }

  if (action.type === "EMPTY_CART") {
    return (state = 0);
  }

  return state;
};
export default cartReducer;
