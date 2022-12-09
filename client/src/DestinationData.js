import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SellIcon from "@mui/icons-material/Sell";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import NewDestForm from "./NewDestForm";

function DestinationData() {
  const [destinations, setDestinations] = useState();
  const [deleteDestinations, setDeleteDestinations] = useState();
  const [countries, setCountries] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeleteDestinations(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/countries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, [id]);

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

  if (!destinations) return <h2>Loading...</h2>;

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#dadada",
          margin: "10px",
        }}
      >
        {countries.name}
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "4vw",
        }}
      >
        <NewDestForm />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "25px",
            textAlign: "center",
          }}
        >
          {destinations.map((destination) => {
            return (
              <>
                <Card
                  sx={{ width: 400 }}
                  style={{
                    margin: "10px",
                    borderRadius: "25px",
                    backgroundColor: "#2C2C2E",
                  }}
                >
                  <CardMedia
                    style={{ height: "200px" }}
                    component="img"
                    height="140"
                    image={destination.image}
                    alt=""
                    onClick={() => navigate(`/blogs/${destination.id}`)}
                  />
                  <CardContent
                    style={{
                      backgroundColor: "#1C1C1E",
                      color: "#dadada",
                    }}
                  >
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "24px",
                        fontWeight: "800",
                      }}
                    >
                      {destination.name}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        <div
                          style={{
                            backgroundColor: "#dadada",
                            fontSize: "14px",
                            border: "1px solid",
                            borderColor: "#dadada",
                            borderRadius: "5px",
                          }}
                        >
                          <p
                            style={{
                              marginLeft: "5px",
                              marginRight: "5px",
                              color: "#1C1C1E",
                              fontWeight: "600",
                            }}
                          >
                            <SellIcon
                              style={{ height: "20px", width: "20px" }}
                            />
                            {destination.type_of_destination}
                          </p>
                        </div>
                      </Typography>
                      <Typography>
                        <div
                          style={{
                            backgroundColor: "#dadada",
                            fontSize: "14px",
                            border: "1px solid",
                            borderColor: "#dadada",
                            borderRadius: "5px",
                          }}
                        >
                          <p
                            style={{
                              marginLeft: "5px",
                              marginRight: "5px",
                              color: "#1C1C1E",
                              fontWeight: "600",
                            }}
                          >
                            <SellIcon
                              style={{ height: "20px", width: "20px" }}
                            />
                            {destination.temp}
                          </p>
                        </div>
                      </Typography>
                      <Typography>
                        <div
                          style={{
                            backgroundColor: "#dadada",
                            fontSize: "14px",
                            border: "1px solid",
                            borderColor: "#dadada",
                            borderRadius: "5px",
                          }}
                        >
                          <p
                            style={{
                              marginLeft: "5px",
                              marginRight: "5px",
                              color: "#1C1C1E",
                              fontWeight: "600",
                            }}
                          >
                            <SellIcon
                              style={{ height: "20px", width: "20px" }}
                            />
                            {destination.flight}
                          </p>
                        </div>
                      </Typography>
                    </div>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "2vh",
                      }}
                    >
                      <Button
                        variant="outlined"
                        style={{
                          height: "30px",
                          color: "#1C1C1E",
                          borderColor: "#dadada",
                          background: "#dadada",
                        }}
                        onClick={() => handleDelete(destination.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DestinationData;
