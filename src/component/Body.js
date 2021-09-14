import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import MiniCard from './MiniCard';
import Treadmill from '../images/treadmill.svg';
import RocketImage from '../images/rocket.svg';
import Launch from '../images/launch.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Body() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease'
        })
    }, [])

    return (
        <div className="body">
            <section className="body__section">
                <div className="top__section">
                    <h5>EXPERIENCE SPACEFLIGHT</h5>
                    <div data-aos="zoom-out" data-aos-duration="2000">
                        <MiniCard
                            type="flight"
                            link= "See flight packages"
                        />

                        <MiniCard
                            type="vr"
                            link= "Explore VR packages"
                        />
                    </div>
                </div>

                <div className="mid__section">

                    <h5>IDEAS FOR A LIFE CHANGING TRIP</h5>

                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="longcard trip-img">
                        <div className="longcard-text">
                            <h4>Turn a mission flight into a getaway</h4>
                            <p>Lorem ipsumdolor sit amet, consectetuer adipising elit, sed diam</p>
                            <Link className="longcard-text-btn" to="/">Learn More</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="1500" className="longcard martian-img">
                        <div className="longcard-text" >
                            <h4>Seize a Martian day</h4>
                            <p>Lorem ipsumdolor sit amet, consectetuer adipising elit, sed diam</p>
                            <Link className="longcard-text-btn" to="/">Book a flight</Link>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="1800" className="longcard lights-img">
                       <div className="longcard-text">
                            <h4>Festival of lights from interstellar clouds</h4>
                            <p>Lorem ipsumdolor sit amet, consectetuer adipising elit, sed diam</p>
                            <Link className="longcard-text-btn" to="/">Show me More</Link>
                       </div>
                    </div>
                </div>

                <div className="bottom__section">
                    <h5>GOING INTERPLANETARY? WHERE TO BEGIN</h5>

                    <div data-aos="fade-right" data-aos-duration="1000"  className="bottom__section-div">
                        <div className="bottom__div">
                            <img className="bottom-img" src={Treadmill} alt="" />
                            <div>
                                <h3 className="bottom-h3">Header1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                </p>
                                <Link className="bottom-link" to="/">Link1</Link>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500" className="bottom__div">
                            <img className="bottom-img" src={Launch} alt="" />
                            <div>
                                <h3 className="bottom-h3">Header1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                </p>
                                <Link className="bottom-link" to="/">Link1</Link>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2000" className="bottom__div">
                            <img className="bottom-img" src={RocketImage} alt="" />
                            <div>
                                <h3 className="bottom-h3">Header1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                </p>
                                <Link className="bottom-link" to="/">Link1</Link>
                            </div>
                        </div>

                    </div>

                    <div className="bottom-crypto">
                        <h5 className="crypto-h5">Book Flights with crypto</h5>
                        <div className="crypto__banner">
                            <h4>Use the immutable blockchain</h4>
                            <p>Purchase tickets as non-fungible tokens using cryptocurrency.</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>

                <div className="reach-out">
                    <p>Reach for the stars and discover more with Karman. <a href="/">Explore the universe</a> </p>
                </div>
            </section>
        </div>
    )
}

export default Body
