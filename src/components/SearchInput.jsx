import React from 'react';
import '../styles/SearchInput.css';
import { Search, Bell } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="search-wrapper">
      <Search className="icon-left" size={18} />
      <input type="text" className="input" placeholder="Search" />
      <Bell className="icon-right" size={18} fill="#3730A2" color="#3730A2"/>
    </div>
  );
};

export default SearchInput;
