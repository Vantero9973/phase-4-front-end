import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import Button from "@mui/material/Button";

export default function NewDestForm() {
  const [blogs, setBlogs] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [destination_id, setDestinationId] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((r) => r.json())
      .then(setBlogs);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name,
      description: description,
      image: image,
      destination_id: parseInt(destination_id),
    };
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newBlogs) => {
          handleAddBlog(newBlogs);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  const [{ data: blog, error, status }, setBlog] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((blog) =>
          setBlog({ data: blog, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setBlog({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleAddBlog(newBlog) {
    setBlog({
      data: {
        ...blog,
        blogs: [...blog, newBlog],
      },
      error: null,
      status: "resolved",
    });
  }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "45vw" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "left",
          fontSize: "36px",
          fontWeight: "600",
          color: "#dadada",
        }}
      >
        Points of Interest
      </h1>
      <Popup
        trigger={
          <Button
            variant="outlined"
            className="addNewPopup"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              background: "#1C1C1E",
              color: "#dadada",
              borderColor: "#dadada",
            }}
          >
            Add New Point of Interest
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
            height: "50vh",
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
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                style={{
                  width: "40vw",
                  height: "5vh",
                  fontSize: "24px",
                  display: "flex",
                  marginBottom: "10px",
                }}
                type="text"
                name="id"
                placeholder="Body"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                style={{
                  width: "40vw",
                  height: "5vh",
                  fontSize: "24px",
                  display: "flex",
                  marginBottom: "10px",
                }}
                type="text"
                name="sprites"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                style={{
                  width: "40vw",
                  height: "5vh",
                  fontSize: "24px",
                  display: "flex",
                  marginBottom: "10px",
                }}
                type="text"
                name="typeTwo"
                placeholder="Destination ID"
                value={destination_id}
                onChange={(e) => setDestinationId(e.target.value)}
              />
              <Button
                variant="outlined"
                type="submit"
                style={{
                  fontSize: "16px",
                  fontWeight: "bolder",
                  color: "#1C1C1E",
                  background: "#dadada",
                  marginLeft: "15vw",
                  marginTop: "2vh",
                  width: "10vw",
                }}
              >
                Add New POI
              </Button>
            </form>
          </div>
        </div>
      </Popup>
    </div>
  );
}
