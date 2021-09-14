import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease'
        })
    },[])

    return (
        <div className="footer"> 
            <div className="footer__container">
                <div data-aos = "zoom-in-up" data-aos-duration="1000">
                    <h5>KARMAN</h5>
                    <p className="footer__link">&copy; 2065 KarmanApp, Inc.</p>
                    <a className="footer__link" href="/" target="_blank">Blog</a>
                    <a className="footer__link" href="/" target="_blank">Twitter</a>
                    <a className="footer__link" href="/" target="_blank">Facebook</a>
                </div>

                <div data-aos = "zoom-in-up" data-aos-duration="1000" >
                    <div>
                        <h5>Company</h5>
                        <Link className="footer__link" to="/">About</Link>
                        <Link className="footer__link" to="/">Careers</Link>
                        <Link className="footer__link" to="/">Press</Link>
                        <Link className="footer__link" to="/">Investors</Link>
                    </div>

                    <div>
                        <h5>Terms and Ploicies</h5>
                        <Link className="footer__link" to="/">Privacy Policy</Link>
                        <Link className="footer__link" to="/">Terms of Use</Link>
                        <Link className="footer__link" to="/">Karman rewards</Link>
                        <Link className="footer__link" to="/">Accessibility</Link>
                        <Link className="footer__link" to="/">Careers</Link>
                        <Link className="footer__link" to="/">Press</Link>
                        <Link className="footer__link" to="/">Taxes</Link>
                    </div>
                </div>

                <div data-aos = "zoom-in-up" data-aos-duration="1000">
                    <div>
                        <h5>Individuals</h5>
                        <Link className="footer__link" to="/">About</Link>
                        <Link className="footer__link" to="/">Careers</Link>
                        <Link className="footer__link" to="/">Press</Link>
                        <Link className="footer__link" to="/">Investors</Link>
                    </div>

                    <div>
                        <h5>Help</h5>
                        <Link className="footer__link" to="/">Support Center</Link>
                        <Link className="footer__link" to="/">Contact Us</Link>
                        <Link className="footer__link" to="/">Cancel an Order</Link>
                        <Link className="footer__link" to="/">How-to's | FAQ</Link>
                    </div>
                </div>

                <div data-aos = "zoom-in-up" data-aos-duration="1000">
                    <h5>Individuals</h5>
                    <Link className="footer__link" to="/">About</Link>
                    <Link className="footer__link" to="/">Careers</Link>
                    <Link className="footer__link" to="/">Press</Link>
                    <Link className="footer__link" to="/">Investors</Link>
                </div>
            </div>

            <div data-aos = "zoom-in-down" data-aos-duration="1500" className="footer__bottom">
                <p>KarmanApp, Inc is not responsible for content on external websites</p>
                <p>&copy; 2065 KarmanApp, Inc., an Extrude Studio company. All rights reserved. Karman Logo is a registered trademark of KarmanApp, Inc.</p>
            </div>
        </div>
    )
}

export default Footer
