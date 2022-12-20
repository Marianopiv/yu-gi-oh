import React, { useContext} from "react";
import "./home.css";
import puzzle from "./puzzle.png";
import title from "./title.gif";
import kaiba from "./kaiba img.png";
import yugi from "./yugi.png";
import SearchList from "../searchList/SearchList";

const Home = () => {
  return (
    <>
      <div className="App text-white bg-zinc-800 flex flex-col gap-3">
        <div className="flex items-center justify-center flex-row ">
          <div className="w-2/6 flex justify-center">
            <img className="w-72 object-cover " src={yugi} alt="" />
          </div>
          <div className=" bg-zinc-800 w-2/6 flex flex-col gap-3 App-header">
            <SearchList/>
            <img src={title} alt="" />
            <img src={puzzle} className="App-logo" alt="logo" />
            <h1>Card List Enciclopedia</h1>
          </div>
          <div className="w-2/6 flex justify-center">
            <img className="w-72 object-cover" src={kaiba} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
