import './styles/calender.css';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { useState } from 'react';
import { Calendar , dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: " project deadline",
    allDay: true,
    start: new Date(2023,10,10),
    end: new Date(2023,10,10),
  },
 
];



function Calender(){
 
   const [newEvent, setNewEvent] = useState({
    title:"",
    start:"",
    end:"",
   });
   const [ allEvents, setAllEvents] = useState(events);

   function addEvent(){
    setAllEvents([...allEvents, newEvent])
   }
 
  
  return (
    <div >
      <h1>Handling your important event with calendar help"</h1>
      <div className='contain-calender'>
      <div className='calendar-table'>
         <Calendar className='cal' localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{margin: "50px" , height:500 }}/>
      </div>
      <div className='adding-task'>
        <h2>Add Event</h2>
        <input type='text' placeholder='Add ur event' value={newEvent.title} onChange={(e)=> setNewEvent({...newEvent, title: e.target.value})} />
        <br></br>
        <DatePicker  placeholderText='start date' selected={newEvent.start} onChange={(start)=>{setNewEvent({...newEvent,start})}} />
        <br></br>
        <DatePicker  placeholderText='end date' selected={newEvent.end} onChange={(end)=>{setNewEvent({...newEvent,end})}} />
        <br></br>
        <button className='cal-btn' onClick={addEvent}> Add</button>
      </div>
      </div>
    </div>
  );
    };
  

  export default Calender;
