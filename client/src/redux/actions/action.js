import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY, EMPTY_CART, APPLY_COUPON, LOGIN, LOGOUT ,FETCH_USERS, FETCH_PRODUCTS, FIND_USER} from "../constants";
import axios from "axios";

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

//User actions
export const fetchData = () => {
  return async (dispatch) => {
    var get = {
      method: 'get',
      url: 'http://localhost:5000/user/userlist/',
      headers: { },
    };
    try {
      const response = await axios(get);
      const response_1 = response.data;
      console.log(response_1);
      return dispatch(
        { type: FETCH_USERS, payload: response_1 });
    } catch (err) {
      console.log(err);
    }
  }
}
export const fetchProducts = () => {
  return async (dispatch) => {
    var get = {
      method: 'get',
      url: 'http://localhost:5000/product/gProducts/',
      headers: { },
    };
    try {
      const response = await axios(get);
      const response_1 = response.data;
      console.log(response_1);
      return dispatch(
        { type: FETCH_PRODUCTS, payload: response_1 });
    } catch (err) {
      console.log(err);
    }
  }
}
export const deleteUser=(id)=>{
  return async (dispatch) => {
    var get = {
      method: 'delete',
      url: `http://localhost:5000/user/delete/${id}`,
      headers: {}
    };
    try {
      const response = await axios(get);
      const response_1 = response.data;
      console.log(response_1);
      if(response.status===200)
      {
        alert(JSON.stringify(response.data.message))
        return dispatch(fetchData())
      }
    } catch (err) {
      console.log(err);
    }
  }
}
export const findUser=(id)=>{
  return async (dispatch) => {
    var getUser = {
      method: 'get',
      url: `http://localhost:5000/user/fuser/${id}`,
      
    };
    try {
      const response = await axios(getUser);
      const response_1 = response.data;
      return dispatch(
        { type: FIND_USER, payload: response_1 });
    } catch (err) {
      console.log(err);
    }
  }
}

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