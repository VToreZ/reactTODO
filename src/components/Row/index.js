import React, { useState, useEffect, useContext, Fragment } from 'react';
import ReactDOM, { render } from 'react-dom';
import Context from '../Layout/context';
import Task from '../Task/index';
import './index.css';
/////////
function Row(props) {
  const {removeRow} = useContext(Context);
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
    const input = document.querySelector('input');
      setTasks(tasks.concat({title: value, id: tasks.length + 1}));
      setValue(''); 
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id != id));
  }

  return (
      <div className="rowWrap">
        <div className="rowHeader">
          <div className="rowName">
            {props.name}
          </div>
          <button onClick={() => removeRow(props.id)}>
            close
          </button>
        </div>
        <div className="rowContent">
          <ul className="tasksContainer">
            {
              tasks.map(task => {
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