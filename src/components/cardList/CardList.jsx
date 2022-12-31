import React, { useContext, useState } from "react";
import IndividualCards from "../individualCards/IndividualCards";
import { CardsProvContext } from "../provider/CardsProv";
import loader from "./loader.png";
import "./CardList.css";
const CardList = () => {
  const { data, clear } = useContext(CardsProvContext);
  const [name, setName] = useState(null);

  

  const handleChange = (name) => {
    setName(name.toLowerCase());
    console.log(name);
  };

  return (
    <>
      <div className="fixed z-50 rounded-lg p-3 m-2 bg-yellow-500">
        {" "}
        <button onClick={clear}> Go Back</button>
      </div>
      <div className="flex flex-col gap-10 mt-16 sm:mt-0">
        <div className="flex justify-center gap-3 items-center flex-col sm:flex-row mt-5">
          <h1 className="font-bold sm:text-4xl text-lg text-center  ">
            {data ? "Search Cards" : "Loading"}
          </h1>
          {data && (
            <input
              onChange={(e) => handleChange(e.target.value)}
              className="border-2 border-black pt-2 mt-1"
              type="text"
            />
          )}
        </div>
        <div className="flex flex-wrap justify-center">
          {data ? (
            name ? (
              data
                .filter((item) => ((item.name).toLowerCase()).includes(name))
                .map((item) => (
                  <>
                    <IndividualCards item={item} />
                  </>
                ))
            ) : (
              data.map((item) => (
                <>
                  <IndividualCards item={item} clear={clear} />
                </>
              ))
            )
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-20">
                <img className="App-logo2 w-60" src={loader} alt="" srcset="" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardList;
