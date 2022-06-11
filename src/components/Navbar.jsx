import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className={style.navbar}>
        <Link to="/">Home</Link>
       
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/cart">Cart({cart.length})</Link>
      </div>
      <div className={style.imageContainer}>
        <img
          className={style.image}
          src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_1400x.png?v=1646626071"
          alt="an im"
        />
      </div>
        <hr/>
    </div>
  );
};

export default Navbar;