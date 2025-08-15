// PromoBanner.jsx
import React from "react";
import "./PromoBanner.scss";
import {useTranslation} from "react-i18next";

export default function PromoBanner() {
    const {t} = useTranslation();

    return (
        <div className="promo-banner">
            <p className="bannerText">{t("prDes")}</p>
        </div>
    );
}
