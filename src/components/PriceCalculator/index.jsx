import React, {useState} from 'react';
import "./style.scss";
import {useTranslation} from "react-i18next";

// Soatlik stavkalar cennik paketlariga mos: 2 kishi 160 zł/h, 3 kishi 220 zł/h
const RATE_MIN = 160;
const RATE_MAX = 220;

const PriceCalculator = () => {
    const {t} = useTranslation();
    const [rooms, setRooms] = useState(2);
    const [floor, setFloor] = useState(0);
    const [elevator, setElevator] = useState(true);
    const [packing, setPacking] = useState(false);

    // Taxminiy ish soati: bazaviy 2 soat + har xona 1.5 soat
    // + liftsiz har 2 qavat uchun 1 soat + qadoqlash 2 soat
    let hours = 2 + rooms * 1.5;
    if (!elevator && floor > 0) hours += Math.ceil(floor / 2);
    if (packing) hours += 2;
    hours = Math.round(hours);

    const priceMin = hours * RATE_MIN;
    const priceMax = hours * RATE_MAX;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    return (
        <div className="container">
            <div className="priceCalc" data-aos="fade-up">
                <h2 className="priceCalc_title">{t("calcTitle")}</h2>
                <p className="priceCalc_desc">{t("calcDesc")}</p>

                <div className="priceCalc_row">
                    <label htmlFor="calc-rooms">{t("calcRooms")}</label>
                    <input id="calc-rooms" type="number" min={1} max={8} value={rooms}
                           onChange={(e) => setRooms(clamp(Number(e.target.value) || 1, 1, 8))}/>
                </div>

                <div className="priceCalc_row">
                    <label htmlFor="calc-floor">{t("calcFloor")}</label>
                    <input id="calc-floor" type="number" min={0} max={20} value={floor}
                           disabled={elevator}
                           style={elevator ? {opacity: 0.4} : undefined}
                           onChange={(e) => setFloor(clamp(Number(e.target.value) || 0, 0, 20))}/>
                </div>

                <div className="priceCalc_row">
                    <label htmlFor="calc-elevator">{t("calcElevator")}</label>
                    <input id="calc-elevator" type="checkbox" checked={elevator}
                           onChange={(e) => setElevator(e.target.checked)}/>
                </div>

                <div className="priceCalc_row">
                    <label htmlFor="calc-packing">{t("calcPacking")}</label>
                    <input id="calc-packing" type="checkbox" checked={packing}
                           onChange={(e) => setPacking(e.target.checked)}/>
                </div>

                <div className="priceCalc_result">
                    <div className="priceCalc_result_label">{t("calcEstimate")}</div>
                    <div className="priceCalc_result_price">
                        {priceMin}–{priceMax} zł <span>(~{hours} {t("calcHours")})</span>
                    </div>
                    <p className="priceCalc_result_note">{t("calcNote")}</p>
                </div>

                <div className="priceCalc_cta">
                    <a href="tel:+48509931555">{t("calcCall")}</a>
                </div>
            </div>
        </div>
    );
};

export default PriceCalculator;
