

const DonationCard = ({donate}) => {
    const {id,category_name,title,description,price,card_bg,category_name_bg,text_color,button_bg,card_img} = donate || {}

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={card_img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {category_name}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      ${price}
    </p>
    <a className="inline-block" href="#">
      <button
        className=" w-auto px-2 py-2 bg-red-400 text-white rounded-sm "
        type="button"
      >
        View Details
    
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonationCard;