import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacterById } from "../../services/api";
import styles from "./CharacterDetails.module.css"
import { BackButton } from "../BackButton";
import Loading from "../Loading";

export default function CharacterDetails(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) {
      getCharacterById(id).then((data) => {
        setCharacter(data);
        setReady(true);
        console.log(character)
      });
    }
  }, [id, ready]);

  if (!ready) {
    return <Loading/>;
  }
  return (
    <div>
    <div className={styles.container}>
       <h1>{character.name}</h1>
      <div className={styles.fotoNombre}>
       
        <img src={character.image ? character.image : "https://images.cults3d.com/0g4YNhnW7n2F10fgahGMj0ZazzI=/https://files.cults3d.com/uploaders/15634615/illustration-file/375fe74b-25c1-41cc-b222-f563fe60ee55/2fbf2af9179028e9cc3da2b3b3c5a842.jpg" } alt={character.name} />
        
      </div>
      <div className={styles.divdatos}>
        <h3>Id: <span className={styles.datos}>{id}</span>  </h3>
        <h3>House: <span className={styles.datos}>{character.house} </span></h3>
        <h3>Date of birth: <span className={styles.datos}>{character.dateOfBirth ? character.dateOfBirth :"unknown" }</span></h3>
        <h3>Ancestry: <span className={styles.datos}>{character.ancestry ? character.ancestry : "unknown"}</span></h3>
        <h3>Patronus: <span className={styles.datos}>{character.patronus ? character.patronus: "unknown" }</span></h3>
        <h3>Actor: <span className={styles.datos}>{character.actor}</span></h3>
      </div>
      
    </div>
    <BackButton/>
    </div>
  );
}
