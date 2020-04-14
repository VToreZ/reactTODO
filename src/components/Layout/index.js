import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import Context from './context';
import Row from '../Row';
import './index.css';
/////////

function Layout() {
  const [rowNames, setRowNames] = useState([
    {name: 'firstRow',
    id: 1,
    tasks: [{id: 1,
            title: 'firstDemoTask'},
            {id: 2,
            title: 'secondDemoTask'},
            {id: 3,
            title: 'thirdDemoTask'},
          ]},
    {name: 'secondRow',
    id: 2,
    tasks: []},
    {name: 'thirdRow',
    id: 3,
    tasks: []}
  ]);

  function addRow() {
    setRowNames(rowNames.concat({
      name: 'newRow',
      id: rowNames.length + 1
    }));
  }

  function removeRow(id) {
    setRowNames(rowNames.slice(0, rowNames.length).filter(row => row.id != id));
  }

  return (
    <Context.Provider value={{removeRow}}>
      <div className='Layout__container'>
        <button onClick={addRow}>[+]</button>
        {
          rowNames.slice(0, rowNames.length).map(n => {
            return <Row id={n.id} name={n.name} key={n.id}/>
          })
        }
      </div>
    </Context.Provider>
  );
}



/////////

export default Layout;