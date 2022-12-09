export default function Search({ setSearch }) {
  let handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        style={{
          height: "4vh",
          width: "20vw",
          fontSize: "20px",
          background: "#dadada",
          color: "#1C1C1E",
          padding: "1vw",
        }}
        className="prompt"
        placeholder="Search Destinations"
        onChange={handleChange}
      />
    </div>
  );
}
