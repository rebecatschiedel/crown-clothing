import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../components/Checkout-item";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const Checkout = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        <div className="">
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        </div>
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>

    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(Checkout);