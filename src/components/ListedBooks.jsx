import { useLoaderData } from "react-router-dom";
import { getReadList } from "../utility/LocalDB";
import { useState } from "react";
import { useEffect } from "react";


const ListedBooks = () => {

    const [listOfBooks,setListOfBooks]=useState([])

    const allBooks = useLoaderData()
    
    useEffect(() => {
        const listedBooksFromDB = getReadList()
        const listedBooksFromDBInt = listedBooksFromDB.map(bookId => parseInt(bookId))

        const listedBooks = allBooks.filter(book => listedBooksFromDBInt.includes(book.bookId))

        setListOfBooks(listedBooks)
        
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
                    REad list

                </div>

                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">WishList</div>

               
            </div>


        </div>
    );
};

export default ListedBooks;