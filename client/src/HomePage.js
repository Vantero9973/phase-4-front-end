import { useState } from "react";
import DestinationSelector from "./DestinationSelector";
import VisitedPlaces from "./VisitedPlaces";
import Pagination from "./Pagination";
import NewDestForm from "./NewDestForm";

export default function HomePage({ destinations, countries, user, setSearch }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // const [updateDestinations, setUpdateDestinations] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/destinations")
  //     .then((r) => r.json())
  //     .then((data) => setUpdateDestinations(data));
  // }, []);

  // function handleUpdate(updatedDestination) {
  //   setUpdateDestinations((updateDestinations) =>
  //     updateDestinations.map((destination) => {
  //       return destination.id === updatedDestination.id
  //         ? updatedDestination
  //         : destination;
  //     })
  //   );
  // }

  // function handleAdd(newDestination) {
  //   setUpdateDestinations([...destinations, newDestination]);
  // }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = destinations.slice(firstPostIndex, lastPostIndex);
  if (user) {
    return (
      <>
        <div
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
        <div>
          <DestinationSelector destinations={destinations} />
        </div>
        <div style={{ padding: "5vh" }}>
          <NewDestForm />
          <VisitedPlaces
            destinations={currentPosts}
            setSearch={setSearch}
            countries={countries}
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
