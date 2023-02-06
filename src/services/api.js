//const baseUrl = "https://hp-api.herokuapp.com/api/characters";
const baseUrl = "https://hp-api.onrender.com/api/characters"

// this is a git branching test. This message is on fixed-header branch

export const getCharacters = async () => {
  const exitData=
  fetch(baseUrl)
    .then((response) => response.json())
    //  .then ((data)=>{
    //    data.map((elem, index)=>elem.id=index)})
    //   console.log(data)
    //   return data})
    console.log(exitData) 
    return exitData; //da una promise
};

export const getCharactersData = async () => {
  // const exitData=
  fetch(baseUrl)
    .then((response) => response.json())
    .then ((data)=>{
      data.map((elem, index)=>elem.id=index)
      console.log(data)
      return data})
    // console.log(exitData) 
    // return exitData; //da una promise
};

export const addId =(array)=>{
  array.map((elem, index)=>elem.id=index);
}


export const getCharacterById = async (id) => {
  console.log("id: ",id)
  const personaje=fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => data[id])
    
    
    return personaje;
};

export const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}