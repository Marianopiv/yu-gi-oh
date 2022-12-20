import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndividualCards from "../individualCards/IndividualCards";
import { CardsProvContext } from "../provider/CardsProv";

const DinamicPage = () => {
  const { name } = useParams();
  const [chosen, setChosen] = useState(null);
  const { data } = useContext(CardsProvContext);
    console.log(data)
  useEffect(() => {
    setChosen(data.find((item)=>item.name===name ));
    console.log(chosen)
  }, [data.name,chosen]);

  return (
    <div>
      {chosen &&
        <IndividualCards chosen={chosen}/>}
    </div>
  );
};

export default DinamicPage;
