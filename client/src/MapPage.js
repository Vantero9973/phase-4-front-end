import MapLink from "./MapLink";

export default function MapPage({ content, setContent, countries }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "lightgray",
      }}
    >
      <MapLink
        content={content}
        setContent={setContent}
        countries={countries}
      />
    </div>
  );
}
