import { NavLink } from "react-router-dom";
import logoImage from "../../../images/Logo.png"

const Navbar = () => {
    return (
        <div>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center sm:justify-between items-center sm:mx-2 md:mx-4">
            <div >
                <img className="" src={logoImage} alt="" />

            </div>
           <div className="flex gap-8 text-lg">

<NavLink 
           to="/"
           className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        }
   >
  Home
</NavLink>

<NavLink          
           to="/Donation"
           className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        }
   >
  Donation
</NavLink>

<NavLink          
           to="/Statistics"
           className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        }
   >
  Statistics
</NavLink>

          </div>





           </div>
        </div>
    );
};

export default Navbar;