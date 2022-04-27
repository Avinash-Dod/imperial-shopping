import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY, EMPTY_CART, APPLY_COUPON, LOGIN, LOGOUT } from "../constants";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}
export const applyCoupon = (code) => {
  return {
    type: APPLY_COUPON,
    code
  }
}
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

//User aations
export const login = () => {
  return {
    type: LOGIN
  }
}
export const logout = () => {
  return {
    type: LOGOUT
  }

}