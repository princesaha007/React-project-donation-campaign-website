import bannerImage from "../../../images/banner.png"

const Banner = () => {
    return (
<>
  <div className='h-[60vh] my-8 relative'>
    <img src={bannerImage} alt="" className="mb-[-20px] sm:mb-0" />
    
  </div>
  <div className="absolute top-44 sm:top-52 md:top-64 lg:top-64 font-bold md:left-[10px] sm:left-0 text-center w-full">
    <p className="text-lg sm:text-lg md:text-5xl lg:text-5xl">I Grow By Helping People In Need</p>
   <div className="sm:w-1/2 md:w-full lg:w-full">
   <input type="text" placeholder="Search here...." className="input input-bordered w-full max-w-sm h-12 font-thin mt-10 rounded-r-none " />
   <button className="bg-red-500 rounded-l-lg sm:rounded-l-none  rounded-r-lg h-12 text-white w-24">Search</button>
   </div>
  </div>

  <div>
    
  </div>
</>

    
    );
};

export default Banner;