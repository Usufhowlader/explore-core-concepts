import './book.css';
export default function Book({books}){
    const {id,name,price}=books;
    return(
        <div className="book">
            <h3>Id: {id}</h3>
            <h3>Book Name: {name}</h3>
            <h3>Price: {price}</h3>
        </div>
    )
}