import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import style from "../pages/grid.module.css";

const Cart = () => {
  const { cart ,removeItem} = useContext(CartContext);
  console.log(cart, "from cart.jsx");
  return (
    <div>
      <div className={style.grid}>
        {cart.map((item) => (
          <div key={item.id} className={style.gridItem}>
            <img src={item.image} alt="" />
            <h3>Title : {item.title}</h3>
            <h3>Price : {item.price}</h3>
            <h3>Rating : {item.rating.rate}</h3>
            <button className={style.removeBtn} onClick={()=>{removeItem(item)}}>Remove from cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;