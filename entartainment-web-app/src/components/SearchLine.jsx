import React from 'react'
import {ReactComponent as SearchIcon} from "../assets/icon-search.svg"
function SearchLine() {
  return (
    <div className="search_container">
      <SearchIcon className="seach_container-icon"></SearchIcon>
      <input className='seach_container-input' type="text" id="search"  name='search' placeholder='Search for movies or TV series' autoComplete='off' />
    </div>
  )
}

export default SearchLine 