import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { MainContainer } from "./styled_main.js";
import MainContent from "../main_content/main_content.jsx";

const Main = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <section className="d-flex h-100">
          <Sidebar />
          <MainContent />
        </section>
      </MainContainer>
    </BrowserRouter>
  );
};

export default Main;
