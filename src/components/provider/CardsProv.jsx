import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const CardsProvContext = createContext();
const CardsProv = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
      );
      console.log(result);

      setData(result.data.data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("No anduvo");
      setLoading(false);
    }
  };
  const fetchFilter = async (type) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${type}`
      );
      console.log(result);

      setData(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log("No anduvo");
      setLoading(false);
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
