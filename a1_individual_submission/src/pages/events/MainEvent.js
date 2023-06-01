import React from 'react';
import { useNavigate} from 'react-router-dom';
import classes from './MainEvent.module.css';
import { useLocation } from 'react-router-dom';

  

const MainEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {eventName, eventImage} = location.state;

  const event = {
    date: 'May 31, 2023',
    time: '10:00 AM - 12:00 PM',
    location: 'Event Location',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices elit libero, a blandit magna auctor vel.',
  };

  const handleRegister = () => {
    navigate('/eventregistration'); // Replace with the actual route to your event registration form page
  };

  return (
    <div className={classes.eventpage}>
      <h2 className= {classes.eventname}>{eventName}</h2>
      <div className={classes.eventinfo}>
        <div className={classes.eventimage}>
          <img src={eventImage} alt={eventName} />
        </div>
        <div className={classes.eventdetails}>
          <p className= {classes.eventdate}><strong>Event Date: </strong>{event.date}</p>
          <p className= {classes.eventtime}><strong>Event Time: </strong>{event.time}</p>
          <p className= {classes.eventlocation}><strong>Location: </strong>{event.location}</p>
          <strong className= {classes.eventdescription}>Description: </strong>
          <p className= {classes.eventdescription}>{event.description}</p>
          <button className= {classes.registerbutton} onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
