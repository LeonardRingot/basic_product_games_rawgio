import { execOnce } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react";
import Listgames from '../components/Listgames'
import Styles from '../styles/genre.module.css'


export default function Listegenres(props) {
  const [allGenres, setAllGenres] = useState([]);
  const [chosenGenre, setChosenGenre] = useState();
  const [selectedGenre, setValue] = useState(4);

    const fetchGenres = async () => 
    {
    const res = await fetch('https://api.rawg.io/api/genres?key=997e5039a0574d7e9c2fdc4fd0fd59f0') .catch((err) => console.log("ERR" + err));
    const genres = await res.json();
    setAllGenres(genres.results);
    }
    const handleClicGenre = async(e) => {
      setChosenGenre(selectedGenre);
  };
  useEffect(() => {
    fetchGenres();
}, []);

return (
  <><div>
      <h1>Liste genres jeux videos</h1>
      <select selected={selectedGenre} onChange={(e) => {setValue(e.target.value);}}>
        {allGenres.map((genre) => (<option key={genre.name} value={genre.id}>{genre.name}</option>))}
      </select>
      <button onClick={handleClicGenre}>Filtrer</button>
    </div>
    <Listgames genre={chosenGenre}></Listgames>
  </>
  );
}


 
  
    
  

