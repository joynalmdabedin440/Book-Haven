import { useLoaderData } from "react-router-dom";
import { getReadList, getWishList } from "../utility/LocalDB";
import { useState } from "react";
import { useEffect } from "react";
import ListedBooksCard from "./ListedBooksCard";


const ListedBooks = () => {

    const [listOfBooks, setListOfBooks] = useState([])

    const [wishList, setWishList] = useState([])

    const [sortType, setSortType] = useState('')



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

    }, [])

    const handleSortBy = (type) => {

       
        setSortType(type)

        if (sortType === 'Rating') {
            const sortedReadList = [...listOfBooks].sort((a, b) => b.rating - a.rating)
            const sortedWishList = [...wishList].sort((a, b) => b.rating - a.rating)
            setListOfBooks(sortedReadList)
            setWishList(sortedWishList)
        }

        else if (sortType === 'Number of Pages') {
            const sortedReadList = [...listOfBooks].sort((a, b) => a.totalPages
                - b.totalPages)
            const sortedWishList = [...wishList].sort((a, b) => a.totalPages
                - b.totalPages)

            setListOfBooks(sortedReadList)

            setWishList(sortedWishList)




        }

        else if (sortType === 'Publish Year') {

            const sortedReadList = [...listOfBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            const sortedWishList = [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
            
            setListOfBooks(sortedReadList)
            setWishList(sortedWishList)





        }
    }


    return (
        <div className="my-4">
            <button className="btn w-full py-4 font-bold">Books</button>
            <div className=" text-center my-6">
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn btn-success font-bold m-3 text-white"> {
                        sortType ? `Sort by:  ${sortType}` : 'Sort By ⬇️'

                    }</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-bold">
                        <li onClick={() => 
                            handleSortBy('Rating')
                        }><a>Rating</a></li>
                        <li onClick={() => 
                            handleSortBy('Number of Pages')
                        }><a>Number of Pages</a></li>
                        <li onClick={() => 
                            handleSortBy('Publish Year')
                        }><a>Publisher Year</a></li>
                    </ul>
                </div>


            </div>

            {/* name of each tab group should be unique */}
            <div role="tablist" className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Read List" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        listOfBooks.map(book => <ListedBooksCard book={book} key={book.bookId}></ListedBooksCard>)
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