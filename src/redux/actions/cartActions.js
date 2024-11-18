export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (hostel) => ({
  type: ADD_TO_CART,
  payload: hostel,
});

export const removeFromCart = (hostelId) => ({
  type: REMOVE_FROM_CART,
  payload: hostelId,
});
