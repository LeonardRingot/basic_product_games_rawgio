import { execOnce } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react";
import Listgames from '../components/Listgames'

export default function Listegenres(props) {

  const [allGenres, setAllGenres] = useState([]);
    const [chosenGenre, setChosenGenre] = useState();
    const fetchGenres = async () => 
    {
    const res = await fetch('https://api.rawg.io/api/genres?key=997e5039a0574d7e9c2fdc4fd0fd59f0') .catch((err) => console.log("ERR" + err));
    const genres = await res.json();
    setAllGenres(genres.results);
    }
    const handleClicGenre = async(e) => {
      const id = Number(e.currentTarget.dataset.id);
      console.log(id);
      setChosenGenre(id);
  };
  useEffect(() => {
    fetchGenres();
}, []);


return (

    <div>
        <p>liste de genres de jeux videos</p>
        
        {allGenres.map((genre) => (
            <select>
              
            <option>{genre.name}</option>
             
            <button data-id={genre.id} onClick={handleClicGenre}></button>
           </select>
        ))}
          

        
    </div>


  );
}

  /*fetch ('https://api.rawg.io/api/genres?key=997e5039a0574d7e9c2fdc4fd0fd59f0').then((data) =>{
    return data.json();
   }).then((completedatagenres)=>{
    console.table(completedatagenres.results);
    //console.log(completedatagenres.results);
    return completedatagenres.results;
    
    
   
  })
  */
  
    
  

