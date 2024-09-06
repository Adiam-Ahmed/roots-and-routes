import React from 'react'
import './Footer.scss'
import FacebookLogo from '../../assets/Icons/Icon-facebook.svg'
import InstagramLogo from '../../assets/Icons/Icon-instagram.svg'
import TwitterLogo from '../../assets/Icons/Icon-twitter.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__title-container">
                    <h2 className="footer__main-title">Get in Touch</h2>
                    <div className="footer_icons">
                        <a
                            href="https://www.instagram.com"
                            className="footer__link"
                            aria-label="instagram"
                        >
                            <img
                                className="footer__icon"
                                src={InstagramLogo}
                                alt="instagram"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            className="footer__link"
                            aria-label="facebook"
                        >
                            <img
                                className="footer__icon"
                                src={FacebookLogo}
                                alt="facebook"
                            />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            className="footer__link"
                            aria-label="twitter"
                        >
                            <img
                                className="footer__icon"
                                src={TwitterLogo}
                                alt="twitter"
                            />
                        </a>
                    </div>
                    <a
                        href="/"
                        className="footer__logo footer__logo-right"
                        aria-label="bandSite"
                    >Roots & Routes

                    </a>

                </div>
                <div className="footer__column-container">
                    <div className="footer__column">
                        <h3 className="footer__column-title">The Management</h3>
                        <div className="footer__address">
                            <div className="footer__address-line">123 Broadway Penthouse,</div>
                            <div className="footer__address-line">Canada, ON 10012, CA</div>
                        </div>
                        <div className="footer__email">
                            <a
                                className="footer__link"
                                href="mailto:info@rootsandroutes.com"
                                aria-label="email info for BandSite"
                            >info@thebeesknees.com

                            </a>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__column-title">Our Agencies</h3>
                        <div className="footer__booking">Booking Agent for</div>
                        <div className="footer__booking">Toronto / Monteral / Canada</div>
                        <div className="footer__email">
                            <a
                                className="footer__link"
                                href="mailto:bookings@rootsandroutes.com"
                                aria-label="email booking for US / South America / Japan BandSite"
                            >bookings@rootsandroutes.com
                            </a>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h3 className="footer__column-title">ARCH Entertainment</h3>
                        <div className="footer__booking">Booking Agent for</div>
                        <div className="footer__booking">UK / EU / AU</div>
                        <div className="footer__email">
                            <a
                                className="footer__link"
                                href="mailto:bookings@archentertainment.com"
                                aria-label="email booking for UK / EU / AU BandSite"
                            >bookings@rootsandroutes.com
                            </a>

                        </div>
                    </div>
                </div>
                <a
                    href="/"
                    className="footer__logo footer__logo-tablet"
                    aria-label="Roots and Routes"
                >Roots and Routes
                </a>
                <p className="footer__copyright">
                    Copyright Roots and Routes © 2024 All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer