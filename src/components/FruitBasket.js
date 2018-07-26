import React, { Component }  from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return(
    <div className="fruit-basket">
      <Filter 
        fruit={props.fruit} 
        filters={props.filters} 
        currentFilter={props.currentFilter} 
        handleChange={props.handleChange} 
      />
    </div> 
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: 'all',
  updateFilterCallback: null
}

export default FruitBasket;
