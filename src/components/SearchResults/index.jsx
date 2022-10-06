import { getCharacters } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Character from "../Character";
import styles from "./SearchResults.module.css"
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default function SearchResuts() {
  const [personajes, setPersonajes] = useState([]);
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState(null);
  const [personajesShow, setPersonajesShow] = useState(personajes);
  const [lastPage, setLastPage]=useState(1);

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
                console.log(chars)
                
      const searchedItems=chars.filter (elem => validateRegex(param,elem.name))
    
        setPersonajes(searchedItems);
        setReady(true);
        setPage(1);
        setLastPage(Math.ceil(searchedItems.length/4));
      });
    }
  }, [param,ready]);

  useEffect(() => {
    if (ready) {
      setPersonajesShow(personajes.slice((page - 1) * 4, page * 4));
      // console.log(personajesShow);
    }
  }, [page, ready]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = (e) => {
    console.log("page: "+ page+". LastPage: "+ lastPage)
    if (page<lastPage){
    setPage(page + 1);
  }
  // if(page===lastPage){
  //   let boton = e.target;
  //   boton.disabled=true;
  // }
  }


  if (!ready) {
   return <Loading />;
  }

  if (personajesShow.length==0){
    return  <h1 className={styles.title}> No characters matching "{param}"</h1>
  }

  return (
    <div>
      <h1 className={styles.title}> Characters matching "{param}"</h1>

      <div className={styles.personajes}>
        {personajesShow.map((element) => (
          <Character key={element.id} {...element} />
        ))}
      </div>
      <div className="pages">
        <Button variant="warning" onClick={handlePrevPage}>
          Previous Page
        </Button>
        <span>Page {page}/{lastPage}</span>
        <Button variant="warning" onClick={handleNextPage}>
          Next Page
        </Button>
        </div>
    </div>
  );
}
