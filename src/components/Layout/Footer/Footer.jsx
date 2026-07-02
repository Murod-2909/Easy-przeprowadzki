import React, {useEffect} from 'react';
import {IoIosArrowForward} from "react-icons/io";
import footerImg from "../../../assets/images/Footer.png";
import one from "../../../assets/images/Easy.jpg";
import {BiSupport} from "react-icons/bi";
import {AiFillCaretRight} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getService} from "../../../reduxToolkit/services";

const region =[
    {
        title_en:"Removals Warsaw Bemowo",
        title_pl:"Przeprowadzki Warszawa Bemowo"
    },
    {
        title_en:"Removals Warsaw Białołęka",
        title_pl:"Przeprowadzki Warszawa Białołęka"

    },
    {
        title_en:"Removals Warsaw Bielany",
        title_pl:"Przeprowadzki Warszawa Bielany"
    },
    {
        title_en:"Removals Warsaw Mokotów",
        title_pl:"Przeprowadzki Warszawa Mokotów"
    },
    {
        title_en:"Removals Warsaw Ochota",
        title_pl:"Przeprowadzki Warszawa Ochota"
    },
    {
        title_en:"Removals Warsaw Praga Południe",
        title_pl:"Przeprowadzki Warszawa Praga Południe"
    },
    {
        title_en:"Removals Warsaw Praga Północ",
        title_pl:"Przeprowadzki Warszawa Praga Północ"
    },
    {
        title_en:"Removals Warsaw Rembertów",
        title_pl:"Przeprowadzki Warszawa Rembertów"
    },
    {
        title_en:"Removals Warsaw Śródmieście",
        title_pl:"Przeprowadzki Warszawa Śródmieście"
    },
    {
        title_en: "Removals Warsaw Targówek",
        title_pl:"Przeprowadzki Warszawa Targówek"
    },
    {
        title_en: "Removals Warsaw Ursus",
        title_pl:"Przeprowadzki Warszawa Ursus"
    },
    {
        title_en: "Removals Warsaw Ursynów",
        title_pl:"Przeprowadzki Warszawa Ursynów"
    },
    {
        title_en: "Removals Warsaw Wawer",
        title_pl:"Przeprowadzki Warszawa Wawer"
    },
    {
        title_en: "Removals Warsaw Wesoła",
        title_pl:"Przeprowadzki Warszawa Wesoła"
    },
    {
        title_en: "Removals Warsaw Wilanów",
        title_pl:"Przeprowadzki Warszawa Wilanów"
    },
    {
        title_en: "Removals Warsaw Włochy",
        title_pl:"Przeprowadzki Warszawa Włochy"
    },{
        title_en: "Removals Warsaw Wola",
        title_pl:"Przeprowadzki Warszawa Wola"
    },
    {
        title_en: "Removals Warsaw Żoliborz",
        title_pl:"Przeprowadzki Warszawa Żoliborz"
    },
]

function Footer(props) {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const servicesData = useSelector((state) => state.servicesSlice.servicesData);



    useEffect(() => {
        dispatch(getService());
    }, [dispatch]);
    return (
        <div className="footer">
            <div className="footer_havePlan">
                <div className="container">
                    <div className="footer_havePlan_hbox">
                        <div className="row">
                            <div className="footer_havePlan_hbox_col-8">

                                <div className="bigTitle">{t("have")}</div>
                                <p>{t("plan")}</p>
                                <a href="tel:+48509931555" className="footer_havePlan_hbox_col-8_urlSend">{t("quec")}<IoIosArrowForward
                                    style={{width: "13px", height: "13px"}}/></a>
                            </div>
                            <div className="footer_havePlan_hbox_col-5">
                                <img className="footer_havePlan_hbox_col-5_fImg" src={footerImg} loading="lazy" alt="Planujesz przeprowadzkę? Easy Przeprowadzki"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_Fcard">
                <div className="container">
                    <div className=" padd">
                        <div className="footer_Fcard_cols-4">
                            <div className="footer_Fcard_cols-4_log">
                                <img width="100%" src={one} loading="lazy" alt="Easy Przeprowadzki logo"/>
                            </div>
                            <p style={{color: "#FFFFFF", marginBottom: "25px"}}>{t("ease")} 😊🚚
                            </p>
                            <div className="footer_Fcard_cols-4_calls">
                                <div className="footer_Fcard_cols-4_calls_callIcon">
                                    <BiSupport className="footer_Fcard_cols-4_calls_callIcon_bi"/>
                                </div>
                                <div className="footer_Fcard_cols-4_calls_callText">
                                    <span className="footer_Fcard_cols-4_calls_callText_ct">Call Center 24/7</span>
                                    <a href="tel:+48509931555"
                                       className="footer_Fcard_cols-4_calls_callText_bt">+48509931555</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_Fcard_cols-2">
                            <h2 className="footer_Fcard_cols-2_fserves">{t("services")}</h2>
                            {servicesData.map((service, index) => (
                                <a href="/services" className="footer_Fcard_cols-2_servesLink" key={index}>
                                    <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                        <AiFillCaretRight className="airight"/>
                                    </div>
                                    {service[`title_${lan}`]}
                                </a>
                            ))}


                        </div>
                        <div className="footer_Fcard_cols-2">
                            <h2 className="footer_Fcard_cols-2_fserves">{t("warsaw")}</h2>
                            {region.map((region, index) => (
                                <span className="footer_Fcard_cols-2_servesLink" key={index}>
                                    <div className="footer_Fcard_cols-2_servesLink_iconRight">
                                        <AiFillCaretRight className="airight"/>
                                    </div>
                                    {region[`title_${lan}`]}
                                </span>
                            ))}


                        </div>
                        <div className="footer_Fcard_cols-2">
                            <h2 className="footer_Fcard_cols-2_fserves">{t("getIn")}</h2>
                            <span className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight">

                                </div>
                                Złota 75A/7, 00-819 Warszawa, Poland
                            </span>
                            <span className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight"></div>
                               NIP: 5273166825
                            </span>
                            <a href="mailto:easyprzeprowadzka@gmail.com" className="footer_Fcard_cols-2_servesLink">
                                <div className="footer_Fcard_cols-2_servesLink_iconRight"></div>
                                easyprzeprowadzka@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="footer_Fcard_bLine"/>
                <div className="container">
                    <div className="row">
                        <div className="footer_Fcard_bcol-6">
                            <a href="#" className="footer_Fcard_bcol-6_police">Privacy Policy</a>
                            <a href="#" className="footer_Fcard_bcol-6_police">Terms and Conditions</a>
                        </div>
                        <div className="footer_Fcard_bcol-6">
                            <div className="end">
                                <span className="footer_Fcard_bcol-6_police">Copyright © 2025 Easy Przeprowadzki</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;