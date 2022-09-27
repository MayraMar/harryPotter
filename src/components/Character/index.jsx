import styles from "./Character.module.css";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Character(props) {
  return (
    // <div className={styles.personaje}>
    //   <h3>{props.name}</h3>
    //   <img src={props.image} alt={props.name}></img>
      
    //   <Link to={`/character/${props.id}`} style={{ textDecoration: 'none', color:"black", fontWeight:"bold", backgroundColor:"gray", padding:"0.3rem 2rem" }}>DETAILS</Link>
    // </div>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image ? props.image: "https://images.cults3d.com/0g4YNhnW7n2F10fgahGMj0ZazzI=/https://files.cults3d.com/uploaders/15634615/illustration-file/375fe74b-25c1-41cc-b222-f563fe60ee55/2fbf2af9179028e9cc3da2b3b3c5a842.jpg"} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Button variant="secondary"> <Link to={`/character/${props.id}`}>DETAILS</Link></Button>
      </Card.Body>
    </Card>
  );
}
