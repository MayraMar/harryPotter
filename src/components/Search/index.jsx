import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";


export default function Search() {
  const [searchParam, setSearchParam] = useState("");
  const [clearForm, setClearForm]=useState(false);
  //document.getElementById("searchParam").value="";

// function handleSubmit(e) {
//         e.preventDefault();
//         const param = document.getElementById("searchParam").value;
//         setSearchParam(param);
//         console.log("estoy en el handle submit")
//         document.getElementById("searchForm")[0].reset();
//       }

  function manageChange() {
    const param = document.getElementById("searchParam").value;
    setSearchParam(param);
    setClearForm (true);
   
  }


  return (
    <div className={styles.container}>
    <form id="searchForm">
      <input
        type="text"
        placeholder="Who are you looking for?"
        name="searchParam"
        id="searchParam"
        onChange={manageChange}
      />

      
      <Link to={`/search/${searchParam}`}>
        <button className={styles.search}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4991/4991078.png"
            alt="BUSCAR"
          />
        </button>
      
      </Link>
    </form>
    </div>
  );
}
