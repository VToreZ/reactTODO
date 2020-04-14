import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from '../Layout/index';
import './index.css';
/////////
function Header() {
  return (
    <div className='Header__header'>
      <h1>MyTODO</h1>
      <nav className='Header__nav'>
        <p></p>
        <a className="navItem" href="#">navItem</a>
        <a className="navItem" href="#">navItem</a>
        <a className="navItem" href="#">navItem</a>
      </nav>
    </div>
  );
}
/////////

export default Header;