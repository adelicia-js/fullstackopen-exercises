import { useState } from "react";
import Button from "./Button";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td style={{ border: "1px solid black", padding: "0.5rem" }}>{text}</td>
        <td style={{ border: "1px solid black", padding: "0.5rem" }}>
          {value}
        </td>
      </tr>
    </>
  );
};

const Stats = (props) => {
  const goodScore = props.good * 1;
  const neutralScore = props.neutral * 0;
  const badScore = props.bad * -1;

  const avg = (goodScore + neutralScore + badScore) / props.total;

  const posPer = (props.good / props.total) * 100;
  if (props.total === 0) {
    return (
      <>
        <p>No feedback given yet! :{"("}</p>
      </>
    );
  } else {
    return (
      <div>
        <table
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
        >
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="total" value={props.total} />
            <StatisticLine text="average" value={avg} />
            <StatisticLine text="positive %" value={posPer} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(
    "rendering...",
    "\ngood: ",
    good,
    "\nneutral: ",
    neutral,
    "\nbad: ",
    bad,
    "\ntotal: ",
    total
  );

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    console.log("updated good: ", good, "\nupdated total: ", total);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
    console.log("updated neutral: ", neutral, "\ntotal: ", total);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    console.log("bad: ", bad, "\ntotal: ", total);
  };

  const resetStats = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setTotal(0);
  };

  return (
    <div style={{ fontFamily: "monospace", background: "#CDC1E3" }}>
      <h1
        style={{
          fontSize: "3rem",
          textTransform: "uppercase",
          color: "#650F3D",
        }}
      >
        Welcome to Unicafe!
      </h1>

      <h2 style={{ color: "#9F4072" }}>Give Feedback :{")"}</h2>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button handleClick={handleGood} text="👍🏼good👍🏼" />
        <Button handleClick={handleNeutral} text="😐neutral😐" />
        <Button handleClick={handleBad} text="👎🏼bad👎🏼" />
      </div>
      <h2 style={{ color: "#9F4072" }}>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad} total={total} />
      <Button handleClick={resetStats} text="🚮reset♻" />
    </div>
  );
};

export default App;
