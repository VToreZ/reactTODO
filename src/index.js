import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import './index.css';
/////////
function Wrap() {
  return(
    <div className="pageWrap">
      <Header/>
      <Layout/>
    </div>
    );
}
/////////
render(
  <Wrap/>,
  document.getElementById('root')
);