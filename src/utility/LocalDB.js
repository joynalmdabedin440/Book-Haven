import { toast } from "react-toastify"

const getReadList = () => {
    const readListStr = localStorage.getItem("read-list")
    if (readListStr) {
        return JSON.parse(readListStr)
    }
    else {
        return []
    }
}

const getWishList = () => {
    const wishListStr = localStorage.getItem("wish-list")
    if (wishListStr) {
        return JSON.parse(wishListStr)
    }
    else {
        return []
     }
}

const addBookToReadList = (id) => {
    const readList = getReadList()
    
    
    if (readList.includes(id)) { 
        alert(id, "This book is already in the read list!")
        
    }
    else {
        readList.push(id)
        localStorage.setItem("read-list", JSON.stringify(readList))
        toast("Successfully add this book to the read list!")
    }
}

const addBookToWishList = (id) => { 
    const wishList = getWishList()
    
    
    if (wishList.includes(id)) {
        alert(id, "This book is already in the wish list!")
    }
    else {
        wishList.push(id)
        localStorage.setItem("wish-list", JSON.stringify(wishList))
        toast("Successfully add this book to the wish list!")
    }
}

export { addBookToReadList, getReadList,addBookToWishList,getWishList }