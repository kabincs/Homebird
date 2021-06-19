import React from "react";
const intialState = {
  counter: 0,
};

const RootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
export default RootReducer;
