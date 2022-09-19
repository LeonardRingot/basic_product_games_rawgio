fetch ('https://api.rawg.io/api/genres?key=997e5039a0574d7e9c2fdc4fd0fd59f0').then((data) =>{
    return data.json();
   }).then((completedatagenres)=>{
    console.log(completedatagenres);  
})

function DisplayGenres()
{

}