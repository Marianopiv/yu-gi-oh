import React, { useContext, useEffect, useState } from "react";
import IndividualCards from "../individualCards/IndividualCards";
import { CardsProvContext } from "../provider/CardsProv";
import loader from "./loader.png";
import "./CardList.css";
import arrows from "../../arrows.png";

const ITEMS_PER_PAGE = 100;

const CardList = () => {
  const { data, clear } = useContext(CardsProvContext);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [data]);

  const handleSearch = (value) => {
    setName(value.toLowerCase().trim());
    setPage(1);
  };

  const filteredCards = data?.filter((item) =>
    item.name.toLowerCase().includes(name)
  ) || [];
  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(page, Math.max(totalPages, 1));
  const visibleCards = filteredCards.slice(
    ITEMS_PER_PAGE * (currentPage - 1),
    ITEMS_PER_PAGE * currentPage
  );

  // Keep the controls compact, even when the full catalogue has many pages.
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
    .filter((number) =>
      number === 1 || number === totalPages || Math.abs(number - currentPage) <= 2
    );

  return (
    <>
      <button onClick={clear} aria-label="Back" className="fixed z-50 rounded-lg p-3 m-2 bg-yellow-500 w-10 hover:cursor-pointer">
        <img src={arrows} alt="" />
      </button>
      <div className="flex flex-col gap-10 mt-16 sm:mt-0">
        <div className="flex justify-center gap-3 items-center flex-col sm:flex-row mt-5">
          <h1 className="font-bold sm:text-4xl text-lg text-center">
            {data ? "Search Cards" : "Loading"}
          </h1>
          {data && (
            <input
              value={name}
              onChange={(event) => handleSearch(event.target.value)}
              aria-label="Search cards by name"
              className="border-2 border-black pt-2 mt-1"
              type="search"
            />
          )}
        </div>
        <div className="flex flex-wrap justify-center">
          {data ? (
            visibleCards.length ? visibleCards.map((item) => (
              <IndividualCards key={item.id} item={item} clear={clear} />
            )) : <p>No cards found.</p>
          ) : (
            <div className="flex flex-col items-center justify-center gap-20">
              <img className="App-logo2 w-60" src={loader} alt="Loading cards" />
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <nav aria-label="Card pages" className="flex justify-center items-center gap-2 flex-wrap mx-2 mb-8">
            <button className="border-2 rounded-md p-1" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>Previous</button>
            {pages.map((number, index) => (
              <React.Fragment key={number}>
                {index > 0 && number - pages[index - 1] > 1 && <span aria-hidden="true">…</span>}
                <button
                  className={`border-2 rounded-md p-1 ${number === currentPage ? "bg-amber-400" : ""}`}
                  aria-label={`Page ${number}`}
                  aria-current={number === currentPage ? "page" : undefined}
                  onClick={() => setPage(number)}
                >{number}</button>
              </React.Fragment>
            ))}
            <button className="border-2 rounded-md p-1" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>Next</button>
          </nav>
        )}
      </div>
    </>
  );
};

export default CardList;
