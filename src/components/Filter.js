import React, { Component } from 'react';
import FilteredFruitList from './FilteredFruitList';

const Filter = (props) =>
<div>
  <select onChange={props.handleChange} defaultValue="all">
    <option value="all">All</option>
    { props.filters.map((filter) => {
     return <option key={filter} value={filter}>{filter}</option>
   })}
   </select>
   <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
</div>

Filter.defaultProps = {
  filters: [],
  handleChange: null
}

export default Filter;