import React from 'react';
import classes from './Homepage.module.css';

const Homepage = () => {
  const contentItems = [
    'Sneaker Brand Collection',
    'Type of Sneaker Collection',
    'Best Seller Sneakers on Website',
  ];

  return (
      <ul className={classes.content}>
        {contentItems.map((item, index) => (
          <li key={index} className={classes.contentitem}>
            {item}
          </li>
        ))}
      </ul>
  );
};

export default Homepage;
