import { useSelector } from "react-redux";
import CollectionPreview from "./CollectionPreview";
import { selectCollectionsForPreview } from "../redux/shop/shopSelectors";

import "./CollectionsOverview.scss";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
