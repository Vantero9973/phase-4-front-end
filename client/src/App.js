import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DestinationData from "./DestinationData";
import MapPage from "./MapPage";
import NavBar from "./NavBar";
import BlogData from "./BlogData";

function App() {
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const searchDestinationsByName = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(user);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div style={{ background: "#2C2C2E" }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                destinations={searchDestinationsByName}
                countries={countries}
                user={user}
                setSearch={setSearch}
              />
            }
          />
          <Route
            exact
            path="/map"
            element={
              <MapPage
                countries={countries}
                content={content}
                setContent={setContent}
              />
            }
          />
          <Route
            path="/destinations/:id"
            element={<DestinationData destinations={destinations} />}
          />
          <Route path="/blogs/:id" element={<BlogData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
