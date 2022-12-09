import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import Button from "@mui/material/Button";

export default function NewDestForm() {
  const [destinations, setDestinations] = useState([]);
  const [name, setName] = useState("");
  const [country_name, setCountryName] = useState("");
  const [image, setImage] = useState("");
  const [temp, setTemp] = useState("");
  const [type_of_destination, setType_of_destination] = useState("");
  const [flight, setFlight] = useState("");
  const [country_id, setCountryId] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((r) => r.json())
      .then(setDestinations);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name,
      country_name: country_name,
      image: image,
      temp: temp,
      type_of_destination: type_of_destination,
      flight: flight,
      country_id: parseInt(country_id),
    };
    fetch("http://localhost:3000/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newDestination) => {
          handleAddDestination(newDestination);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  const [{ data: destination, error, status }, setDestination] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/destinations/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((destination) =>
          setDestination({ data: destination, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setDestination({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleAddDestination(newDestination) {
    setDestination({
      data: {
        ...destination,
        destinations: [...destination, newDestination],
      },
      error: null,
      status: "resolved",
    });
  }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "52vw",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "left",
          fontSize: "36px",
          fontWeight: "600",
          color: "#dadada",
        }}
      >
        Destinations
      </h1>
      <Popup
        trigger={
          <Button
            variant="outlined"
            className="addNewPopup"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              background: "#1C1C1E",
              color: "#dadada",
              borderColor: "#dadada",
            }}
          >
            Add New Destination
          </Button>
        }
        modal
        nested
      >
        <div
          style={{
            background: "#1C1C1E",
            display: "flex",
            width: "50vw",
            height: "60vh",
            borderRadius: "50px",
          }}
        >
          <div
            className="pokemon-form"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "2vh",
            }}
          >
            <div>
              <form
                id="pokemon-form"
                onSubmit={handleSubmit}
                style={{ marginLeft: "5vw" }}
              >
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    display: "flex",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="name"
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="id"
                  placeholder=" Country Name"
                  value={country_name}
                  onChange={(e) => setCountryName(e.target.value)}
                />
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="sprites"
                  placeholder=" Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="typeOne"
                  placeholder=" Type"
                  value={type_of_destination}
                  onChange={(e) => setType_of_destination(e.target.value)}
                />
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="typeTwo"
                  placeholder=" Temp"
                  value={temp}
                  onChange={(e) => setTemp(e.target.value)}
                />
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="typeTwo"
                  placeholder=" Flight"
                  value={flight}
                  onChange={(e) => setFlight(e.target.value)}
                />
                <input
                  style={{
                    width: "40vw",
                    height: "5vh",
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                  type="text"
                  name="typeTwo"
                  placeholder=" Country ID"
                  value={country_id}
                  onChange={(e) => setCountryId(e.target.value)}
                />
                <Button
                  variant="outlined"
                  type="submit"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bolder",
                    color: "#1C1C1E",
                    background: "#dadada",
                    marginLeft: "12.5vw",
                    marginTop: "2vh",
                    width: "15vw",
                  }}
                >
                  Add New Destination
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
