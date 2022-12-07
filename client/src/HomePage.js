import React, { useState } from "react";
import DestinationSelector from "./DestinationSelector";
import VisitedPlaces from "./VisitedPlaces";
import Pagination from "./Pagination";
import NewDestForm from "./NewDestForm";

export default function HomePage({ destinations, countries }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = destinations.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <DestinationSelector destinations={destinations} />
      <div style={{ padding: "5vh" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            fontWeight: "600",
            color: "#dadada",
          }}
        >
          Destinations
        </h1>
        <VisitedPlaces destinations={currentPosts} countries={countries} />
        <Pagination
          totalPosts={destinations.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <NewDestForm />
    </>
  );
}
