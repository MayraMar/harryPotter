import { getCharacters, capitalizeFirstLetter } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Character from "../Character";
import "./Characterlist.css";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";

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
            const griffindor = chars.filter(
              (elem) => elem.house === "Gryffindor"
            );
            setPersonajes(griffindor);
            break;
          case "Hufflepuff":
            const hufflepuff = chars.filter(
              (elem) => elem.house === "Hufflepuff"
            );
            setPersonajes(hufflepuff);
            break;
          case "Ravenclaw":
            const ravenclaw = chars.filter(
              (elem) => elem.house === "Ravenclaw"
            );
            setPersonajes(ravenclaw);
            break;
          case "Slytherin":
            const slytherin = chars.filter(
              (elem) => elem.house === "Slytherin"
            );
            setPersonajes(slytherin);
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
      setPersonajesShow(personajes.slice((page - 1) * 4, page * 4));

      console.log(personajesShow);
    }
  }, [page, ready]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => setPage(page + 1);

  if (!ready) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="title">{capitalizeFirstLetter(selection)} characters</h1>

      <div className="personajes">
        {personajesShow.map((element) => (
          <Character key={element.id} {...element} />
        ))}
      </div>
      <div className="pages">
        <Button variant="warning" onClick={handlePrevPage}>
          Previous Page
        </Button>
        <span>Page {page}</span>
        <Button variant="warning" onClick={handleNextPage}>
          Next Page
        </Button>
      </div>
    </div>
  );
}
