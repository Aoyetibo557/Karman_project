import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {MdAccountCircle,MdSearch, MdLanguage} from 'react-icons/md';
import { GiShoppingBag} from 'react-icons/gi';

const languages = [
    {"value":"English","code":"EN"},
    {"value":"Japanese","code":"JA"},
    {"value":"Afrikaans","code":"AF"},
    {"value":"Albanian","code":"SQ"},
];

function Header() {
    const [lang, setLang] = useState("");
    return (
        <div className="header">
            <Link className="header__logo" to=",">KARMAN</Link>
            <nav className="header__nav">
                
                <div className="header__div">
                    <MdLanguage />
                    <select className="header__select" value={lang} onChange={(e) => setLang(e.target.value)} placeholder="select">
                        {languages.map((language) => <option value={language.code}>{language.value}</option>)}
                    </select>
                </div>

                <Link className="nav__link" to="/">Support</Link>
                <Link className="nav__link" to="/">Trips</Link>
                <Link className="nav__link" to="/"> <MdAccountCircle /> Connect Wallet</Link>

            </nav>

            <nav className="small-menu hide">
                <GiShoppingBag className="sm-icon" />
                <MdSearch className="sm-icon" />
                <MdAccountCircle className="sm-icon" />
            </nav>
        </div>
    )
}

export default Header
