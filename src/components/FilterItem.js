import React from 'react'

const FilterItem = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      disabled={active}
      pressed={active ? 'true' : 'false'}
    >
      {children}
    </button>
)

export default FilterItem
