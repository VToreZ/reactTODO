import React, { useState, useEffect, useContext, Fragment } from 'react';
import ReactDOM, { render } from 'react-dom';
import Task from '../Task/index';
import './index.css';
/////////
function Row(props) {
  const [tasks, setTasks] = useState([
    {id: 1,
    title: 'firstDemoTask'},
    {id: 2,
    title: 'secondDemoTask'},
    {id: 3,
    title: 'thirdDemoTask'},
  ]);
  const [value, setValue] = useState('');
  
  function handleClick() {
    if (value) {
      const input = document.querySelector('input');
      setTasks(tasks.slice(0, tasks.length).concat({title: value, id: tasks.length + 1}));
      setValue(''); 
    }
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function removeTask(id) {
    setTasks(tasks.slice(0, tasks.length).filter(task => task.id != id));
  }

  return (
      <div className="rowWrap">
        <div className="rowContent">
        <div className="rowHeader">
          <strong className="rowName">
            {props.name}
          </strong>
          <button onClick={() => props.removeRow(props.id)}>
            close
          </button>
        </div>
          <ul className="tasksContainer">
            {
              tasks.slice(0, tasks.length).map(task => {
                return (
                    <Task title={task.title} id={task.id} key={task.id} func={removeTask}/>
                )
              })
            }
            <button onClick={handleClick}>add</button>
            <input className={'input'} value={value} onChange={handleChange}></input>
          </ul>
        </div>
      </div>
  )
}

/////////
export default Row;