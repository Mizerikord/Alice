import React from "react";
import "./App.css";
import Main from "./Main/Main";
import { Route, Routes } from "react-router-dom";
import Article from "./Article/Article";
import WebLog from "./WebLog/WebLog";
import blogCards from "../utils/blog-cards";
import { useState } from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Footer from "./Footer/Footer";
import Api from "../utils/Api";

function App() {
  const [isCurrentCard, setCurrentCard] = useState({
    blogUrl: "",
    blogTitle: "",
    blogText: "",
    dataDay: "",
    _id: "",
  });

  function sendCustomerData(data) {
    const date = new Date();
    function createDateAsUTC(date) {
      return new Date(
        Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds()
        )
      );
    }
    let now = createDateAsUTC(date);
    data.dateTeme = now;
    Api.sendNote(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSetCurrentCard(card) {
    setCurrentCard(card);
  }

  function handleMenuOpen(item) {
    if (item.classList.contains("menu-burger")) {
      document.querySelector(".header").style.display = "flex";
      document.querySelector(".menu-burger").style.display = "none";
    } else {
      document.querySelector(".header").style.display = "none";
      document.querySelector(".menu-burger").style.display = "flex";
    }
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onMenu={handleMenuOpen}
              onCard={handleSetCurrentCard}
              onSend={sendCustomerData}
            />
          }
        />
        <Route path="/blog" element={<WebLog onMenu={handleMenuOpen} />} />
        <Route
          path="/article"
          element={
            <Article
              isCard={isCurrentCard}
              cards={blogCards}
              onMenu={handleMenuOpen}
            />
          }
        />
        <Route path="*" element={<ErrorPage onMenu={handleMenuOpen} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
