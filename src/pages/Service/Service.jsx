import React from 'react';
import "./service.scss";
import PageHero from "../../components/PageHero";
import Services from "../../components/Services/Services";
import Needs from "../../components/Feedback/Needs/Needs";
import Faq from "../../components/Faq";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
const Service = () => {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const { t } = useTranslation();
    const servicesData = useSelector((state) => state.servicesSlice.servicesData);
    const title=`${t("services")}`;
    const description = `${t("srDes")}`;
    return (
        <>
            <title>{t("seoServicesT")}</title>
            <meta name="description" content={t("seoServicesD")}/>
            <PageHero title={title} description={description} />
            <Services />
            <Needs/>
            <Faq/>
        </>
    );
};

export default Service;