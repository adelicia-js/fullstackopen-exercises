import { useState } from "react";

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0]);
  const copy = [...votes];

  console.log('anecdote number: ', selected + '\nvotes count: ' + votes);

  const ranNum = (min,max) => {
    return Math.floor(Math.random() * (max-min)) + min;
  }

  const ranAnec = () => {
    const anec = ranNum(0, anecdotes.length);
    console.log(anecdotes.length);
    setSelected(anec);
  }

  const updateVote = () => {
    copy[selected] += 1;
    setVotes(copy);
    console.log('copy..',copy)
    console.log('updated points...',votes);
  }

  const reset = () => {
    setSelected(0);
    setVotes([0,0,0,0,0,0,0,0]);
  }

  return (
    <div>
      <p id='anecdote'>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes! :{')'}</p>
      <button onClick={updateVote}>vote</button>
      <button onClick={ranAnec}>next anecdote</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
