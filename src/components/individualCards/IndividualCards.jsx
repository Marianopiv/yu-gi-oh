import React from "react";
import { Link } from "react-router-dom";

const IndividualCards = ({ item, chosen, clear }) => {
  return (
    
    <div className="flex flex-col gap-1 items-center justify-center text-center p-3 rounded-md m-2">
      <h1>{chosen ? "" : item.name}</h1>
      <img
        className={`${chosen?"pt-10 sm:pt-0 w-4/4 h-2/4":"w-56 h-56"}`}
        src={
          chosen
            ? chosen.card_images.map((item) => item.image_url)
            : item.card_images.map((item) => item.image_url)
        }
        alt="Not Available"
      />
      {chosen ? (
        <p className="w-3/4 mt-10 font-semibold text-sm sm:text-lg border-black border rounded-md p-3">{chosen.desc}</p>
      ) : (
        <div className="flex justify-center items-center">
          <button className="bg-amber-400 rounded-md p-1 hover:bg-amber-500 hover:px-2 hover:text-white">
            <Link to={`/DinamicPage${item.name}`}>Card Details</Link>{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default IndividualCards;
