import {useState} from 'react';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log('rendering...', '\ngood: ',good,'\nneutral: ', neutral, '\nbad: ', bad);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    console.log('updated good: ', good);
  } 

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    console.log('updated neutral: ', neutral);
  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    console.log('updated bad: ', bad);
  }

  return (
    <div style={{fontFamily:'monospace'}}>

      <h1>Welcome to Unicafe!</h1>

      <h2>Give Feedback :{')'}</h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  );
}

export default App;
