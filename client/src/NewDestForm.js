import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <>
      <h1 className="shopTitle addNew">Add New Destination</h1>
      <div className="pokemon-form">
        <form id="pokemon-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="id"
            placeholder="Country Name"
            value={country_name}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <input
            type="text"
            name="sprites"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            name="typeOne"
            placeholder="Type"
            value={type_of_destination}
            onChange={(e) => setType_of_destination(e.target.value)}
          />
          <input
            type="text"
            name="typeTwo"
            placeholder="Temp"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <input
            type="text"
            name="typeTwo"
            placeholder="Flight"
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
          />
          <input
            type="text"
            name="typeTwo"
            placeholder="Country_ID"
            value={country_id}
            onChange={(e) => setCountryId(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
