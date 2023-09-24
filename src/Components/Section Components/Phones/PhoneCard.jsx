import React from "react";
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone;
  return (
    
    <div>
        <div className="relative flex full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src= {image}
      className="h-full w-full"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {phone_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       {price}
      </p>
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">{brand_name}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/phone/${id}`} state={phone_name}>
    <button
      className="block w-full select-none rounded-lg text-white bg-indigo-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      See Details
    </button>
    </Link>
  </div>
</div>
    </div>
    
  );
};

export default PhoneCard;


{/* <div>
      <div classNameNameName="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="phone"
          />
        </figure>
        <div classNameNameName="p-6 space-y-4">
          <h2 classNameName="card-title">{phone_name}</h2>
          <div classNameName="flex justify-between">
          <p>{brand_name}</p>
          <p>${price}</p>

          </div>
          <div classNameName="card-actions">
            <button classNameName="btn btn-primary ">Buy Now</button>
          </div>
        </div>
      </div>
    </div> */}