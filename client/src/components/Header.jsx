import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import "./Header.scss";
import { auth } from "../firebase/utils";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const hidden = useSelector(state => state.cart.hidden);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
