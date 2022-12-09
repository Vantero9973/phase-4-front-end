import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NewBlogForm from "./NewBlogForm";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BlogData() {
  const [blogs, setBlogs] = useState();
  //   const [destinations, setDestinations] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/blogs")
  //     .then((r) => r.json())
  //     .then(setBlogs);
  // }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setBlogs((blogs) => blogs.filter((blog) => blog.id !== id));
      }
    });
  }

  if (!blogs) return <h2>Loading...</h2>;
  console.log(blogs);

  return (
    <div style={{ padding: "100px", height: "100vh" }}>
      <NewBlogForm />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {blogs.map((blog) => {
            return (
              <Card
                sx={{ display: "flex" }}
                style={{
                  margin: "10px",
                  width: "80vw",
                  background: "#1C1C1E",
                  borderRadius: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 250 }}
                  image={blog.image}
                  alt="photo"
                />
                <CardContent
                  style={{
                    background: "#1C1C1E",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    component="div"
                    color="#dadada"
                    variant="h5"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {blog.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#dadada"
                    component="div"
                  >
                    {blog.description}
                  </Typography>
                  <Typography>
                    <Button
                      onClick={() => handleDelete(blog.id)}
                      variant="outlined"
                      style={{
                        marginTop: "10px",
                        color: "#1C1C1E",
                        borderColor: "#dadada",
                        background: "#dadada",
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
