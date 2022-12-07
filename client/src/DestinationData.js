import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SellIcon from "@mui/icons-material/Sell";

function DestinationData() {
  const [destinations, setDestinations] = useState();
  console.log(destinations);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
      });
  }, [id]);

  console.log(destinations);

  if (!destinations) return <h2>Loading...</h2>;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "4vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        {destinations.map((destination) => {
          return (
            <Link to={`/blogs/${id}`}>
              <Card
                sx={{ width: 300 }}
                style={{
                  margin: "10px",
                  borderRadius: "25px",
                  backgroundColor: "#2C2C2E",
                }}
                onClick={() => navigate(`/blogs/${destinations.id}`)}
              >
                <CardMedia
                  style={{ height: "200px" }}
                  component="img"
                  height="140"
                  image={destination.image}
                  alt=""
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
                          <SellIcon style={{ height: "20px", width: "20px" }} />
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
                          <SellIcon style={{ height: "20px", width: "20px" }} />
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
                          <SellIcon style={{ height: "20px", width: "20px" }} />
                          {destination.flight}
                        </p>
                      </div>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DestinationData;
