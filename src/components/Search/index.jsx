import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search(){

    const [searchParam, setSearchParam]=useState("");

function handleSearch(e) {
    //e.preventDefault();
   
    const param=document.getElementById("searchParam").value
    console.log(param)
    setSearchParam(param);
    console.log(searchParam)

    }

    function manageChange(){
        const param=document.getElementById("searchParam").value
        setSearchParam(param);
        console.log(searchParam)
    }

    return(
        <form>
            <input type="text" placeholder="A quien deseas buscar?" name="searchParam" id="searchParam" onChange={manageChange}/>
            {/* <Link to="/characters/search" onClick={handleSearch} state={{searchParam}}>Buscar</Link> */}
            {/* <Link to="/characters/search" onClick={handleSearch} state={{param:searchParam}}>Buscar</Link> */}
            <Link to={{pathname:"/characters/search", state:{param:searchParam}}} onClick={handleSearch}>Buscar</Link>
            <Link to={`/search/${searchParam}`} onClick={handleSearch}>Buscarok</Link>
            {/* <button type="submit" onClick={handleSearch}>BUSCAR</button> */}
        </form>
    )
}