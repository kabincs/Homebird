import { Add_PRODUCT, REMOVE_PRODUCT } from "./action";
const initialState = {
  shoppingCart: [],
};
function homeBirdShopping(state = initialState, action) {
  switch (action.type) {
    case Add_PRODUCT: {
      //console.log("insiede" + action.payload);
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };
    }
    case REMOVE_PRODUCT:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((item, index) => {
          // console.log(item);
          return action.payload != item.id;
        }),
      };
    default:
      return state;
  }
}
export default homeBirdShopping;
