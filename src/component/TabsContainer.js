import React, {useState} from 'react';
import './TabsContainer.css';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { SiOculus } from 'react-icons/si';
import { VscPackage } from 'react-icons/vsc';
import SubOrbital from '../assests/Suborbital.png';
import Orbital from '../assests/Orbital.png';
import Planets from '../assests/output-onlinepngtools.png';
import Galaxy from '../assests/Galaxy.png';
import Flight from './Flight';


function TabsContainer() {
    const [tabState, setTab] = useState(1);

    const toggleTab = (tabIndex) => {
        setTab(tabIndex);
    }
    return (
        <div className="tab__container">
           <div className="tab__header">
                <button className={tabState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}> <GiAirplaneDeparture className="tab__icon" /> Flights</button>
                <button className={tabState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}> <SiOculus className="tab__icon" /> Live Vr</button>
                <button className={tabState === 3 ? "tab active-tab" : "tab"} onClick={() => toggleTab(3)}> <VscPackage className="tab__icon" />  Packages</button>
           </div>

           <div className="tab__contents">
                <div className= {tabState === 1 ? "content active-content" : "content"}>
                    <div className="tab-one__top">
                        <div className="banner__div">
                            <img className="tab-one__img" src={SubOrbital} alt=""/>
                            <p>Sub - Orbital</p>
                        </div>

                        <div className="banner__div banner__div-bg">
                            <img className="tab-one__img" src={Orbital} alt=""/>
                            <p>Orbital</p>
                        </div>

                        <div className="banner__div">
                            <img className="tab-one__img" src={Planets} alt=""/>
                            <p>Interplanetary</p>
                        </div>

                        <div className="banner__div">
                            <img className="tab-one__img" src={Galaxy} alt=""/>
                            <p>Intergalactic</p>
                        </div>
                        
                    </div>

                    <div>
                        <Flight />
                    </div>
                    
                </div>

                <div className= {tabState === 2 ? "content active-content" : "content"}>
                        Tab 2
                </div>

                <div className= {tabState === 3 ? "content active-content" : "content"}>
                        Tab 3
                </div>
           </div>
        </div>
    )
}

export default TabsContainer
