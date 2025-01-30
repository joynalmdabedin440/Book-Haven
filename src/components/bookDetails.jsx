import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams()
    const books = useLoaderData()
    const book = books.find(book => book.bookId === parseInt(bookId))
    
    console.log(book);
    
    
    return (
        <div>
            <h1>Book Details</h1>
            
        </div>
    );
};

export default BookDetails;