import React from 'react';
import "./chooseUs.scss";
import chooseImg from "../../assets/images/choose1.jpg";
import {IoChatboxEllipsesOutline} from "react-icons/io5";
import { GrShield } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { MdOutlineEngineering } from "react-icons/md";
import {useTranslation} from "react-i18next";


const ChooseUs = () => {
    const {t} = useTranslation();
    return (
        <div className="chooseUs">
            <div className="container">
                <div className="row main__row">
                    <div className="chooseUs_col-6">
                        <div className="headTitle">
                            {t("why")}
                        </div>
                        <div className="bigTitle">{t("wellDes")}</div>
                        {/*<p>{t("wellDes")}</p>*/}
                        <div className="row">
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <IoChatboxEllipsesOutline className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">{t("free")}</div>
                                    <p>{t("freeDes")}</p>
                                </div>

                            </div>
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <MdOutlineEngineering className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">{t("pro")}</div>
                                    <p> {t("proDes")} </p>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <GrShield className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">{t("profes")}</div>
                                    <p> {t("profesDes")} </p>
                                </div>

                            </div>
                            <div className="chooseUs_col-6_helps">
                                <div className="">
                                    <BiSupport  className="chooseUs_col-6_helps_chatIcon"/>
                                </div>
                                <div className="">
                                    <div className="chooseUs_col-6_helps_HTitle">{t("support")}</div>
                                    <p> {t("supportDes")}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="chooseUs_col-4">
                        <img className="chooseUs_col-4_chooseImg" src={chooseImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;