import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "../components/cardList/CardList";
import DinamicPage from "../components/dinamicPage/DinamicPage";
import Home from "../components/home/Home";
import CardsProv from "../components/provider/CardsProv";
const Rutas = () => {
  return (
    <BrowserRouter>
      <CardsProv>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CardList" element={<CardList />} />
          <Route path="/DinamicPage:name" element={<DinamicPage/>}/>
        </Routes>
      </CardsProv>
    </BrowserRouter>
  );
};

export default Rutas;
