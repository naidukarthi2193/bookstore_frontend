import React from 'react';
import SearchIcon from '@material-ui/icons/Search';  //importing search icon
import './Search.css';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__input' >
                <input  placeholder="Search for Books , Authors..." type="text"  />
                <SearchIcon  className='search__inputButton'/>

            </div>
            <button>Filter</button>   

            
        </div>
        


    )
}

export default Search
