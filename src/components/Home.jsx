import bannar from '../assets/bannar-image/books.jpg'
import Books from './Books';

const Home = () => {
    return (
        <div >
            <div className="hero bg-base-200 min-h-[calc(100vh-80px)] rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannar}
                        className="max-w-sm  rounded-lg shadow-2xl" />
                  
                    <div className="pr-4" >
                        <h1 className="text-5xl font-bold pb-7">Books to freshen up  <br /> your bookshelf</h1>
                       
                        <button className="btn btn-success ">View The List</button>
                    </div>
                </div>
            </div>

            {/* Books section */}
            <div>
                <h2 className="text-4xl font-bold pt-7 pb-4 text-center">Books</h2>

                <Books></Books>

                

            </div>


        </div>
    );
};

export default Home;