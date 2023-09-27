import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1300px]  mx-auto my-7">
           
            <Navbar></Navbar>

            <div>
                <Outlet></Outlet>
            </div>
            
        
        </div>
    );
};

export default MainLayout;