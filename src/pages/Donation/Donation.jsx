import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noData, setNoData] = useState(false);

  const [showMore, setShowMore]= useState(false);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (donatedItems) {
      setDonated(donatedItems);
    } else {
      setNoData('You have not donated anything yet.');
    }
  }, []);

  console.log(donated);

  return (
    <div>

      {
      noData ? (
        <p className="h-[80vh] flex justify-center items-center">
          {noData}
        </p> ) : 
        (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 mx-auto py-10 ml-[100px]">
            {
           showMore ? donated.map((d) => <DonationCard key={d.id} donation={d} />)

            : donated.slice(0, 4).map((d) => <DonationCard key={d.id} donation={d}/>)
            
            }
          </div>
        
        )
      
      }

<div className="flex justify-center">

    {
     donated.length > 4 && !showMore? (
        <button onClick={()=> setShowMore(!showMore)}  className="font-semibold mx-4 mt-3 px-2 rounded-md h-10 text-white w-[120px] bg-green-600 ">See All </button>

    ) : null

    }

</div>

    </div>
  );
};

export default Donation;
