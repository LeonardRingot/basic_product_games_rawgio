import { execOnce } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react";
import Styles from '../styles/genre.module.css'
import styles from '../styles/Home.module.css'

export default function Listegames({genre}) 
{
  const [games, setGames] = useState([]);
  //const [prev, setPrev] = useState([]);
  //const [next, setNext] = useState([]);

  const fetchGames = async () => 
  {
    if(genre != null){
      const res = await fetch("https://api.rawg.io/api/games?key=997e5039a0574d7e9c2fdc4fd0fd59f0&page_size=40&genres=" + genre) .catch((err) => console.log("ERR" + err));
      const games = await res.json();
      setGames(games.results);
    }
  }

  const handleClicGenre = async(e) => {
      const id = Number(e.currentTarget.dataset.genreId);
  };

  useEffect(() => {
    fetchGames();
  }, [genre]);

  return (
    <>
      <div className={styles.card}>
          <h1 >
            {games?.map((game) => (<p key={game.name} onClick={handleClicGenre}>{game.name}</p> ))}
          </h1>
      </div>
      
    </>
  );
}


    




