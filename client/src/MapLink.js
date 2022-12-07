import Map from "./Map";
import ReactTooltip from "react-tooltip";

function MapLink({ content, setContent, countries }) {
  return (
    <div className="map">
      <Map setTooltipContent={setContent} countries={countries} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default MapLink;
