import { selectDirectorySections } from "../redux/directory/directorySelectors";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import "./Directory.scss";

function Directory() {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;
