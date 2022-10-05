import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";

export default function Search() {
  const [searchParam, setSearchParam] = useState("");

  function manageChange() {
    const param = document.getElementById("searchParam").value;
    setSearchParam(param);
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
          onSubmit={() => (document.getElementById("searchParam").value = "")}
        />

        <Link
          onClick={() => (document.getElementById("searchParam").value = "")}
          to={`/search/${searchParam}`}
        >
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
