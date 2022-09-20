import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacterById } from "../../services/api";
import "./CharacterDetails.css"

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
    return <h3>Cargando los detalles del personaje...</h3>;
  }
  return (
    <div className="container">
      <div className="fotoNombre">
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
      </div>
      <div className="datos">
        <h3>Id: {id}</h3>
        <h3>House: {character.house}</h3>
        <h3>Date of birth: {character.dateOfBirth ? character.dateOfBirth :"unknown" }</h3>
        <h3>Ancestry: {character.ancestry ? character.ancestry : "unknown"}</h3>
        <h3>Patronus: {character.patronus ? character.patronus: "unknown" }</h3>
        <h3>Actor: {character.actor}</h3>
      </div>
    </div>
  );
}
