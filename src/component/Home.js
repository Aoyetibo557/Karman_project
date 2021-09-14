import React from 'react';
import './Home.css';
import Header from './Header';
import Banner from './Banner';
import Body from './Body';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Header/>
            <Banner />
            <Body />
            <Footer />
        </div>
    )
}

export default Home
