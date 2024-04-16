import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducers";
const CartContext = createContext();

const Context = ({ children }) => {
  const initialState = [];
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ cartState, cartDispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

const useCartState = () => {
  return useContext(CartContext);
};

export { CartContext, useCartState };
export default Context;
