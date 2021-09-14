import React, { useEffect } from 'react';
import './Banner.css';
import TabsContainer from './TabsContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Banner() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease'
        })
    }, [])


    return (
        <div className="banner">
            <h5 data-aos="flip-down" data-aos-duration="2000" className="banner__h5">
                <span>The </span>
                <span>Edge of space</span>
                <span>Awaits</span>
            </h5>

            <div data-aos="zoom-out" data-aos-duration="2000" className="banner__tab">
                <TabsContainer />
            </div>
        </div>
    )
}

export default Banner
