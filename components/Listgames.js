
import { execOnce } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react";
import Listgenres from '../components/Listgenres'

export default function Listegames(props) 
{
  const [allGames, setAllGames] = useState([]);
  const [chosenGame, setChosenGame] = useState();
  const fetchGame = async () => 
  {
  const res = await fetch('https://api.rawg.io/api/games?key=997e5039a0574d7e9c2fdc4fd0fd59f0') .catch((err) => console.log("ERR" + err));
  const games = await res.json();
  setAllGames(games.results);
  }
  const handleClicGame = async(e) => {
    const id = Number(e.currentTarget.dataset.id);
    console.log(id);
    setChosenGame(id);
};
useEffect(() => {
  fetchGame();
}, []);

return (

  <div>
      <p>liste des jeux </p>
      {allGames.map((games) => (
          <h1>{games.name}
          <button data-id={games.id} onClick={handleClicGame}></button>
          </h1>
      ))}


      
  </div>


);
  }

    




