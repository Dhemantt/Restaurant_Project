import React, {useContext, usecontext }from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)

    console.log(cartCtx.items);

    return (
         <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Your Cart</span>
            <span className={classes.badge}>{cartCtx.items?.length}</span>
         </button>
    )
}

export default HeaderCartButton;