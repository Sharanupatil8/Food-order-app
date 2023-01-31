import React from "react";
import MealsImage from "../../assets/header.jpg";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartHandle={props.handleCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="food services of our blog" />
      </div>
    </>
  );
};

export default Header;
