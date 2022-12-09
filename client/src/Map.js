import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Map = ({ setTooltipContent, countries }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-tip=""
      style={{
        height: "90vh",
        width: "90vw",
        backgroundColor: "#2C2C2E",
        // marginBottom: "8vh",
      }}
    >
      <ComposableMap
        width={500}
        height={260}
        projectionConfig={{
          rotate: [-20, 0, 0],
          scale: 100,
        }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const dbCountry = countries?.find(
                  (country) =>
                    country.name.toLowerCase() ===
                    geo.properties.name.toLowerCase()
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.name}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => navigate(`/destinations/${dbCountry.id}`)}
                    style={{
                      default: {
                        fill: "lightgray",
                        outline: "none",
                      },
                      hover: {
                        fill: "gray",
                        outline: "none",
                      },
                      pressed: {
                        fill: "lightGray",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Map;

// import { useNavigate } from "react-router-dom";

// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json";

// const MapChart = ({ setTooltipContent, countries }) => {
//   const navigate = useNavigate();
//   return (
//     <div data-tip="">
//       <ComposableMap
//         width={650}
//         height={675}
// projection="geoAzimuthalEqualArea"
//         projectionConfig={{
//   rotate: [-90, -35, -10],
//           scale: 400,
//         }}
//       >
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const dbCountry = countries?.find(
//                 (country) =>
//                   country.name.toLowerCase() ===
//                   geo.properties.geounit.toLowerCase()
//               );
//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//   onMouseEnter={() => {
//     setTooltipContent(`${geo.properties.geounit}`);
//   }}
//   onMouseLeave={() => {
//     setTooltipContent("");
//   }}
//                   onClick={() => navigate(`/Country/${dbCountry.id}`)}
//                   style={{
//                     default: {
//                       fill: "gray",
//                       outline: "none",
//                     },
//                     hover: {
//                       fill: "lightGray",
//                       outline: "none",
//                     },
//                     pressed: {
//                       fill: "lightGray",
//                       outline: "none",
//                     },
//                   }}
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// };

// export default MapChart;

// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Graticule,
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

// const MapChart = () => {
//   return (
//     <ComposableMap
//       width={725}
//       height={700}
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         scale: 100,
//       }}
//     >
//       <Graticule stroke="#EAEAEC" />
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#9998A3"
//               stroke="#EAEAEC"
//             />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// };

// export default MapChart;
