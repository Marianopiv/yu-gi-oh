import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const CardsProvContext = createContext();
const CardsProv = ({ children }) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
      );

      setData(result.data.data);
    } catch (error) {
      console.log("No anduvo");
    }
  };
  const fetchFilter = async (type) => {
    try {
      const result = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${type}`
      );

      setData(result.data.data);
    } catch (error) {
      console.log("No anduvo");
    }
  };
  const navigate = useNavigate();

  const clear = () => {
    navigate(-1);
    setData(null);
  };

  return (
    <>
      <CardsProvContext.Provider
        value={{ fetchData, data, fetchFilter, setData, clear, navigate}}
      >
        {children}
      </CardsProvContext.Provider>
    </>
  );
};

export default CardsProv;
