import { Typewriter } from "react-simple-typewriter";

export default function Checkboxes({ filters, setFilters }) {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "42px",
          fontWeight: "bold",
          color: "#dadada",
          WebkitTextStroke: "1px black",
          marginBottom: "5vh",
        }}
      >
        <Typewriter
          words={[
            "Where am I going next?",
            "¿Adónde voy después?",
            "Où vais-je ensuite?",
            "次はどこに行くの",
          ]}
          loop={500}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#dadada",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              width: "175px",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                marginBottom: "2vh",
              }}
            >
              TYPE
            </h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                style={{ alignContent: "right" }}
                type="radio"
                name="type"
                value="adventure"
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
                checked={filters.type === "adventure"}
              />
              <label>Adventure </label>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="type"
                value="beach"
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
                checked={filters.type === "beach"}
              />
              <label>Beach</label>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="type"
                value="city"
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
                checked={filters.type === "city"}
              />
              <label>City</label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              width: "175px",
            }}
          >
            <h2 style={{ fontSize: "16px", marginBottom: "2vh" }}>TEMP</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="temp"
                value="hot"
                onChange={(e) =>
                  setFilters({ ...filters, temp: e.target.value })
                }
                checked={filters.temp === "hot"}
              />
              <label>Hot</label>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="temp"
                value="mild"
                onChange={(e) =>
                  setFilters({ ...filters, temp: e.target.value })
                }
                checked={filters.temp === "mild"}
              />
              <label>Mild</label>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="temp"
                value="cold"
                onChange={(e) =>
                  setFilters({ ...filters, temp: e.target.value })
                }
                checked={filters.temp === "cold"}
              />
              <label>Cold</label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              width: "175px",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                marginBottom: "2vh",
                display: "flex",
              }}
            >
              FLIGHT
            </h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="flight"
                value="short"
                onChange={(e) =>
                  setFilters({ ...filters, flight: e.target.value })
                }
                checked={filters.flight === "short"}
              />
              <label>Short</label>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="flight"
                value="medium"
                onChange={(e) =>
                  setFilters({ ...filters, flight: e.target.value })
                }
                checked={filters.flight === "medium"}
              />
              <label>Medium</label>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <input
                type="radio"
                name="flight"
                value="long"
                onChange={(e) =>
                  setFilters({ ...filters, flight: e.target.value })
                }
                checked={filters.flight === "long"}
              />
              <label>Long</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
