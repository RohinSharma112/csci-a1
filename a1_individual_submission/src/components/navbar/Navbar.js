import {NavLink} from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {

  const navactive = ({ isActive }) => {
    var linkClasses = [classes.navbar];
    if (isActive) linkClasses = [classes.active]
    return linkClasses
  }

  return (
    <div className={classes.header}>
        <ul className={classes.nav}>
          <li>
          <NavLink exact to="/" className={navactive}>
            Home
          </NavLink>
          </li>
          <li>
          <NavLink to="/catalogue" className={navactive}>
            Catalogue
          </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={navactive}>
            Events
          </NavLink>
          </li>
          <li>
          <NavLink to="/login" className={navactive}>
            Login
          </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;