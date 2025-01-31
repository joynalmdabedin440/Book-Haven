

const ListedBooksCard = ({ book }) => {
    console.log(book);

    const { bookName, author, tags, publisher, totalPages
        , category, rating, image, yearOfPublishing } = book

    return (
        <div className="card card-side bg-base-100 shadow-sm mb-5">
            <figure className="w-1/3 bg-base-300 p-4 m-4">
                <img className=" w-32 h-40"
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Tags:</p>
                    <div>
                        {
                            tags.map((tag, index) => <button id={index} className="btn rounded-full bg-base-200 border-0 text-[#23BE0A] mr-3">#{tag}</button>)
                        }
                    </div>
                    <p>
                        Year of Publishing: {yearOfPublishing}
                    </p>



                </div>
                <div className="text-xl">
                    <span className="mr-4">Publisher: {publisher}</span>
                    <span> Pages: {totalPages
                    }</span>
                </div>

                <div className="border-t-1 flex gap-4 pt-3">
                    <button className="btn rounded-full font-bold text-[#328EFF] bg-[#c7defb]">Category: {category}</button>
                    <button className="btn rounded-full font-bold text-[#FFAC33] bg-[#fff6ea] ">Rating: {rating}</button>
                    <button className="btn rounded-full bg-green-400">View Details</button>
                </div>


                
            </div>
        </div>
    );
};

export default ListedBooksCard;