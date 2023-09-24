import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const [phone, setPhone] = useState([]);
  document.title =  'Phone-Details';

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const phoneDetails = data?.find((phone) => phone.id === id);
    setPhone(phoneDetails);
  }, [id, data]);

  const handleAddToFavorites = () => {
    
    const allData = [];

    const getLSData = JSON.parse(localStorage.getItem("favorite"));

    if (!getLSData) {
      allData.push(phone);
      localStorage.setItem("favorite", JSON.stringify(allData));
      swal({
        title: "Good job!",
        text: "You have added to favorites!",
        icon: "success",
        button: "Aww yess!",
      });
    } 
    else {
      const isExist = getLSData.find((phone) => phone.id === id);

      if (!isExist) {
        allData.push(...getLSData, phone);
        localStorage.setItem("favorite", JSON.stringify(allData));
        swal({
            title: "Good job!",
            text: "You have added to favorites!",
            icon: "success",
            button: "Aww yess!",
          });
      }
      else{
        swal({
            title: "Oops!",
            text: "You have already added to favorites!",
            icon: "error",
            button: "done!",
          });
      }
    }
  };

  const { image, phone_name, brand_name, price, rating } = phone;
  return (
    <div>
      <div className="flex items-center justify-center bg-blue-100 h-[30vh]">
        <h1 className="text-4xl text-center text-black ">Phone details</h1>
      </div>
      <div className="py-10 drop-shadow-sm ">
        <div className="relative  flex items-center justify-center py-10 w-full mx-auto max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[70vh]">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={image}
              alt="image"
              className="h-full w-full "
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {brand_name}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {phone_name}
            </h4>

            <a className="inline-block" href="#">
              <button
                onClick={handleAddToFavorites}
                className="flex select-none bg-blue-100 items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add to favorites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
