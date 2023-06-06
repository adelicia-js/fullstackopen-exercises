import { useState } from "react";

const Header = ({text}) => {
  return(
    <div>
      <h1 style={{fontSize: '3rem', color: '#8F1C1C'}}>Random Anecdotes</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick} style={{fontSize: '0.9rem'}}>{text}</button>
    </div>
  )
}

const DisplayAnec = ({text, anecdotes, anecNum, points}) => {
  return (
    <div>
      <h2 style={{fontSize: '2rem', color: '#E65100'}}>{text}</h2>
      <p style={{fontSize: '1.2rem', color: '#E53935'}}>{anecdotes[anecNum]}</p>
      <p style={{fontSize: '1rem'}}>This anecdote has {points[anecNum]} votes! :{')'}</p>
    </div>
  )
}

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
    setMaxVotes(0);
  };

  return (
    <div style={{ fontFamily: "monospace", backgroundColor: '#FFEE58'}}>
      <Header/>
      <DisplayAnec text='Anecdote of the Day' anecdotes={anecdotes} anecNum={selected} points={votes}/>
      <Button handleClick={updateVote} text='vote'/>
      <Button handleClick={ranAnec} text='next anecdote'/>
      <Button handleClick={reset} text='reset'/>        
      <DisplayAnec text='Anecdote with most votes' anecdotes={anecdotes} anecNum={maxVotes} points={votes}/>


    </div>
  );
};

export default App;
