import Checkboxes from "./Checkboxes";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SellIcon from "@mui/icons-material/Sell";
import plane from "./plane.gif";

export default function DestinationSelector({ destinations }) {
  const [filters, setFilters] = useState({});
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({
    name: "Maz's House",
    image: "https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif",
    temp: "mild",
    type_of_destination: "adventure",
    flight: "long",
    country_name: "Sudan",
    country_id: "1",
  });

  useEffect(() => {
    setFilteredDestinations(destinations);
  }, [destinations]);

  function setMyFilters(value) {
    setFilters(value);
    console.log(filters);
    setFilteredDestinations(
      destinations.filter(
        (destination) =>
          destination.type_of_destination === value.type &&
          destination.temp === value.temp &&
          destination.flight === value.flight
      )
    );
  }

  function selectDestination() {
    setSelectedDestination(
      filteredDestinations[
        Math.floor(Math.random() * filteredDestinations.length)
      ]
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        marginTop: "5vh",
      }}
    >
      <div style={{ marginLeft: "5vw", marginBottom: "5vh" }}>
        <Checkboxes filters={filters} setFilters={setMyFilters} />
        <Button
          variant="outlined"
          style={{
            color: "#dadada",
            fontFamily: "'Roboto', sans-serif",
            borderColor: "#dadada",
            display: "flex",
            margin: "10px",
            marginTop: "5vh",
            fontSize: "20px",
            fontWeight: "bold",
            background: "#1C1C1E",
            zIndex: "900",
          }}
          onClick={selectDestination}
        >
          Select Destination
        </Button>
      </div>
      <div style={{ margin: "8vh", marginTop: "5vh" }}>
        {selectDestination && (
          <Card
            sx={{ width: 600 }}
            style={{
              borderRadius: "25px",
              background: "#2C2C2E",
              boxShadow: "0 0 100px",
            }}
          >
            <CardMedia
              style={{ height: "400px", background: "#dadada" }}
              component="img"
              height="500"
              image={selectedDestination.image}
              alt=""
            />
            <CardContent
              style={{
                backgroundColor: "#1C1C1E",
                color: "#dadada",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "900",
                }}
              >
                {selectedDestination.name}, {selectedDestination.country_name}
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
                      fontSize: "18px",
                      border: "1px solid",
                      borderColor: "#dadada",
                      borderRadius: "25px",
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
                      <SellIcon />
                      {selectedDestination.type_of_destination}
                    </p>
                  </div>
                </Typography>
                <Typography>
                  <div
                    style={{
                      backgroundColor: "#dadada",
                      fontSize: "18px",
                      border: "1px solid",
                      borderColor: "#dadada",
                      borderRadius: "25px",
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
                      <SellIcon />
                      {selectedDestination.temp}
                    </p>
                  </div>
                </Typography>
                <Typography>
                  <div
                    style={{
                      backgroundColor: "#dadada",
                      fontSize: "18px",
                      border: "1px solid",
                      borderColor: "#dadada",
                      borderRadius: "25px",
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
                      <SellIcon />
                      {selectedDestination.flight} flight
                    </p>
                  </div>
                </Typography>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
