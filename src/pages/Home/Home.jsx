import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations";


const Home = () => {
    const donations = useLoaderData()

    // console.log(donations)
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Donations donations={donations}></Donations>
            </div>
        </div>
    );
};

export default Home;