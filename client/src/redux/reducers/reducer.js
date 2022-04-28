import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, APPLY_COUPON, LOGIN, EMPTY_CART, LOGOUT, FETCH_USERS } from "../constants";

const initState = {
  items: [

    { id: 1, title: "DSLR", price: 2500, desc: "Groceries", img: Item1 },
    { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
    { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
    { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
    { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
    { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
  ],
  addedItems: [],
  total: 0,
  counter: 0,
  userList:[]

}
// export const UserReducer=(state=initState.isAuth,action)=>{
//   if(action.type=== LOGIN)
//   return {
//     ...state,
//     state:true   
//   }
// }
export const ShoppinReducer = (state = initState, action) => {
  //add to cart
  if (action.type === ADD_TO_CART) {

    let addedItem = state.items.find(item => item.id === action.id)
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id)

    if (existed_item) {
      // alert("You've already added this item in cart, please check cart")
      state.counter = state.counter + 1
      addedItem.quantity = addedItem.quantity + 1
      addedItem.sum += addedItem.price
      return {
        ...state,
        total: state.total + parseInt(addedItem.price)
      }
    }
    else {
      addedItem.quantity = 1;
      //calculating the total      
      state.counter = state.counter + 1
      addedItem.sum = 0 + addedItem.price
      let newTotal = state.total + parseInt(addedItem.price)
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }
  //remove from cart
  if (action.type === REMOVE_FROM_CART) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)

    let countTotal = state.counter - itemToRemove.quantity
    itemToRemove.sum -= itemToRemove.price
    //calculating the total    
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)

    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      counter: countTotal
    }
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)

    addedItem.quantity += 1
    addedItem.sum += addedItem.price

    let newTotal = state.total + parseInt(addedItem.price)
    let countTotal = state.counter + 1

    return {
      ...state,
      total: newTotal,
      counter: countTotal
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)


    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)

      let newTotal = state.total - parseInt(addedItem.price)
      addedItem.quantity += 1
      addedItem.sum -= addedItem.price

      let countTotal = state.counter - 1

      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        counter: countTotal
      }
    }
    else {
      addedItem.quantity -= 1
      addedItem.sum -= addedItem.price

      let countTotal = state.counter - 1

      let newTotal = state.total - parseInt(addedItem.price)
      return {
        ...state,
        total: newTotal,
        counter: countTotal
      }
    }

  }
  if (action.type === APPLY_COUPON) {
    if (action.code === "imperial100") {
      return {
        ...state,
        total: state.total - 100
      }
    }
    else if (action.code === "") {
      return {
        ...state,
        total: state.total + 100
      }
    }

  }


  if (action.type === ADD_SHIPPING) {
    // let addedItem
    // addedItem.shippingCharge = 49
    // addedItem.GST = (state.addedItems.price*4/100)
    return {
      ...state,
      total: state.total + 49
    }

  }
  console.log(state.addedItems)
  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 49
    }
  }

  if (action.type === EMPTY_CART) {
    return {
      ...state,
      addedItems: initState.addedItems,
      total: 0,
      counter: 0
    }
  }

  //user reducer
  if (action.type === LOGIN) {
    return {
      ...state,
      isAuth: true
    }
  }
  if (action.type === LOGOUT) {
    localStorage.removeItem('login')
    localStorage.removeItem('user')

  }
  if(action.type===FETCH_USERS)
  {
    console.log(action.payload);
    return {
      ...state,
      userList: action.payload,
      }
  }
  else {
    return state
  }

}

