import React from 'react';
import {generateTime, addTime} from './Times.js';

function CalendarComponent({
    day = "Default day",
    time = generateTime(0),
    duration = 0,
    title = "Default title",
    idx ="-1"
}){
    return (
        <ul>
        <li>Index: {idx}</li>
        <li>{day}</li>
        <li>{title}</li>
        <li>{time[1]} - {addTime(time[0],duration)[1]}</li>
        </ul>


    );
    
}

function CalendarTable({days}){
    return (

        <div>

            {days.map((daydata, idx)=>{
                return (<CalendarComponent
                idx = {idx}
                day = {daydata.day}
                time = {generateTime(daydata.time)}
                duration = {daydata.duration}
                title = {daydata.title}
                ></CalendarComponent>

)
            })}



        </div>

    )
}

export default CalendarTable;