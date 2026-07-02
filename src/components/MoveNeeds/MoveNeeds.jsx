import React, {useEffect} from 'react';
import "./modeNeeds.scss";
import {FaCaretDown} from "react-icons/fa";
import {useTranslation} from "react-i18next";
const MoveNeeds = () => {
    const {t} = useTranslation();

    return (
        <div className="moveNeeds">
            <div className="moveNeeds_bgc">
                <FaCaretDown className="moveNeeds_bgc_downIcon"/>
                <div className="bigTitle moveNeeds_bgc_centerTitle" data-aos="fade-down">{t("need")}
                </div>
                <p className="moveNeeds_bgc_centerText" data-aos="fade-up">{t("needDes")}</p>
                <div className="d-flex">
                    <a href="tel:+48509931555" className="moveNeeds_bgc_centerSend" data-aos="flip-left">{t("get")}</a>
                </div>
            </div>

        </div>
    );
};

export default MoveNeeds;