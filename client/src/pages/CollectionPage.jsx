import { useSelector } from "react-redux";
import CollectionItem from "../components/CollectionItem";
import { useParams } from "react-router-dom";
import { selectCollection } from "../redux/shop/shopSelectors";
import "./CollectionPage.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
