import React from 'react';
import PageHero from "../../components/PageHero";
import WeAre from "../../components/WeAre";
import MoveNeeds from "../../components/MoveNeeds/MoveNeeds";
import "./aboutUs.scss";
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();
    const title = `${t("about")}`;
    const description = `${t("aboutMore")}`;
    return (
        <>
            <title>{t("seoAboutT")}</title>
            <meta name="description" content={t("seoAboutD")}/>
            <PageHero title={title} description={description} />
            <WeAre/>
            <MoveNeeds/>
            <div className="aboutUs">
                <div className="container">
                    <div className="row main__row">
                        <div className="aboutUs_coll-6">
                            <div className="headTitle">{t("offer")}</div>
                            <div className="bigTitle">{t("explore")}</div>
                            <p>{t("care")}</p>
                            <button className="aboutUs_coll-6_descove">Discover More</button>
                        </div>
                        <div className="aboutUs_coll-6">
                            <div className="aboutUs_coll-6_widgetContainer">
                                <div className="aboutUs_coll-6_widgetContainer_sectionTitle">{t("homeServes")}</div>
                                <p>{t("desc")}</p>
                            </div>
                            <div className="aboutUs_coll-6_widgetContainer">
                                <div className="aboutUs_coll-6_widgetContainer_sectionTitle">{t("moveServes")}</div>
                                <p>{t("moveDes")}</p>
                            </div>
                            <div className="aboutUs_coll-6_widgetContainer">
                                <div className="aboutUs_coll-6_widgetContainer_sectionTitle">{t("long")}</div>
                                <p>{t("longDes")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;