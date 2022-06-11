import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h4>About US</h4>
        <h4>Contact US</h4>
        <h4>Careers</h4>
        <h4>Stories</h4>
        <h4>Press</h4>
      </div>
      <div>
        <h4>Payments</h4>
        <h4>Shipping</h4>
        <h4>Cancellations</h4>
        <h4>FAQ</h4>
        <h4>Report</h4>
      </div>
      
    </div>
  );
};

export default Footer;