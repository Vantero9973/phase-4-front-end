import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Button from "@mui/material/Button";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav
      className="navbar bg-base-100"
      style={{
        backgroundColor: "#1C1C1E",
        zIndex: "950",
      }}
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
          words={[
            "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
          ]}
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
      <div>
        <ul style={{ display: "flex", alignItems: "center" }}>
          <li>
            <Link to="/map">
              <Button
                variant="outlined"
                href="/map"
                style={{
                  fontSize: "16px",
                  fontWeight: "bolder",
                  background: "#2C2C2E",
                  color: "#dadada",
                  borderColor: "#dadada",
                  borderRadius: "20px",
                  marginRight: "1vw",
                  width: "5vw",
                }}
              >
                Map
              </Button>
            </Link>
          </li>
          <li style={{ marginRight: "1vw" }}>
            <Login user={user} setUser={setUser} />
          </li>
          <li>
            <Button
              onClick={handleLogoutClick}
              variant="outlined"
              type="submit"
              style={{
                fontSize: "16px",
                fontWeight: "bolder",
                background: "#2C2C2E",
                color: "#dadada",
                borderColor: "#dadada",
                borderRadius: "20px",
                marginRight: "1vw",
              }}
            >
              Log Out
            </Button>
          </li>
          <li style={{ marginRight: "1vw" }}>
            <SignUp user={user} setUser={setUser} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
