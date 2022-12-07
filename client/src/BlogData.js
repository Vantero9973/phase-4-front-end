import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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

  //   useEffect(() => {
  //     fetch(`http://localhost:3000/destinations/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setDestinations(data);
  //       });
  //   }, [id]);

  if (!blogs) return <h2>Loading...</h2>;
  console.log(blogs);

  return (
    <div
      style={{
        height: "100vh",
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
                sx={{ width: 151 }}
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
                <Typography variant="subtitle1" color="#dadada" component="div">
                  {blog.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
