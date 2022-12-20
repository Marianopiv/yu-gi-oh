import React from "react";
import { Link } from "react-router-dom";

const IndividualCards = ({ item, chosen }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-center">
      <h1>{chosen ? chosen.name : item.name}</h1>
      <img
        className="w-56 h-56"
        src={
          chosen
            ? chosen.card_images.map((item) => item.image_url)
            : item.card_images.map((item) => item.image_url)
        }
        alt="Not Available"
      />
      {chosen ? (
        <p>{chosen.desc}</p>
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
