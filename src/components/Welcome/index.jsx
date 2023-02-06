import Header from "../Header"
import 'animate.css';

export default function Welcome() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        Welcome to the Harry Potter's Characters Website
      </h1>
      <img
        style={{ width: "30%", margin: "0", padding: "0" }}
        className="animate__animated animate__rotateIn"
        src="https://uploads.turbologo.com/uploads/design/hq_preview_image/5097676/draw_svg20210617-26747-23281c.svg.png"
        alt="Dancing Logo"
      />
    </div>
  );
}
