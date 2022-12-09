import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Search from "./Search";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// import Popup from "reactjs-popup";

export default function VisitedPlaces({
  destinations,
  setSearch,
  names,
  destinationsArray,
  handleUpdate,
}) {
  const navigate = useNavigate();
  const [deleteDestinations, setDeleteDestinations] = useState();
  const [updateDestinations, setUpdateDestinations] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeleteDestinations(data);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((r) => r.json())
      .then(setDeleteDestinations);
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3000/destinations/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setDeleteDestinations((deleteDestinations) =>
          deleteDestinations.filter(
            (deleteDestination) => deleteDestination.id !== id
          )
        );
      }
    });
  }

  // const handleUpdateDestination = () => {
  //   fetch(`http://localhost:3000/destinations/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: names,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((newDestination) => {
  //       handleUpdate(newDestination);
  //     });
  //   setUpdateDestinations("");
  // };

  // function handleAddDestination(newDestination) {
  //   const updatedDestinationsArray = [...searchDestinations, newDestination];
  //   setUpdateDestinations(updatedDestinationsArray);
  // }

  // function handleUpdateDestination(updatedDestination) {
  //   const updatedDestinationsArray = updateDestinations.map((destination) => {
  //     return destination.id === updatedDestination.id
  //       ? updatedDestination
  //       : destination;
  //   });
  //   setUpdateDestinations(updatedDestinationsArray);
  // }

  return (
    <>
      <Search setSearch={setSearch} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "25px",
        }}
      >
        {destinations.map((destination) => {
          // if (destination.visited === true)
          return (
            <>
              <Card
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                sx={{ width: 275 }}
                style={{
                  margin: "10px",
                  borderRadius: "10px",
                  background: "#2C2C2E",
                  boxShadow: "0 0 10px",
                }}
              >
                <CardMedia
                  style={{ height: "180px" }}
                  component="img"
                  image={destination.image}
                  alt=""
                  onClick={() => navigate(`/blogs/${destination.id}`)}
                />
                <CardContent
                  style={{
                    background: "#1C1C1E",
                    color: "#dadada",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      height: "50px",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {destination.name}, {destination.country_name}
                  </Typography>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      style={{
                        marginTop: "15px",
                        height: "30px",
                        color: "#1C1C1E",
                        borderColor: "#dadada",
                        background: "#dadada",
                      }}
                      onClick={() => handleDelete(destination.id)}
                    >
                      <DeleteIcon />
                    </Button>
                    {/* <Button onClick={handleUpdateDestination}>Update</Button> */}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
