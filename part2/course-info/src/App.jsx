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
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
