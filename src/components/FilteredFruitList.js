import React, { Component } from 'react';
const FilteredFruitList = (props) => {

const fruitList = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
return (
  <ul className="fruit-list">
       { fruitList.map((fr, index) => <li key={index}>{fr.char}</li>)}
  </ul>
  );
};

FilteredFruitList.defaultProps = {
    fruit: [],
    filter: null
  }

export default FilteredFruitList;
