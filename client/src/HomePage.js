import { useState, useEffect } from "react";
import DestinationSelector from "./DestinationSelector";
import VisitedPlaces from "./VisitedPlaces";
import Pagination from "./Pagination";
import NewDestForm from "./NewDestForm";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function HomePage({ destinations, countries, user, setSearch }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const [destinationsArray, setDestinationsArray] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((r) => r.json())
      .then((destination) => setDestinationsArray(destination));
  }, []);

  // function handleUpdate(updatedDestination) {
  //   setDestinationsArray((destinationsArray) =>
  //     destinationsArray.map((destination) => {
  //       return destination.id === updatedDestination.id
  //         ? updatedDestination
  //         : destination;
  //     })
  //   );
  // }

  // function handleAdd(newDestination) {
  //   setDestinationsArray([...destinations, newDestination]);
  // }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = destinations.slice(firstPostIndex, lastPostIndex);
  if (user) {
    return (
      <>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "5vh" }}>
            <h1
              style={{
                display: "flex",
                color: "#dadada",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: "500",
              }}
            >
              Welcome, {user.username}!
            </h1>
          </div>
        </div>
        <DestinationSelector
          destinations={destinations}
          setSearch={setSearch}
        />
        <div style={{ padding: "5vh" }}>
          <NewDestForm />
          <VisitedPlaces
            destinations={currentPosts}
            setSearch={setSearch}
            countries={countries}
            // destinationsArray={destinationsArray}
            // handleUpdate={handleUpdate}
            // handleUpdate={handleUpdate}
          />
          <Pagination
            totalPosts={destinations.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DestinationSelector destinations={destinations} />
        </div>
        <div style={{ padding: "5vh" }}>
          <NewDestForm />
          <VisitedPlaces
            destinations={currentPosts}
            setSearch={setSearch}
            countries={countries}
            // destinationsArray={destinationsArray}
            // handleUpdate={handleUpdate}
          />
          <Pagination
            totalPosts={destinations.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </>
    );
  }
}
