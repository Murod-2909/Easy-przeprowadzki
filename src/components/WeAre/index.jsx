import React, {useEffect} from 'react';
import "./style.scss";

import {IoCheckbox} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../reduxToolkit/AboutSlice";
import {useTranslation} from "react-i18next";

const WeAre = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const aboutData = useSelector((state) => state.aboutSlice.aboutData);

    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch]);
    return (
        <div className="weAre">
            <div className="container">
                {aboutData.map((item, index) => (
                    <div className="row main__row" key={index}>
                        <div className="weAre_col-6">
                            <div className="row" key={index}>
                                <div className="weAre_col-6_imgBig" data-aos="fade-up">
                                    <img className="imgs" width="100%" src={item.image[0].image} alt="we are"/>
                                </div>
                                <div className="weAre_col-6_imgBig">
                                    <img data-aos="fade-right" className="we2" src={item.image[1].image} loading="lazy" alt="Zespół Easy Przeprowadzki"/>
                                    <img data-aos="fade-left" className="we2" src={item.image[2].image} loading="lazy" alt="Easy Przeprowadzki w pracy"/>
                                </div>
                            </div>

                        </div>
                        <div className="weAre_col-6">
                             {item[`benifits_${lan}`]?.map((item, index) => (
                                <ul className="weAre_col-6_elItem" data-aos="fade-left" key={index}>
                                    <li className="weAre_col-6_elItem_iconList">
                                        <IoCheckbox className="weAre_col-6_elItem_iconList_check"/>
                                        <span>{item}</span>
                                    </li>
                                </ul>
                            ))}
                            <h2 className="headTitle" data-aos="fade-left">{t("who")}</h2>
                            <h3 className="bigTitles">{item[`content_${lan}`]}</h3>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default WeAre;