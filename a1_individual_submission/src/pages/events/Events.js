import React from 'react';
import classes from './Events.module.css';
import {Link} from 'react-router-dom';

const Events = () => {

  const events = [
    {
      id: 1,
      name: 'Event 1',
      image: 'https://media.istockphoto.com/id/492339961/photo/different-shoes-displayed-in-a-shoe-shop.jpg?s=1024x1024&w=is&k=20&c=hIzXc3G4sO35SOCriv_Z4cGpP7T50d5APylaKxkrk6o=',
    },
    {
      id: 2,
      name: 'Event 2',
      image: 'https://media.istockphoto.com/id/492339961/photo/different-shoes-displayed-in-a-shoe-shop.jpg?s=1024x1024&w=is&k=20&c=hIzXc3G4sO35SOCriv_Z4cGpP7T50d5APylaKxkrk6o=',
    },
    {
      id: 3,
      name: 'Event 3',
      image: 'https://media.istockphoto.com/id/492339961/photo/different-shoes-displayed-in-a-shoe-shop.jpg?s=1024x1024&w=is&k=20&c=hIzXc3G4sO35SOCriv_Z4cGpP7T50d5APylaKxkrk6o=',
    },
    {
      id: 4,
      name: 'Event 4',
      image: 'https://burst.shopifycdn.com/photos/pair-of-all-black-sneakers.jpg?width=746&format=pjpg&exif=1&iptc=1',
    },
    {
      id: 5,
      name: 'Event 5',
      image: 'https://burst.shopifycdn.com/photos/pair-of-all-black-sneakers.jpg?width=746&format=pjpg&exif=1&iptc=1',
    },
    {
      id: 6,
      name: 'Event 6',
      image: 'https://burst.shopifycdn.com/photos/pair-of-all-black-sneakers.jpg?width=746&format=pjpg&exif=1&iptc=1',
    },

  ];

  return (
    <div className={classes.eventspage}>
      <div className={classes.eventcards}>
        {events.map((event) => (
          <div key={event.id} className={classes.eventcard}>
            <h2 className={classes.eventname}>{event.name}</h2>
            <img src={event.image} alt={event.name} className={classes.eventimage} />
            <Link
            to={`/event/${event.id}`} state={{eventName : event.name, eventImage: event.image }}
            className={classes.registerbutton}
          >
            Register
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;