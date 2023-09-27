import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const donation = donations.find(d=> d.id=== idInt)
    console.log(donation);


    return (
        <div>

          

        <DonationDetailsCard donation={donation}></DonationDetailsCard>

            
            
        </div>
    );
};

export default DonationDetails;