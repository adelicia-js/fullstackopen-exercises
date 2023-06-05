import {useState} from 'react';
import Button from './Button';
import StatisticLine from './StatisticLine';

const Stats = (props) => {
  if(props.total === 0) {
    return (
      <>
        <p>No feedback given yet! :{'('}</p>
      </>
    )
  } else {
    const goodScore = props.good * 1;
    const neutralScore = props.neutral * 0;
    const badScore = props.bad * -1;
  
    const avg = (goodScore + neutralScore + badScore)/props.total;
  
    const posPer = (props.good/props.total)*100;
  
    return (
      <>
        <StatisticLine text='good' value={props.good}/>  
        <StatisticLine text='neutral' value={props.neutral}/>        
        <StatisticLine text='bad' value={props.bad}/>        
        <StatisticLine text='average' value={avg}/>        
        <StatisticLine text='positive %' value={posPer}/>        
      </>
    )
  }

}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  console.log('rendering...', '\ngood: ',good,'\nneutral: ', neutral, '\nbad: ', bad, '\ntotal: ', total);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    console.log('updated good: ', good, '\nupdated total: ', total);
  } 

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
    console.log('updated neutral: ', neutral, '\ntotal: ', total);
  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    console.log('bad: ', bad, '\ntotal: ', total);
  }

  const resetStats = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setTotal(0);
  } 

  return (
    <div style={{fontFamily:'monospace'}}>

      <h1>Welcome to Unicafe!</h1>

      <h2>Give Feedback :{')'}</h2>
      <Button handleClick={handleGood} text='👍🏼good👍🏼'/>
      <Button handleClick={handleNeutral} text='😐neutral😐'/>
      <Button handleClick={handleBad} text='👎🏼bad👎🏼'/>
      <h2>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad} total={total}/>
      <br/>
      <Button handleClick={resetStats} text='🚮reset♻'/>
    </div>
  );
}

export default App;
