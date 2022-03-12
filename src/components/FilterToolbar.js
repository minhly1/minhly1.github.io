import React from "react";
import FilterLink from '../containers/FilterLink'

const FilterToolbar = () => {
  return (
    <div className="filter-toolbar">
      <FilterLink filter='SHOW_ALL'> All </FilterLink>
      <FilterLink filter='SHOW_ACTIVE'> Not done </FilterLink>
      <FilterLink filter='SHOW_COMPLETED'> Done </FilterLink>
    </div>
  );
};

export default FilterToolbar;