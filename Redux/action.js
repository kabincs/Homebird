export const Add_PRODUCT = "Add_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";

export const addProductInCart = (productValue) => (dispatch) => {
  dispatch({ type: Add_PRODUCT, payload: productValue });
};
export const removeProductInCart = (productID) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT, payload: productID });
};
export const increaseQty = (productValue) => (dispatch) => {
  dispatch({ type: INCREASE_QTY, payload: productValue });
};
export const decreaseQty = (productValue) => (dispatch) => {
  dispatch({ type: DECREASE_QTY, payload: productValue });
};
