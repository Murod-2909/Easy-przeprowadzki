import React, {useRef, useState} from 'react';
import "./contact.scss";
import PageHero from "../../components/PageHero";
import {FiFacebook} from "react-icons/fi";
import {AiFillCaretRight} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa6";
import {useTranslation} from "react-i18next";
import {GrInstagram} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../reduxToolkit/MessageSlice";

const ContactUs = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const formRef = useRef();
    const loading = useSelector((state) => state.messageSlice.loading);
    const messageData = useSelector((state) => state.messageSlice.messageData);
    const [sendDataMessage, setSendDataMessage] = useState({
        name: "",
        phone: "",
        subject: "",
        message: "",
        email: "",
    });
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(sendMessage(sendDataMessage));
        formRef.current.reset();
    };
    const title = `${t("contactUs")}`;
    return (
        <>
            <PageHero title={title}/>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact_col-55">
                            <div className="headTitle">{t("getIn")}</div>
                            <div className="bigTitle">{t("wed")}</div>
                            <div className="contact_col-55_information">
                                <div className="contact_col-55_information_callIcons">
                                    <div>
                                        <div className="contact_col-55_information_callIcons_boxIcon">
                                            <GrInstagram/></div>
                                    </div>
                                    <div className="contact_col-55_information_callIcons_callsText">
                                        <div>
                                            <h2 className="contact_col-55_information_callIcons_callsText_res">Instagram</h2>
                                            <div className="d-fl">
                                                <p className="d-flex"><AiFillCaretRight style={{fontSize: "12px"}}/> +48
                                                    509 93 15 55</p>
                                                <p className="d-flex"><AiFillCaretRight
                                                    style={{fontSize: "12px"}}/> easyprzeprowadzki.pl</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="https://www.instagram.com/easy_przeprowadzki_pl?igsh=aGQyMDFiaWV5cHp6&utm_source=qr"
                                   target="_blank"
                                   className="contact_col-55_information_gets">{t("queto")}</a>
                            </div>
                            <div className="contact_col-55_information">
                                <div className="contact_col-55_information_callIcons">
                                    <div>
                                        <div className="contact_col-55_information_callIcons_boxIcon">
                                            <FiFacebook/></div>
                                    </div>
                                    <div className="contact_col-55_information_callIcons_callsText">
                                        <div>
                                            <h2 className="contact_col-55_information_callIcons_callsText_res">Facebook</h2>
                                            <div className="d-fl">
                                                <p className="d-flex"><AiFillCaretRight style={{fontSize: "12px"}}/> +48
                                                    509 93 15 55</p>
                                                <p className="d-flex"><AiFillCaretRight
                                                    style={{fontSize: "12px"}}/>Easy Przeprowadzki </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="https://www.facebook.com/people/Easy-Przeprowadzki/61574572778465/?mibextid=wwXIfr&rdid=rIsE3tnrzelpS1gc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E1FMHm5tS%2F%3Fmibextid%3DwwXIfr"
                                   target="_blank"
                                   className="contact_col-55_information_gets">{t("queto")}</a>
                            </div>
                            <div className="contact_col-55_information">
                                <div className="contact_col-55_information_callIcons">
                                    <div>
                                        <div className="contact_col-55_information_callIcons_boxIcon">
                                            <FaWhatsapp/></div>
                                    </div>
                                    <div className="contact_col-55_information_callIcons_callsText">
                                        <div>
                                            <h2 className="contact_col-55_information_callIcons_callsText_res">WhatsApp</h2>
                                            <div className="d-fl">
                                                <p className="d-flex"><AiFillCaretRight style={{fontSize: "12px"}}/> +48
                                                    509 93 15 55</p>
                                                <p className="d-flex"><AiFillCaretRight
                                                    style={{fontSize: "12px"}}/> Easy Przeprowadzki</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="https://web.whatsapp.com/"
                                   className="contact_col-55_information_gets">{t("queto")}</a>
                            </div>
                        </div>
                        <div className="contact_col-45">
                            <div className="contact_col-45_sizeDefault">{t("send")}</div>
                            <form
                                ref={formRef}
                                onSubmit={handleSumbit}>
                                <div className="form-group">
                                    <div className="form-control">
                                        <label htmlFor="name" className="form-list">{t("name")}</label>
                                        <input name="name" id="name" type="text" placeholder={t("name")}
                                               className="form-input"
                                               onChange={(e) =>
                                                   setSendDataMessage((prev) => ({
                                                       ...prev,
                                                       name: e.target.value,
                                                   }))
                                               }/>
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="phone" className="form-list">{t("phone")}</label>
                                        <input name="phone" id="phone" type="number" placeholder={t("phone")}
                                               className="form-input"
                                               onChange={(e) =>
                                                   setSendDataMessage((prev) => ({
                                                       ...prev,
                                                       phone: e.target.value,
                                                   }))
                                               }/>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <div className="form-control">
                                        <label htmlFor="email" className="form-list">{t("email")}</label>
                                        <input name="email" id="email" type="email" placeholder={t("email")}
                                               className="form-input"
                                               onChange={(e) =>
                                                   setSendDataMessage((prev) => ({
                                                       ...prev,
                                                       email: e.target.value,
                                                   }))
                                               }/>
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="subject" className="form-list">{t("subject")} </label>
                                        <input name="subject" id="subject" type="text" placeholder={t("subject")}
                                               className="form-input"
                                               onChange={(e) =>
                                                   setSendDataMessage((prev) => ({
                                                       ...prev,
                                                       subject: e.target.value,
                                                   }))
                                               }/>
                                    </div>

                                </div>
                                <div className="form-control" style={{width: '100%'}}>
                                    <label htmlFor="message" className="form-list">{t("message")}</label>
                                    <textarea name="message" id="message" placeholder={t("message")}
                                              className="form-textarea"
                                              onChange={(e) =>
                                                  setSendDataMessage((prev) => ({
                                                      ...prev,
                                                      message: e.target.value,
                                                  }))
                                              }/>
                                </div>
                                <button type="submit" className="sendForm">{t("sendM")}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: "800px",
                }}>
                    <div className="contact_local">
                        <div className="container">
                            <h2 className="contact_local_our">{t("our")}</h2>
                            <div className="contact_local_places">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7610576671127!2d20.9962557!3d52.2295588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd520095631b%3A0x1ac72fdc5e8e2694!2sEasy%20Przeprowadzki!5e0!3m2!1sen!2s!4v1755108496803!5m2!1sen!2s"
                                    width="100%" height="600" style={{border: "0"}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default ContactUs;