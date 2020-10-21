import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../assets/crown.svg";
import { auth } from "../firebase/firebase.utils.js"
import CartDropdown from "./CartDropdown";
import CartIcon from "./CartIcon";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { selectCartHidden } from "../redux/cart/cart.selectors";


const Header = ( { currentUser, hidden } ) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/" className="option">CONTACT</Link>
            { currentUser ?
                <div 
                    className="option" 
                    onClick={ () => auth.signOut() }
                >
                SIGN OUT
                </div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { !hidden && <CartDropdown /> }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);