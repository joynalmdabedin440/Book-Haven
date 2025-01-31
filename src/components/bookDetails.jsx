import { useLoaderData, useParams } from "react-router-dom";
import { addBookToReadList, addBookToWishList } from "../utility/LocalDB";


const BookDetails = () => {

    const { bookId } = useParams()
    const books = useLoaderData()

    
    const book = books.find(book => book.bookId === parseInt(bookId))


    const { bookName, image, author, category, tags, totalPages, publisher, rating, review, yearOfPublishing } = book


    const handleAddReadToReadList = (id) => {
        addBookToReadList(id)
    }

    const handleAddToWishList = (id) => {
        addBookToWishList(id)
    }
    



    return (
        <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row my-14">
            <figure className="bg-base-300 p-12  w-96   ">
                <img className="rounded-xl"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body md:flex-1">
                <h2 className="card-title font-bold text-xl">{bookName}</h2>
                <p>By: {author}</p>
                <div className="border-t-1"></div>
                <p>{category}</p>
                <div className="border-b-1"></div>
                <p>
                    <span className="font-bold ">Review:</span>
                    {review}
                </p>
                <div >
                    <span className="font-bold">Tags:</span>
                    {
                        tags.map((tag, index) => <button key={index} className="btn rounded-full bg-base-200 border-0 text-[#23BE0A] mr-3">#{tag}</button>)
                    }
                </div>

                <div className="border-t-1">
                    <p>Number of Pages: <span className="font-bold">{totalPages}</span></p>
                    <p>Publisher: <span className="font-bold">{publisher}</span></p>
                    <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-bold">{rating}</span></p>


                </div>

                <div>
                    <button onClick={() => {
                        handleAddReadToReadList(bookId)
                    }} className="btn mr-3">Read</button>
                    <button onClick={() => {
                        handleAddToWishList(bookId)
                    }} className="btn bg-[#50B1C9] hover:bg-cyan-300">Wishlist</button>
                </div>









            </div>
        </div>
    );
};

export default BookDetails;