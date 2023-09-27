import { Link } from "react-router-dom";


const DonationCard = ({donation}) => {

    const {id, image, category, title, card_background_color, category_background_color, text_color, price} = donation || {}


    
    const cardStyle = {
        backgroundColor: card_background_color
      };

    const categoryStyle={
        backgroundColor: category_background_color,

        color: text_color
    }

    const textColors= {
        color: text_color

    }
    
    const bgTextColors={
        backgroundColor: text_color
    }






    return (
        

    

      
<div className="flex flex-col sm:flex-row max-w-[500px] border 2px solid h-[170px] blue mt-20 rounded-lg " style={cardStyle}>

            <div className="w-[230px] ">
                <img className="h-full" src={image} alt="" />
            </div>


            
<div>

    <div  >
        <button style={categoryStyle} className="font-semibold mx-4 mt-3 px-2 rounded-md h-7" >{category}</button>
    </div>

    <div>
        <p  className="text-lg font-bold mx-4 ">{title}</p>
    </div>

    <div style={textColors} className="ml-4 font-semibold text-lg">
        <p>$<span>{price}</span></p>
    </div>

    <Link to={`/Donations/${id}`}>
    <button style={bgTextColors} className="ml-4 w-40 h-9 rounded-md mt-2 font-semibold text-lg text-white">View Details</button>

    </Link>

</div>
            



</div>

    );
};

export default DonationCard;