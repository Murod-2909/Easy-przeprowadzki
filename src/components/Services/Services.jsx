import React, {useEffect} from 'react';
import "./services.scss";
import {FaMapLocationDot} from "react-icons/fa6";
import {IoMdArrowDropright} from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner";
import {getService} from "../../reduxToolkit/services";

const Services = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.servicesSlice.loading);
    const servicesData = useSelector((state) => state.servicesSlice.servicesData);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: "ease-in-out",
            delay: 50,
            once: true,
        });
    }, []);
    useEffect(() => {
        dispatch(getService());
    }, [dispatch]);
    if (loading) {
        <Spinner/>
    }
    return (
        <div className="services">
            <div className="container">
                <div className="headTitle d-flex">{t("ourServes")}</div>
                <div className=" d-flex bigTitle">
                    {t("moveServes")}
                </div>
                <p className="d-flex services_sp">{t("servesDes")}</p>

                <div className="services_cards">
                    <div className="row" style={{flexWrap:"wrap"}}>
                        {servicesData.map((service, index) => (
                            <div className="services_cards_col-3" data-aos={
                                index % 3 === 0
                                    ? 'fade-right'
                                    : index % 3 === 1
                                        ? 'fade-down'
                                        : 'fade-left'
                            }
                                 data-aos-easing="ease-out-cubic"
                                 data-aos-duration="1500"
                                 data-aos-delay={index * 100}
                                 key={index}>
                                <div style={{position: "relative", zIndex: "2"}}>
                                    <div className="services_cards_col-3_iconBox">
                                        <img src={service.icon}  alt=""/>
                                    </div>
                                    <div className="servicesTitle d-flex">
                                        {service[`title_${lan}`]}
                                    </div>
                                    <p className="d-flex services_cards_col-3_infoS">
                                        {service[`description_${lan}`]}
                                    </p>
                                    <div className="d-flex">
                                        <a href="tel:+48509931555" className="href">
                                            Learn More
                                            <IoMdArrowDropright/>

                                        </a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;