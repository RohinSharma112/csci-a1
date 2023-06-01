import React from 'react';
import classes from './Filterbar.module.css';

const FilterBar = () => {
  const filters = [
    'Filter 1',
    'Filter 2',
    'Filter 3',
    'Filter 4',
    'Filter 5',
  ];

  return (
    <div className={classes.filterbar}>
    <h3 className={classes.title}>Filters</h3>
      {filters.map((filter, index) => (
        <div key={index} className={classes.filter}>
          {filter}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
