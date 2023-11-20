export default function Singer({singer}){
  return(
    <div>
        <h4>ID:{singer.id}</h4>
        <h3>Name:{singer.name}</h3>
        <p>Age:{singer.age}</p>
    </div>
  )
}