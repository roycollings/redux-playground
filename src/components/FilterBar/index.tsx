import React from 'react';
import './index.css';
import { useAppDispatch } from '../../app/hooks';
import { setFilteredData } from './filterSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="filter-bar">
      <div className="filter">
        {/* Changes the store 'filter' state. */}
        <input onChange={(e) => dispatch(setFilteredData(e.target.value))} />
      </div>
    </div>
  );
};

export default SearchBar;
