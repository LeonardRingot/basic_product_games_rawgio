export default function Listeplatforms(props) {
    return (
      <>
        <div>
        <div class="filteplatforms">
              <select> 
                     <option value={5} selected>PC</option>
                     <option value={6} >PS4</option>
                     <option value={7} >XBOX</option>
                     <option value={8}>Stadia</option>
             </select>
                <p>platforms selectionné: </p>
              </div>
        </div>
        
      </>
    );
  }
 fetch ('https://api.rawg.io/api/platforms?key=997e5039a0574d7e9c2fdc4fd0fd59f0').then((data) =>{
    return data.json();
   }).then((completedataplatforms)=>{
    console.table(completedataplatforms.results);
    //console.log(completedataplatforms.results);
    return completedataplatforms.results;
})
