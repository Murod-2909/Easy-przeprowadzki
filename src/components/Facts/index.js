import React, {useEffect} from 'react';
import "./style.scss";
import { FaBoxes } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
const Facts = () => {
    const {t} = useTranslation()
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 100,
            easing: "ease-in-out", // Animatsiya effekti
            delay: 100, // Animatsiya kechikishi (ms)
            once: true, // Animatsiya faqat bir marta ishlashi uchun
        });
    }, []);
    return (
        <div className="facts">
            <div className="container">
                <div className="inners">
                    <div className="sm-3" data-aos="fade-right" data-aos-easing="ease-in-out">
                        <h2 className="moving">{t("fact")}</h2>
                    </div>

                    <div className="sm-7" data-aos="fade-up">

                        <div className="sd-4">
                            <div className="element-wrapper">
                                <div className="element-icon">
                                    <FaBoxes />
                                </div>
                            </div>
                            <div className="element-text">
                                <div className="elementor-counter">
                                    <div className="counter-title">{t("local")}</div>
                                    <div className="number-couter">
                                        <CountUp start={0} end={100} duration={3} suffix=" +" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="sd-4">
                            <div className="element-wrapper">
                                <div className="element-icon">
                                    <FiTruck />
                                </div>
                            </div>
                            <div className="element-text">
                                <div className="elementor-counter">
                                    <div className="counter-title">{t("million")}</div>
                                    <div className="number-couter">
                                        <CountUp start={0} end={100} duration={3} suffix=" +" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="sd-4">
                            <div className="element-wrapper">
                                <div className="element-icon">
                                    <FaRegHeart />
                                </div>
                            </div>
                            <div className="element-text">
                                <div className="elementor-counter">
                                    <div className="counter-title">{t("client")}</div>
                                    <div className="number-couter">
                                        <CountUp start={0} end={100} duration={3} suffix=" +" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
