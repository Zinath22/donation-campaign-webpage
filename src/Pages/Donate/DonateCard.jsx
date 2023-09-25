

const DonateCard = ({donate}) => {
    const {id,category_name,title,description,price,card_bg,category_name_bg,text_color,button_bg,card_img} = donate || {}

    const handleAddDonation =()=>{
        console.log(donate)
    }


    return (
        <div className="flex justify-center items-center ">
              <div className="relative flex w-[600px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="w-full rounded-xl h-[300px]"
      src={card_img}/>
      <div className=" absolute bottom-0  p-5 bg-black bg-opacity-50 w-full">
        <button 
        onClick={handleAddDonation}
        className="w-auto px-3   rounded-sm h-[32px] text-white bg-red-500">
            Donate {price}$
            </button>

      </div>
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {category_name}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
     {description}
    </p>
  </div>
 
        </div>
        </div>
    );
};

export default DonateCard;