import { getCharacters } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Character from "../Character";
import styles from "./SearchResults.module.css"
import { useParams } from "react-router-dom";

export default function SearchResuts() {
  const [personajes, setPersonajes] = useState([]);
  const [ready, setReady] = useState(false);

  const { param } = useParams();

  function validateRegex (param, value){
    const regex= new RegExp(param, "gmi")
    return regex.test(value);
  }

  useEffect(() => {
    setReady(false);
  }, [param]);

  useEffect(() => {
    console.log(param);
    if (!ready) {
      getCharacters().then((chars) => {
        chars.map((elem, index) => (elem.id = index));
        //const searchedItems = chars.filter((elem) => elem.name == param);
        console.log(chars)
        //  const regex= new RegExp({param})
         
      const searchedItems=chars.filter (elem => validateRegex(param,elem.name))
    //   const searchedItems=chars.filter (elem => elem.name==="Harry Potter")

        setPersonajes(searchedItems);
        setReady(true);
      });
    }
  }, [param,ready]);

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
      <h1 className={styles.title}> Characters matching "{param}"</h1>

      <div className={styles.personajes}>
        {personajes.map((element) => (
          <Character key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
}
