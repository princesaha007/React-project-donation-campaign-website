import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {
    // console.log(donations);
    return (
        <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 ">
                {
                    donations?.map(d=><DonationsCard key={d.id} donation={d}></DonationsCard>)
                }
            </div>
            
        </div>
    );
};

export default Donations;