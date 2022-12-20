import React, { createContext, useState } from "react";
import axios from "axios";
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

  return (
    <>
      <CardsProvContext.Provider
        value={{ fetchData, data, fetchFilter, setData}}
      >
        {children}
      </CardsProvContext.Provider>
    </>
  );
};

export default CardsProv;
