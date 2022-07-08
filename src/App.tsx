import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { name: 'T-shirt', price: 50, parts: ['a', 'b', 'c'] },
    { name: 'candy', price: 5, parts: ['a', 'c'] },
    { name: 'fruit', price: 3, parts: ['a', 'b'] },
  ];

  interface ExpendInterface {
    name: string;
    parts: string[];
  }

  const ExpendList = (props: ExpendInterface) => {
    const [showList, setShowList] = useState(true);

    return (
      <>
        <div onClick={() => setShowList(!showList)}>{props.name}</div>
        {showList && (<div>
          <ul>
            {props.parts.map(part => (
              <li>{part}</li>
            ))}
          </ul>
        </div>)}
      </>
    );
  };

  return (
    <>
      <div>Products:</div>
      {
        products.map(p => (
          <ExpendList name={p.name} parts={p.parts} />
        ))
      }

    </>
  );
};
export default App;
