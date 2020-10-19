import React from "react";
import { connect } from "react-redux";

import CustomButton from "./CustomButton";
import CartItem from "./CartItem";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = (state) => ({cartItem: selectCartItems(state)});

export default connect(mapStateToProps)(CartDropdown);