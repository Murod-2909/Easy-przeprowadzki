import React, {useEffect} from 'react';
import "./package.scss";
import {FaCheck} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getPricing} from "../../reduxToolkit/PricingSlice";
import { RxCrossCircled } from "react-icons/rx";

const Package = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const priceData = useSelector((state) => state.pricingSlice.priceData);
    const selectedPackage = priceData.find(item => item.id === "d5e64c9e-9ff9-4d44-99e8-94b1af403e8c");
    const selectedPackagePro = priceData.find(item => item.id === "1ce763c5-7d90-470d-83df-1d4dae895c29");
    const selectedPackageProPlus = priceData.find(item => item.id === "1ce763c5-7d90-470d-83df-1d4dae895c29");

    const benefitIndexes = [5, 4, 3, 2, 0, 1];

    useEffect(() => {
        dispatch(getPricing());
    }, [dispatch]);

    return (
        <div className="package">
            <div className="container">
                <div className="headTitle d-flex">{t("ourPackage")}</div>
                <div className="bigTitle d-flex">{t("pacAlways")}</div>
                <p className="package_descip ">{t("pacDes")}</p>

                <div className="row">

                    <div className="package_col-33" data-aos="fade-right">
                        <h4 className="package_col-33_packing">{priceData[1]?.[`title_${lan}`]}</h4>


                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_dprice">{String(priceData[1]?.price).replace(/(\d{3})(?=\d)/, '$1-')} </h2>
                            <h2 className="package_col-33_dollar_IconD">zł/h</h2>
                        </div>
                        <h2 className="package_col-33_month">{t("person1")}</h2>

                        <ul>

                            {benefitIndexes.map((index) => {
                                const item = selectedPackage?.benefits?.[index];

                                return (
                                    <li className="package_col-33_liCheck" key={index}>
                                        {(String(item?.id) === "2" || String(item?.id) === "4" || String(item?.id) === "3") ? (
                                            <RxCrossCircled className="package_col-33_liCheck_fache" style={{ color: "red" }} />
                                        ) : (
                                            <FaCheck className="package_col-33_liCheck_fache" />
                                        )}
                                        {item?.[`name_${lan}`]}
                                    </li>
                                );
                            })}

                        </ul>
                        <a href="tel:+48509931555" className="package_col-33_gets">
                            {t("discover")}
                        </a>
                    </div>
                    <div className="package_col-33" data-aos="fade-up">

                        <div className="package_col-33_popul">{t("popular")}</div>

                        <h4 className="package_col-33_packing">{priceData[0]?.[`title_${lan}`]}</h4>


                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_dprice pp">{String(priceData[0]?.price).replace(/(\d{3})(?=\d)/, '$1-')} </h2>
                            <h2 className="package_col-33_dollar_IconD dd">zł/h</h2>
                        </div>
                        <h2 className="package_col-33_month dd">{t("person2")}</h2>

                        <ul>
                            {benefitIndexes.map((index) => {
                                const item = selectedPackagePro?.benefits?.[index];

                                return (
                                    <li className="package_col-33_liCheck" key={index}>
                                        {String(item?.id) === "2" ? (
                                            <RxCrossCircled className="package_col-33_liCheck_fache" style={{ color: "red" }} />
                                        ) : (
                                            <FaCheck className="package_col-33_liCheck_fache" />
                                        )}
                                        {item?.[`name_${lan}`]}
                                    </li>
                                );
                            })}

                        </ul>
                        <a href="tel:+48509931555" className="package_col-33_gets bbb">
                            {t("discover")}
                        </a>
                    </div>
                    <div className="package_col-33" data-aos="fade-left">
                        <h4 className="package_col-33_packing">{priceData[2]?.[`title_${lan}`]}</h4>

                        <div className="package_col-33_dollar">
                            <h2 className="package_col-33_dollar_dprice">
                                {String(priceData[2]?.price).replace(/(\d{3})(?=\d)/, '$1-')}
                            </h2>
                            <h2 className="package_col-33_dollar_IconD">zł/h</h2>
                        </div>
                        <h2 className="package_col-33_month">{t("person3")}</h2>

                        <ul>
                            {benefitIndexes.map((index) => {
                                const item = selectedPackageProPlus?.benefits?.[index];

                                return (
                                    <li className="package_col-33_liCheck" key={index}>
                                        <FaCheck className="package_col-33_liCheck_fache" />
                                        {item?.[`name_${lan}`]}
                                    </li>
                                );
                            })}

                        </ul>
                        <a href="tel:+48509931555" className="package_col-33_gets">
                            {t("discover")}
                        </a>
                    </div>
                </div>
                <h2 className="bigTitle" style={{marginTop:"50px"}}>{t("table")}</h2>
            </div>
        </div>
    );
};

export default Package;