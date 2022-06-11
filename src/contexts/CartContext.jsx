import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (item) => {
    setCart([...cart, item]);
    console.log("adding to cart from art context");
  };

  const removeItem = (item)=>{
    console.log("the item is logged after clicl on remove",item);
    let newCartItem=cart.filter((el)=>{return item.id!==el.id})
    setCart([...newCartItem])
    console.log("The cart after remove item ",cart);
  }

  return (
    <CartContext.Provider value={{ cart, updateCart,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};