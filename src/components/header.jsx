import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

import '../components/style/header.css';

const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <header>
      <Link to='/'>
        <img src='./src/assets/logo.svg' alt='logo do website'/>
      </Link>

      <div className='input-contaneir'>
        <form>
          <input type='text' name='search-book' id='input' className='poppins' onChange={(e) =>setSearch(e.target.value)}/>
          <Link to={`/books/${search}`} className='input-contaneir'>
            <button name='search-book'> <FaSearch /> </button>
          </Link>
        </form>
        
      </div>
      
    </header>
  )
}

export default Header;