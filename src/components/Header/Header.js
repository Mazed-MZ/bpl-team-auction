import React from 'react';
import logo from '../../bpl020101-min.jpg';
import './Header.css';



const Header = () => {
    return (
        <div className='header'>
            <img src={logo}/>
            <h1>BPL PLAYER AUCTION</h1>
        </div>
    );
};

export default Header;