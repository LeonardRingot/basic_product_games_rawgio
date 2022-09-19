
export default function Listegenres(props) {
    return (
      <>
        <div>
          Bienvenu <span className={styleTitle.titleName}>{props.name}</span>
        </div>
        <p>to the Next_Box</p>
      </>
    );
  }

function DisplayGenres()
{
    fetch ('https://api.rawg.io/api/genres?key=997e5039a0574d7e9c2fdc4fd0fd59f0').then((data) =>{
        return data.json();
       }).then((completedatagenres)=>{
        return completedatagenres.results;
    })
}