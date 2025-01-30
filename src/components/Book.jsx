import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookName, author, image, rating, tags, category } = book


    return (
        <Link>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10 bg-base-200 py-8 m-8 ">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded-xl h-44 w-36 " />
                </figure>
                <div className="card-body  ">

                    <div >
                        {
                            tags.map((tag, index) => <button id={index} className="btn rounded-full bg-base-200 border-0 text-[#23BE0A] mr-3">{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="border-b-1 border-dashed "></div>
                    <div className="flex flex-wrap justify-between">
                        <p>{category}</p>
                        <div>

                            <p>
                                {rating}/5
                            </p>





                        </div>

                    </div>



                </div>
            </div>

        </Link>
    );
};

export default Book;