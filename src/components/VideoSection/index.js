import React, {useState} from "react";
import "./videoSection.scss";
import {useTranslation} from "react-i18next";

const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation()

    return (<section className="video-section">
            <div className="container">
                <div className="flexs">
                    <div className="video-overlay">
                        <div
                            className="play-button"
                            onClick={() => setIsOpen(true)}
                        >
                            <span className="triangle"></span>
                        </div>
                    </div>

                    <div className="video-content">
                        <h2 className="video-title">
                            {t("well")}
                        </h2>
                        <p className="video-description">
                            {t("suspen")}
                        </p>
                        <button className="discover-btn">{t("dis")}</button>
                    </div>

                    {/* Modal */}
                    {isOpen && (<div className="video-modal">
                        <div className="video-modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>
              &times;
            </span>
                            <iframe width="315" height="560"
                                    style={{
                                        borderRadius: "10px",
                                        objectFit: "cover",
                                    }}
                                    src="https://www.youtube.com/embed/hV4P2MNRync"
                                    title="YouTube Shorts player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>


                        </div>
                    </div>)}
                </div>
            </div>
    </section>);
};

export default VideoSection;
