import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Search({ setSearch }) {
  let handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <input
        style={{
          height: "4vh",
          width: "20vw",
          fontSize: "20px",
          border: "3px solid",
          borderColor: "#1C1C1E",
          background: "#dadada",
          color: "#1C1C1E",
          padding: "1vw",
        }}
        className="prompt"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}
