import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/time').then(
      res => res.json()
    ).then(
      data => {
        setCurrentTime(data.time);
      }
    );
    fetch("http://localhost:5000/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, []);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  )
}

export default App;