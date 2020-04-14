import React, { useState, useEffect, useContext } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
/////////

function Task(props) {
  // const removeTask = props.func;
  return (
    <li className="taskItem">
      {props.title}
      <button onClick={() => props.func(props.id)} 
      className="but" style={{
        float:"right", 
        width: '15px', 
        height: '15px', 
        padding: '0'
        }}>
          X
      </button>

    </li>
  )
}

/////////
export default Task;