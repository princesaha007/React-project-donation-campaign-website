import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const myRoute= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("/donation.json")
            },
            {
                path: "/Donation",
                element: <Donation></Donation>
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
                loader: ()=> fetch ("/donation.json")
                
            },
            {
                path: "/Donations/:id",
                element: <DonationDetails></DonationDetails>,
                loader: ()=> fetch("/donation.json")
            }
          

        ]
    }
])

export default myRoute;