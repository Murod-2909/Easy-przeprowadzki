import React from 'react';
import "./price.scss";
import PageHero from "../../components/PageHero";
import Package from "../../components/Package/Package";
import PriceCalculator from "../../components/PriceCalculator";
import Faq from "../../components/Faq";
import {useTranslation} from "react-i18next";
const Price = () => {
    const {t } = useTranslation();
    const title = `${t("price")}`;
    const description= `${t("prDes")}`

    return (
        <div>
            <title>{t("seoPriceT")}</title>
            <meta name="description" content={t("seoPriceD")}/>
            <PageHero title={title} description={description}/>
            <PriceCalculator/>
            <Package/>
            <Faq/>
        </div>
    );
};

export default Price;