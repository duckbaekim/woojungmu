import React from 'react';
import '../css/search.css';

function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <input type="text" name="userName" className="search-text" placeholder="소환사 이름"></input>
        <button type="submit" className="search-btn">
          <p>검색</p>
        </button>
      </form>
    </div>
  );
}

export default Search;
