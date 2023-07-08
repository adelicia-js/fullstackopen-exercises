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

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  );
};

Content.propTypes = {
  part1: PropTypes.string,
  part2: PropTypes.string,
  part3: PropTypes.string,
  exercises1: PropTypes.number,
  exercises2: PropTypes.number,
  exercises3: PropTypes.number,
};

const Total = ({ sum }) => {
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};

Total.propTypes = {
  sum: PropTypes.number,
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
