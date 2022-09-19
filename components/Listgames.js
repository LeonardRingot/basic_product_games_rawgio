fetch ('https://api.rawg.io/api/games?key=997e5039a0574d7e9c2fdc4fd0fd59f0').then((data) =>{
    return data.json();
   }).then((completedata)=>{
    console.log(completedata.results);
    return completedata.results;
})

function DisplayGames()
{

}
