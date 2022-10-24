import "./Homepage.scss";
import Directory from "../components/Directory";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCollectionsStartAsync } from "../redux/shop/shopActions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
