import React, {useEffect} from 'react';
import "./hero.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {IoIosArrowForward} from "react-icons/io";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import {Navigation, Autoplay} from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getHero} from "../../reduxToolkit/HeroSlice";
import Spinner from "../Spinner";

const Hero = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const heroData = useSelector((state) => state.heroSlice.heroData);
    const loading = useSelector((state) => state.heroSlice.loading);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: "ease-in-out",
            delay: 80,
            once: true,
        });
    }, []);

    useEffect(() => {
        dispatch(getHero());
    }, [dispatch]);
    if (loading) {
        <Spinner/>
    }
    return (
        <div className="hero">
            <div className="hero_desc">
                <h1 className="hero_desc_title" data-aos="fade-up">Przeprowadzki Warszawa</h1>
                <p className="hero_desc_text">{t("prDes")}</p>
                <a href="tel:+48509931555" className="hero_desc_sends">{t("discover")}<IoIosArrowForward
                    style={{width: "13px", height: "13px"}}/></a>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000, // Delay between slides (ms)
                    disableOnInteraction: false, // Keep autoplay active after user interaction
                }}
                loop={true} // Infinite loop
                className="hero_carousel"
            >
                {heroData?.map((item, i) => (
                    <div key={i}>
                        {item?.image?.map((img, index) => (
                            <SwiperSlide key={item.id}>
                                <div className="hero_carousel_wrapper" >
                                    <img className="hero_carousel_wrapper_picture" src={img?.image} alt=""/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                ))}

            </Swiper>
            {/*HeroSlice*/}

        </div>
    );
};

export default Hero;