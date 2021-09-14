import React, { useState } from 'react';
import './Flight.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdLocationOn,MdDateRange } from 'react-icons/md';
import { BsArrowLeftRight } from 'react-icons/bs';



function Flight() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleClick = (ev) => { 
        ev.preventDefault();
    }
    return (
        <div className="flight">
            <form className="flight__form">
               <div className="form__div">
                    <div className="input__div">
                        <MdLocationOn />
                        <input className="input" type="text" placeholder="Leaving From" />
                    </div>

                    <div className="icon__container">
                        <BsArrowLeftRight  />
                    </div>

                    <div className="input__div">
                        <MdLocationOn />
                        <input className="input" type="text" placeholder="Going to" />
                    </div>

                    <div>
                        <p> <MdDateRange/> Departure Date</p>
                        <DatePicker placeholderText="Depart Date" className="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div>
                        <p> <MdDateRange /> Arrival Date</p>
                        <DatePicker placeholderText="Arrival Date" className="date" selected={endDate} onChange={(date) => setEndDate(date)}  />
                    </div>
               </div>

               <div>
                   <button onClick={handleClick} className="form__btn">Search</button>
               </div>
            </form>
        </div>
    )
}

export default Flight
