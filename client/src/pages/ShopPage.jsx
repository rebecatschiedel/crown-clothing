import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCollectionFetching,
  selectIsCollectionsLoaded,
} from "../redux/shop/shopSelectors";
import Spinner from "../components/Spinner";

const CollectionsOverview = lazy(() =>
  import("../components/CollectionsOverview")
);
const CollectionPage = lazy(() => import("./CollectionPage"));

const ShopPage = () => {
  const collectionFetching = useSelector(selectCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={<CollectionsOverview isLoading={collectionFetching} />}
          />
          <Route
            path=":collectionId"
            element={<CollectionPage isLoading={!isCollectionsLoaded} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ShopPage;

// const unsubscribeFromSnapshot = useRef(null);
// useEffect(() => {
//   const collectionRef = firestore.collection("collections");

// FIREBASE METHOD
// unsubscribeFromSnapshot.current = collectionRef.onSnapshot(
//   async snapshot => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     dispatch(updateCollections(collectionsMap));
//     setLoading(false);
//   }
// );

// FETCH METHOD
// fetch(
//   "https://firestore.googleapis.com/v1/projects/crwn-clothing-15ca1/databases/(default)/documents/collections"
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

// PROMISE METHOD - BUT IT IS NOT LIVE UPDATING!
// collectionRef.get().then(snapshot => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   dispatch(updateCollections(collectionsMap));
//   setLoading(false);
// });
// });
