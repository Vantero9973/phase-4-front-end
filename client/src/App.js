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

  // useEffect(() => {
  //   fetch("http://localhost:3000/blogs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlogInfo(data);
  //     });
  // }, []);

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage destinations={destinations} countries={countries} />
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
