import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndividualCards from "../individualCards/IndividualCards";
import { CardsProvContext } from "../provider/CardsProv";

const DinamicPage = () => {
  const { name } = useParams();
  const [chosen, setChosen] = useState(null);
  const { data, navigate } = useContext(CardsProvContext);
    console.log(data)
  useEffect(() => {
    setChosen(data.find((item)=>item.name===name ));
    console.log(chosen)
  }, [data.name,chosen]);

  const clear = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="fixed z-50 rounded-lg p-3 m-2 bg-yellow-500">
        {" "}
        <button onClick={clear}> Go Back</button>
      </div>
      {chosen &&
        <IndividualCards chosen={chosen}/>}
    </div>
  );
};

export default DinamicPage;
