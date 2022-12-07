import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Navbar() {
  return (
    <div
      className="navbar bg-base-100"
      style={{ backgroundColor: "#1C1C1E", position: "fixed", zIndex: "950" }}
    >
      <div className="flex-1" style={{ marginLeft: "1vw" }}>
        <h1
          style={{
            marginLeft: "1vw",
            fontSize: "24px",
            fontWeight: "800",
            color: "lightgray",
          }}
        >
          Destination Picker
        </h1>
        <Typewriter
          words={["- - - - - - - - - - - - - - - - - - - -"]}
          loop={500}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        <Link to="/">
          <img
            className="logo"
            src="https://www.pngplay.com/wp-content/uploads/6/Airplane-Logo-PNG-HD-Quality.png"
            alt="logo"
            style={{
              height: "50px",
              width: "50px",
              padding: "3px",
            }}
          ></img>
        </Link>
      </div>
      <div className="flex-none">
        <ul>
          <li>
            <Link to="/map">
              <h3
                href="/map"
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "lightgray",
                  marginRight: "2vw",
                }}
              >
                Map
              </h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
