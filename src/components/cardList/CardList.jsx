import React, { useContext, useState, useEffect } from "react";
import IndividualCards from "../individualCards/IndividualCards";
import { CardsProvContext } from "../provider/CardsProv";
import loader from "./loader.png";
import "./CardList.css";
import arrows from "../../arrows.png";

const ITEMS_PER_PAGE = 50; // Number of items to display per page

const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

const CardList = () => {
  const { data, clear } = useContext(CardsProvContext);
  const [name, setName] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (name) => {
    setName(name.toLowerCase());
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    data&&
    setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
  }, [data]);

  return (
    <>
      <div onClick={clear} className="fixed z-50 rounded-lg p-3 m-2 bg-yellow-500 w-10 hover:cursor-pointer">
        {" "}
        <img  src={arrows} alt="" />
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
                .slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page)
                .map((item) => (
                  <>
                    <IndividualCards item={item} />
                  </>
                ))
            ) : (
              data
                .slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page)
                .map((item) => (
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
      <div className="flex justify-center gap-2 flex-wrap mx-2">{pagination.map((item)=><button className="border-2 rounded-md p-1" onClick={()=>handlePageChange(item)}>{item}</button>)}</div>
    </>
  );
};

export default CardList;
