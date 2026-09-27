import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import IndividualCards from "../individualCards/IndividualCards";
import { CardsProvContext } from "../provider/CardsProv";
import arrows from "../../arrows.png";

const DinamicPage = () => {
  const { name } = useParams();
  const { data, navigate } = useContext(CardsProvContext);
  const chosen = data?.find((item) => item.name === name);

  const clear = () => {
    navigate(-1);
  };

  return (
    <div>
      <div
        onClick={clear}
        className="fixed z-50 rounded-lg p-3 m-2 bg-yellow-500 w-10 hover:cursor-pointer"
      >
        {" "}
        <img src={arrows} alt="" />
      </div>
      {chosen && <IndividualCards chosen={chosen} />}
    </div>
  );
};

export default DinamicPage;
