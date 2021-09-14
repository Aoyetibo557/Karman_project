import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MiniCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function MiniCard( {type, link, src}) {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease',
        })
    }, [])

    return (
        <div data-aos="zoom-in-down" data-aos-duration="1000" className={type === "flight" ? "minicard flight-img" : "minicard vr-img"}>
            <Link className="minicard__link" to = {`/${src}`} >{link}</Link>
        </div>
    )
}
export default MiniCard
