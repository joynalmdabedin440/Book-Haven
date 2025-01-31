const getReadList = () => {
    const readListStr = localStorage.getItem("read-list")
    if (readListStr) {
        return JSON.parse(readListStr)
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
    }
}

export { addBookToReadList, getReadList }