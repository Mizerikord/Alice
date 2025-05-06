import React from "react";
import "./App.css";
import Main from "./Main/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import Article from "./Article/Article";
import WebLog from "./WebLog/WebLog";
import blogCards from "../utils/blog-cards";
import { useEffect, useState } from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import PopupSubmit from "./Popup/PopupSubmit/PopupSubmit";
import Api from "../utils/Api";

function App() {
  const [isCurrentCard, setCurrentCard] = useState({
    blogUrl: "",
    blogTitle: "",
    blogText: "",
    dataDay: "",
    _id: "",
  });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setIsLoaded(true);
    return document
      .querySelector("#root")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  function sendCustomerData(data) {
    closePopup();
    openPopupsupmit();
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
        clearUserData();
        openPopupsupmit();
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  function handleSetCurrentCard(card) {
    setCurrentCard(card);
    return;
  }

  function clearUserData() {
    const inputs = document.querySelectorAll(".form-user-data");
    const newInputs = Array.from(inputs);
    newInputs.map((elem) => {
      return (elem.value = "");
    });
    document.querySelector(".form-message").value = "";
    return;
  }

  function escFunction(e) {
    if (e.key === "Escape" || e.target.classList.contains("popup-cover")) {
      closePopup();
    }
  }

  function openPopup() {
    const eventList = ["keydown", "click"];
    eventList.map((el) => {
      return document.addEventListener(el, escFunction, false);
    });
    document
      .querySelector(".popup-cover")
      .classList.remove("popup-cover-disable");
  }

  function openPopupsupmit() {
    document
      .querySelector(".popup-submit")
      .classList.remove("popup-submit-disable");
  }

  function closePopup() {
    const eventList = ["keydown", "click"];
    eventList.map((el) => {
      return document.removeEventListener(el, escFunction, false);
    });
    if (
      !document
        .querySelector(".popup-cover")
        .classList.contains("popup-cover-disable")
    ) {
      return document
        .querySelector(".popup-cover")
        .classList.add("popup-cover-disable");
    }
    if (
      !document
        .querySelector(".popup-submit")
        .classList.contains("popup-submit-disable")
    ) {
      return document
        .querySelector(".popup-submit")
        .classList.add("popup-submit-disable");
    }
  }

  function handleMenuOpen(item) {
    if (item.classList.contains("menu-burger")) {
      document.querySelector(".header").style.display = "flex";
      document.querySelector(".menu-burger").style.display = "none";
      return;
    } else {
      document.querySelector(".header").style.display = "none";
      document.querySelector(".menu-burger").style.display = "flex";
      return;
    }
  }

  useEffect(() => {
    function slideMenu() {
      const x = window.innerWidth;
      if (x > 1440) {
        const y = window.pageYOffset;
        setScrollY(y);
        if (location.pathname === "/") {
          if (scrollY < y && isLoaded) {
            if (!document.querySelector(".main-to-bottom")) {
              if (!document.querySelector(".main")) {
                return;
              }
              document.querySelector(".main").classList.add("main-to-bottom");
              document
                .querySelector(".main-title")
                .classList.add("main-title-to-bottom");
              document
                .querySelector(".main-subtitle")
                .classList.add("main-subtitle-to-bottom");
              document
                .querySelector(".main-subscribe-btn")
                .classList.add("main-subscribe-btn-to-bottom");
              document
                .querySelector(".promo-image")
                .classList.add("promo-image-to-bottom");
              document.querySelector(".paw-container").style.display = "block";
              document.querySelector(".paw-img").style.display = "block";
              return window.removeEventListener("scroll", slideMenu);
            }
          } else {
            if (!document.querySelector(".main")) {
              return;
            }
            document.querySelector(".main").classList.remove("main-to-bottom");
            document
              .querySelector(".main-title")
              .classList.remove("main-title-to-bottom");
            document
              .querySelector(".main-subtitle")
              .classList.remove("main-subtitle-to-bottom");
            document
              .querySelector(".main-subscribe-btn")
              .classList.remove("main-subscribe-btn-to-bottom");
            document
              .querySelector(".promo-image")
              .classList.remove("promo-image-to-bottom");
            document.querySelector(".paw-container").style.display = "none";
            document.querySelector(".paw-img").style.display = "none";
            return window.removeEventListener("scroll", slideMenu);
          }
        }
      }
      return;
    }
    window.addEventListener("scroll", slideMenu);
  }, [scrollY, isLoaded, location.pathname]);

  return (
    <div className="page">
      <Routes>
        <Route
          path="*"
          element={
            <Main
              onMenu={handleMenuOpen}
              openPopup={openPopup}
              onCard={handleSetCurrentCard}
              onSend={sendCustomerData}
            />
          }
        />
        <Route path="/blog/*" element={<WebLog onMenu={handleMenuOpen} />} />
        <Route
          path="/article"
          element={
            <Article
              isCard={isCurrentCard}
              cards={blogCards}
              openPopup={openPopup}
            />
          }
        />
        <Route path="*" element={<ErrorPage onMenu={handleMenuOpen} />} />
      </Routes>
      <Footer openPopup={openPopup} />
      <Popup onSend={sendCustomerData} onClosePopup={closePopup} />
      <PopupSubmit onClosePopup={closePopup} />
    </div>
  );
}

export default App;
