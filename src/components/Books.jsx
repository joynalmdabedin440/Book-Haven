import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";


const Books = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch("booksData.json")
            .then(response => response.json())
            .then(data => setBooks(data))
        
    }, [])
   
    console.log(books);
    

   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                books.map(book => <Book book={book} id={book.bookId}></Book> )
            }
            
            
        </div>
    );
};

export default Books;