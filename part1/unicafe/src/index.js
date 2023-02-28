import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({ text, onClick }) => {
return (<button onClick={onClick}>{text}</button>)
}

const Statistics = ({ text,value }) => {
  return (<p>{text} {value}</p>)
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral +1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Statistics text={"good"} value={good}/>
      <Statistics text={"neutral"} value={neutral}/>
      <Statistics text={"bad"} value={bad}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
