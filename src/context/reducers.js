import { actionType } from "../constants";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload) {
            return { ...c, qty: c.qty + 1 };
          }
          return c;
        }),
      };
    case actionType.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      break;
  }
};
