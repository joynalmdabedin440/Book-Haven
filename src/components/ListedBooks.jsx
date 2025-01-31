import { useLoaderData } from "react-router-dom";
import { getReadList, getWishList } from "../utility/LocalDB";
import { useState } from "react";
import { useEffect } from "react";
import ListedBooksCard from "./ListedBooksCard";


const ListedBooks = () => {

    const [listOfBooks, setListOfBooks] = useState([])
    
    const [wishList,setWishList]=useState([])

    const allBooks = useLoaderData()
    
    useEffect(() => {
        const listedBooksFromDB = getReadList()
        const listedBooksFromDBInt = listedBooksFromDB.map(bookId => parseInt(bookId))

        const listedBooks = allBooks.filter(book => listedBooksFromDBInt.includes(book.bookId))
        

        setListOfBooks(listedBooks)
        
    }, [])
    
    useEffect(() => {
        const wishListFromDB = getWishList()
        const wishListFromDBInt = wishListFromDB.map(bookId => parseInt(bookId))
        const wishList = allBooks.filter(book => wishListFromDBInt.includes(book.bookId))
        setWishList(wishList)

    },[])
    

    return (
        <div className="my-4">
            <button className="btn w-full py-4 font-bold">Books</button>
            <div className=" text-center my-6">
                <button className="btn btn-success font-bold ">Sort By</button>
            </div>

            {/* name of each tab group should be unique */}
            <div role="tablist" className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Read List" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        listOfBooks.map(book => <ListedBooksCard book={book} key={book.bookId}></ListedBooksCard> )
                    }

                </div>


                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishList.map(book => <ListedBooksCard book={book} key={book.bookId}>

                        </ListedBooksCard>)
                    }


                </div>

               
            </div>


        </div>
    );
};

export default ListedBooks;