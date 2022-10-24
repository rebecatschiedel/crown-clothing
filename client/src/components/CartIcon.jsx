import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { selectCartItemsCount } from "../redux/cart/cartSelectors";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
