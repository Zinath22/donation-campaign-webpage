import { Link } from "react-router-dom";


const DonationsCard = ({donate}) => {
    const {id,category_name,title,description,price,card_bg,category_name_bg,text_color,button_bg,card_img} = donate || {}
    console.log(donate);
    return (
        <div>
      <Link to={`/donations/${id}`}>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="rounded-md"
      src={card_img}
      
    />
  </div>
  <div className="p-6">
    <h4 style={{backgroundColor: category_name_bg}} className="w-max px-3 py-2 rounded-md block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {category_name}
      
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
     {title}
    </p>
  </div>
  </div>
      </Link>
  </div>
  
      

       
    );
};

export default DonationsCard;