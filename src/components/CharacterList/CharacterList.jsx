import { getCharacters } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Character from "../Character";
import "./Characterlist.css";
import { useParams } from "react-router-dom";

export default function CharacterList() {
  const [personajes, setPersonajes] = useState([]);
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState(null);
  const { selection } = useParams();
  const [personajesShow, setPersonajesShow] = useState(personajes);

  useEffect(() => {
    setReady(false);
  }, [selection]);

  useEffect(() => {
    if (!ready) {
      getCharacters().then((chars) => {
        chars.map((elem, index) => (elem.id = index));

        console.log(chars);

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
          case "Gryffindor":
            const griffindor = chars.filter((elem) => elem.house === "Gryffindor");
            setPersonajes(griffindor);
            break;
          default:
            setPersonajes(chars);
        }
        console.log("Estoy dentro del useEffect. Selection= " + selection);

        setReady(true);
        setPage(1);
      });
    }
  }, [selection, ready]);

  useEffect(() => {
    if (ready) {
      setPersonajesShow(personajes.slice((page-1)*4, page*4));

      console.log(personajesShow);
    }
  }, [page, ready]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => setPage (page+1)
  

  if (!ready) {
    return <h3>Cargando a los Personajes</h3>;
  }

  return (
    <div>
      <h1>{selection} characters</h1>
      <div className="pages">
        <button onClick={handlePrevPage}>Previous Page</button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next Page</button>
      </div>

      <div className="personajes">
        {personajesShow.map((element) => (
          <Character key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
}
