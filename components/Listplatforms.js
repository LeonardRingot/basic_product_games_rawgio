let Display =fetch ('https://api.rawg.io/api/platforms?key=997e5039a0574d7e9c2fdc4fd0fd59f0').then((data) =>{
    return data.json();
   }).then((completedataplatforms)=>{
    console.log(completedataplatforms);
})
function DisplayPlatforms()
{

}