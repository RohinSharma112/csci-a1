import React from 'react';
import classes from './EventRegistration.module.css';
import { useState } from 'react';

const EventRegistration = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setName('');
    setAge('');
    setPhone('');
    setEmail('');
  };

  return (
    <div className={classes.eventregistration}>
      <h1 className={classes.pagetitle}>Registration Form</h1>
      <form className={classes.registrationform} onSubmit={handleSubmit}>
        <div className={classes.formgroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={classes.formgroup}>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div className={classes.formgroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className={classes.formgroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className={classes.submitbutton}>Register</button>
      </form>

      {showPopup && (
        <div className={classes.popup}>
          <div className={classes.popupcontent}>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering for the event.</p>
            <button className={classes.closebutton} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRegistration;