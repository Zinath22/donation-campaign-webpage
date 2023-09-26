// import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
  const {
    category_name,
    title,
    price,
    card_bg,
    category_name_bg,
    text_color,
    card_img,
    id
  } = donate || {};

  return (
  
      
      <div style={{background:card_bg}} className="flex rounded-lg flex-col md:flex-row gap-4 items-center ">
        <img className="" src={card_img} alt={title} />
        <div>
          <h3 className=" py-1 px-2 mb-2 rounded inline-block font-semibold text-lg text-center" style={{ color:text_color, backgroundColor:category_name_bg}}>{category_name}</h3>
          <p className="text-2xl text-black mb-2 font-semibold">{title}</p>
          <p className="text-lg font-semibold" style={{color: text_color}}>${price}</p>
          <Link to={`/donations/${id}`}>
          <button className="btn text-lg text-white p-2 rounded mt-2 mb-3 " style={{background: text_color}}>View Details</button>
          </Link>
        </div>
      </div>
  );
};
DonationCard.propTypes = {
  donate: PropTypes.array,
};

export default DonationCard;
{/* <div
        style={{ backgroundColor: card_bg }}
        className="  flex  justify-center items-center w-full   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={card_img}
            alt="image"
            className="w-full"
          />
        </div>
        <div className="p-6">
          <h6
            style={{ backgroundColor: category_name_bg, color: text_color }}
            className="mb-4 w-max px-3 py-2 rounded-md block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased"
          >
            {category_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
            {title}
          </h4>
          <p
            style={{ color: text_color }}
            className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
          >
            ${price}
          </p>
          <a className="inline-block" href="#">
            <button
              style={{ backgroundColor: text_color }}
              className=" w-auto px-3 py-2 text-white rounded-md "
              type="button"
            >
              View Details
            </button>
          </a>
        </div>
      </div> */}