import React from 'react';
import Hero from "../../components/Hero/Hero";
import WeAre from "../../components/WeAre";
import Services from "../../components/Services/Services";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Feedback from "../../components/Feedback/Feedback";
import Package from "../../components/Package/Package";
import MoveNeeds from "../../components/MoveNeeds/MoveNeeds";
import Facts from "../../components/Facts";
import VideoSection from "../../components/VideoSection";
import Faq from "../../components/Faq";
import {useTranslation} from "react-i18next";

const Home = () => {
    const {t} = useTranslation();

    return (<div style={{overflow: "hidden"}}>
        <title>Przeprowadzki Warszawa – Easy Przeprowadzki</title>
        <meta name="description" content={t("seoHomeD")}/>
        <Hero/>
        <Services/>

        <WeAre/>
        <Feedback/>
        <ChooseUs/>

        <Facts/>
        <VideoSection/>
        <Package/>
        <Faq/>
        <MoveNeeds/>

    </div>);
};

export default Home;