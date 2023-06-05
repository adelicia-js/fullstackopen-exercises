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
  const emptyArr = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(emptyArr);
  const [maxVotes, setMaxVotes] = useState(0);
  const copy = [...votes];

  console.log(
    "anecdote number: ",
    selected,
    "\nvotes count: ",
    votes,
    "\nmax votes: ",
    maxVotes
  );


  const ranAnec = () => {
    const anec = Math.floor(Math.random() * anecdotes.length);
    setSelected(anec);
  };

  const updateVote = () => {
    copy[selected] += 1;
    if (copy[selected] > copy[maxVotes]) {
      setMaxVotes(selected);
      setVotes(copy);
    } else {
      setVotes(copy);
    }
    console.log("copy..", copy);
    console.log("updated points...", votes);
  };

  const reset = () => {
    setSelected(0);
    setVotes(emptyArr);
  };

  return (
    <div style={{ fontFamily: "monospace" }}>
      <h1>Random Anecdotes</h1>
      <h2>Anecdote of the Day</h2>
      <p id="anecdote">{anecdotes[selected]}</p>
      <p>
        This anecdote has {votes[selected]} votes! :{")"}
      </p>
      <button onClick={updateVote}>vote</button>
      <button onClick={ranAnec}>next anecdote</button>
      <button onClick={reset}>reset</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxVotes]}</p>
      <p>
        This anecdote has {votes[maxVotes]} votes! :{")"}
      </p>
    </div>
  );
};

export default App;
