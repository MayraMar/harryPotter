import "./Character.css";
import { Link } from "react-router-dom";

export default function Character(props) {
  return (
    <div className="personaje">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name}></img>
      <br></br>
      <Link to={`/character/${props.id}`} style={{ textDecoration: 'none', color:"black", fontWeight:"bold", backgroundColor:"gray", padding:"0.3rem 2rem" }}>DETAILS</Link>
    </div>
  );
}
