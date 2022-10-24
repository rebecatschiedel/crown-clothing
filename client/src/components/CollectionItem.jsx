import "./CollectionItem.scss";
import CustomButton from "./CustomButton";
import { addItem } from "../redux/cart/cartActions";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => dispatch(addItem(item))}
        inverted
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
