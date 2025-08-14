import React, {useEffect} from 'react';
import "./feedback.scss";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";
import {FaStar} from "react-icons/fa";
import Needs from "./Needs/Needs";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner";
import {getFeedBack} from "../../reduxToolkit/FeedBackSlice";

const Feedback = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.feedBackSlice.loading);
    const feedBackData = useSelector((state) => state.feedBackSlice.feedBackData);



    useEffect(() => {
        dispatch(getFeedBack());
    }, [dispatch]);
    if (loading) {
        <Spinner/>
    }
    return (
        <>
        <div className="feedback">
            <div className="container">
                <div className="headTitle d-flex mt">{t("feedback")}</div>
                <div className="bigTitle d-flex mt" >{t("what")}</div>
                {/*<p className="feedback_fdes">Per aenean auctor pellentesque a quam quis habitant mus semper nostra*/}
                {/*    ultrices. Per odio finibus rhoncus sit cubilia duis leo maximus ad.</p>*/}
                <div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000, // Delay between slides (ms)
                            disableOnInteraction: false, // Keep autoplay active after user interaction
                        }}
                        breakpoints={{
                            // When window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            // When window width is >= 1440px
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        loop={true} // Infinite loop
                        className="hero_carousel"
                    >
                        {feedBackData.map((item, index) => (
                            <SwiperSlide className="feedback_slider" key={index}>
                                <div className="feedback_slider_namesF">{item.fullname}</div>
                                <p style={{marginBottom:"20px"}}>23.03.2025</p>
                                <div className="feedback_slider_star d-flex">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <p className="feedback_slider_Fdes">{item[`message_${lan}`]}</p>
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            </div>

        </div>
            <Needs/>
        </>
    );
};

export default Feedback;