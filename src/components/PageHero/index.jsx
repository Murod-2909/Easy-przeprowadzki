import React, { useEffect } from "react";
import "./style.scss";
import hero1 from "../../assets/images/about.jpg";
import { AiFillCaretRight } from "react-icons/ai";
import { useLocation } from "react-router";
import {useTranslation} from "react-i18next";

const PageHero = ({ title, description }) => {
  const location = useLocation();
const {t} = useTranslation();
  // Sahifaga qarab fon rasmni o‘zgartirish
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/about":
        return require("../../assets/images/about1.jpg");
      case "/contact":
        return require("../../assets/images/contact.jpg");
      case "/services":
        return require("../../assets/images/services.jpg");
      case "/price":
        return require("../../assets/images/default.jpg");
      default:
        return require("../../assets/images/default.jpg");
    }
  };
  return (
    <div className="pageHero">
      <div
        className="pageHero_desc"
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundPosition: "50% 15%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background-image 0.5s ease-in-out", // Smooth transition
        }}
      >
        <div className="container">
          <div className="pageHero_desc_pageUrl">
            <span>{t("main")}</span>
            <AiFillCaretRight className="pageHero_desc_pageUrl_fills" />
            {title}
          </div>
          <h1 className="pageTitle" data-aos="fade-up">
            {title}
          </h1>
          <p className="pageInfo" data-aos="fade-down">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
