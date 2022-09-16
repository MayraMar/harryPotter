import { getCharacters } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Character from "../Character";
import "./Characterlist.css";
import { useParams } from "react-router-dom";

export default function CharacterList(props) {
  const [personajes, setPersonajes] = useState([]);
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState(null);
  const [personajesShow, setPersonajesShow] = useState([]);
  const { selection } = useParams();
  const [param, setParam] = useState("");

  const searchParam = props.param;

  useEffect(() => {
    if (!ready) {
      // getCharacters().then((chars) => {
      //   addId(chars);

         getCharacters().then((chars) => {
           chars.map((elem, index)=>elem.id=index);

         console.log(chars)
        
        switch (selection) {
          case "all":
            setPersonajes(chars);
            break;
          case "students":
            const students = chars.filter(
              (elem) => elem.hogwartsStudent === true
            );
            setPersonajes(students);
            break;
          case "staff":
            const staff = chars.filter((elem) => elem.hogwartsStaff === true);
            setPersonajes(staff);
            break;
          case "search":
            //const searchedItems=chars.filter (elem => elem.name.match(/potter.*/))
            console.log("Busqueda por parámetro");
            console.log(param);
            const searchedItems = chars.filter(
              (elem) => elem.name === "Harry Potter"
            );

            setPersonajes(searchedItems);
            break;
          default:
            setPersonajes(chars);
        }
        setReady(true);
        setPage(0);
      });
    }
  }, [ready, selection]);

  // useEffect(() => {
  //   if (ready) {
  //     setPersonajesShow(personajes.splice(page + 20));

  //     console.log(personajesShow);
  //   }
  // }, [page]);

  if (!ready) {
    return <h3>Cargando a los Personajes</h3>;
  }

  return (
    <div>
      <h1>{selection} characters</h1>

      <div className="personajes">
        {personajes.map((element) => (
          <Character key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
}
