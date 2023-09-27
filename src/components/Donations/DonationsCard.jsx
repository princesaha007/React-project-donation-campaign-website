import { Link } from "react-router-dom";


const DonationsCard = ({donation}) => {
    const {id, image, category, title, card_background_color, category_background_color, text_color} = donation || {}

    const cardStyle = {
        backgroundColor: card_background_color
      };

    const categoryStyle={
        backgroundColor: category_background_color,

        color: text_color
    }
    
    const textColors={
        color: text_color
    }



    return (
        <Link to={`/Donations/${id}`}>


<div className="rounded-lg overflow-hidden max-w-[320px]  " style={cardStyle} >
    <div >
        <img 
            src={image}
            alt="ui/ux review check"
        />
    </div>

    <div className="">
        <button style={categoryStyle } className="font-semibold mx-4 mt-3 px-2 rounded-md h-7" >{category}</button>
    </div>

    <div>
        <p style={textColors} className="text-lg font-semibold mx-4 mb-4">{title}</p>
    </div>
</div>
        
        
        
        
        
        
        </Link>

    );
};

export default DonationsCard;