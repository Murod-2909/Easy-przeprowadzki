import React, {useEffect} from 'react';
import "./hero.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {IoIosArrowForward} from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Autoplay} from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getHero} from "../../reduxToolkit/HeroSlice";
import {Link} from "react-router";

const Hero = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const heroData = useSelector((state) => state.heroSlice.heroData);

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
    return (
        <div className="hero">
            <div className="hero_desc">
                <h1 className="hero_desc_title" data-aos="fade-up">Przeprowadzki Warszawa</h1>
                <p className="hero_desc_text">{t("prDes")}</p>
                <Link to="/contact#contact-form" className="hero_desc_sends">{t("discover")}<IoIosArrowForward
                    style={{width: "13px", height: "13px"}}/></Link>
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
                {heroData?.flatMap((item) => item?.image || []).map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero_carousel_wrapper" >
                            <img className="hero_carousel_wrapper_picture" src={img?.image}
                                 alt="Przeprowadzki Warszawa – Easy Przeprowadzki"
                                 loading={index === 0 ? "eager" : "lazy"}
                                 fetchPriority={index === 0 ? "high" : "auto"}/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/*HeroSlice*/}

        </div>
    );
};

export default Hero;