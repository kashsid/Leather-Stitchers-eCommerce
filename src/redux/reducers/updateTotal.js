const updateTotal = (state = 0, action) => {
  if (action.type === "ADD_CART") {
    console.log(`Adding products...`,action.payload);
    console.log(`Total is:`, state);

    return state + (action.payload.product_price);
  }

  if (action.type === "REMOVE_CART") {
    console.log(`removing products...`, action.payload);
    console.log(`Total is:`, state);
    return state - (action.payload.price);
  }

  if (action.type === "EMPTY_CART") {
    return (state = 0);
  }

  return state;
};

export default updateTotal;
