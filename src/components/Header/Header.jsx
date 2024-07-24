import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Books are windows to new worlds, filled with wonder, knowledge, and adventure. They transport you to new places, introduce beloved characters, and offer transformative insights. Reading engages your imagination, broadens your horizons, and nurtures your soul. Each book offers a unique journey that can inspire, challenge, and enrich you. So, turn the page and start your next great adventure!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header