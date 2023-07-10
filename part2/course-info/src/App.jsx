import "./App.css";
import PropTypes from "prop-types";

const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

Header.propTypes = {
  course: PropTypes.string,
};

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

Part.propTypes = {
  part: PropTypes.string,
  exercises: PropTypes.number,
};

const Content = ({ partsArr }) => {
  return (
    <>
      <Part part={partsArr[0].name} exercises={partsArr[0].exercises} />
      <Part part={partsArr[1].name} exercises={partsArr[1].exercises} />
      <Part part={partsArr[2].name} exercises={partsArr[2].exercises} />
    </>
  );
};

Content.propTypes = {
  partsArr: PropTypes.array,
};

const Total = ({ exercisesArr }) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {exercisesArr[0].exercises +
          exercisesArr[1].exercises +
          exercisesArr[2].exercises}
      </p>
    </>
  );
};

Total.propTypes = {
  exercisesArr: PropTypes.array,
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Content partsArr={parts} />
      <Total exercisesArr={parts}/>
    </div>
  );
};

export default App;
