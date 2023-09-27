import { setItem } from "localforage";

import swal from "sweetalert";

const DonationDetailsCard = ({donation}) => {
    const {id, image, category, title, card_background_color, description, category_background_color, text_color, price} = donation || {}

    const buttonStyle ={
        backgroundColor: text_color 
    }

    const handleAddToDonation = () => {
        const donatedItems = JSON.parse(localStorage.getItem("donated")) || [];
      
        const isExist = donatedItems.find((d) => d.id === id);
      
        if (!isExist) {
          donatedItems.push(donation);
      
          localStorage.setItem("donated", JSON.stringify(donatedItems));
          swal("Thank You", "Your donation has been added", "success");
        } else {
          swal("Error!", "You have already donated", "error");
        }
      };
      



    return (
        <div>
<div className="relative">
  <img className="w-full mx-auto h-[80vh] mt-7" src={image} alt="" />
  
</div>


<div style={buttonStyle} className="absolute left-1/2 md:left-64 transform -translate-x-1/2 text-white text-2xl font-bold py-3 rounded-md sm:w-16 md:w-44 lg:w-44 md:bottom-16   sm: top-[376px]  md:top-[617px] ">
  <button 
  onClick={handleAddToDonation}
  className="w-full h-full ">Donate $<span>{price}</span></button>
</div>


              <div>
                <p className="text-4xl mt-6 font-bold  ">{title}</p>
              </div>


              <div>
                <p className="mt-6 ">{description}</p>
              </div>
            
        </div>
    );
    
};

export default DonationDetailsCard;