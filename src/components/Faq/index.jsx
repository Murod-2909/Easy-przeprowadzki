import React from 'react';
import "./faq.scss";
import Accordion from "../Accordion/Accordion";
import {useTranslation} from "react-i18next";

const Faq = () => {
    const {t} = useTranslation();

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            ["whyChoose", "chooseDes"],
            ["howWe", "howDes"],
            ["whatPay", "payDes"],
            ["other", "otherDes"],
            ["aboutCon", "aboutConDes"],
        ].map(([q, a]) => ({
            "@type": "Question",
            "name": t(q),
            "acceptedAnswer": {"@type": "Answer", "text": t(a)},
        })),
    };

    return (
        <div className="faq">
            <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
            <div className="container">
                <div className="row">
                    <div className="faq_col-2">
                        <div className="headTitle">F.A.Q</div>
                        <div className="bigTitle">
                            {t("faq")}
                        </div>

                        <div className="faq_col-2_chatOur">


                        </div>
                    </div>
                    <div className="faq_col-10">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
