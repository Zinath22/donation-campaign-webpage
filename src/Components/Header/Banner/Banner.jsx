

const Banner = () => {
    return (
        <div className="h-[70vh] md:h-[85vh] bg-green-400 ">
           <h1 className="text-5xl text-center items-center justify-center pt-10">I Grow By Helping People In Need</h1>
           <div className="justify-center items-center text-center">
            <input className="ml-3 text-center mt-10 rounded-l-lg py-2" type="text" placeholder="Search Here...." />
            <button className="bg-red-500 text-white  mr-4 rounded-r-lg border-l-0 py-2 px-4">Search</button>
           </div>
        </div>
    );
};

export default Banner;