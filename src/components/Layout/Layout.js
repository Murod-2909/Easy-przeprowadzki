import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LuPhoneCall } from "react-icons/lu";

import "./cookieBanner.scss"; // SCSS ulash
import {useTranslation} from "react-i18next";
import PromoBanner from "../../PromoBanner";

const Layout = () => {
   const {t} = useTranslation();
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies(["myCookieConsent"]);
  const [showBanner, setShowBanner] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (pathname === "/" && !cookies.myCookieConsent) {
      setShowBanner(true);
    }
  }, [pathname, cookies]);

  const acceptCookies = () => {
    setCookie("myCookieConsent", true, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 kun
    });
    setShowBanner(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
      <PromoBanner />
      <Header />
      <div className="page-content">
        <Outlet />
      </div>
      {showTopBtn && (
        <a
          className="scrollToHome"
          href="tel:+48509931555">
          
            <LuPhoneCall color="white" />
            509931555
        
        </a>
      )}
      <Footer />

      {showBanner && (
        <div className="cookie-banner-animated">
          <span>
            {t("cookies")}
          </span>
          <button className="cookie-button" onClick={acceptCookies}>
            {t("accep")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
