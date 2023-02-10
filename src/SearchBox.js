import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          className='tc'
          type='search'
          placeholder='search pkmon!'
          onChange={searchChange}
        />
      </div>
    );
  }
  
  export default SearchBox