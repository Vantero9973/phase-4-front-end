import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function VisitedPlaces({ destinations }) {
  const navigate = useNavigate();
  console.log(destinations);

  return (
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
          <Card
            sx={{ width: 275 }}
            style={{
              margin: "10px",
              borderRadius: "10px",
              background: "#2C2C2E",
            }}
            onClick={() => navigate(`/blogs/${destinations.id}`)}
          >
            <CardMedia
              style={{ height: "180px" }}
              component="img"
              image={destination.image}
              alt=""
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
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
