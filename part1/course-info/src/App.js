import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
import Desc from "./Desc";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div style={{fontFamily:'monospace', backgroundColor:'#E6EE9C'}}>
      <Header title={course} />
      <Content partsArr={course} />
      <Total exerciseArr={course} />
      <Desc/>
    </div>
  );
};

export default App;
