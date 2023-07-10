import PropTypes from "prop-types";

const Header = ({ courseArr }) => {
  return (
    <>
      <h1 style={{ color: "#4C2878", fontSize: "3rem" }}>{courseArr.name}</h1>
    </>
  );
};

Header.propTypes = {
  courseArr: PropTypes.object,
  name: PropTypes.string,
};

const Part = ({ partsArr }) => {
  return (
    <>
      <li style={{ color: "#BE2260", fontSize: "1.5rem", padding:"0 0 0.5rem 0.5rem" }}>
        {partsArr.name}: {partsArr.exercises}
      </li>
    </>
  );
};

Part.propTypes = {
  partsArr: PropTypes.object,
  name: PropTypes.string,
  exercises: PropTypes.number,
};

const Content = ({ courseArr }) => {
  return (
    <>
      {courseArr.parts.map((courseType) => (
        <Part key={courseType.id} partsArr={courseType} />
      ))}
    </>
  );
};

Content.propTypes = {
  courseArr: PropTypes.object,
  parts: PropTypes.array,
};

const Total = ({ courseArr }) => {
  const exerciseValues = courseArr.parts.map((courseType)=>(courseType.exercises));
  const total = exerciseValues.reduce((prevVal,currVal)=>(prevVal+currVal));
  console.log("exercises array: ",exerciseValues)
  console.log("total: ",total)
  return (
    <>
      <p style={{ color: "#BE2260", fontSize: "1.5rem" }}>
        Total of{" "}
        <span style={{ color: "#9B1A1A", fontWeight: "bolder" }}>
          {total}
        </span>{" "}
        exercises
      </p>
    </>
  );
};

Total.propTypes = {
  courseArr: PropTypes.object,
  parts: PropTypes.array,
  exercises: PropTypes.number,
};

const Desc = () => {
  return (
    <div style={{backgroundColor: "#CE93D8", borderTop:"1px solid #7B1F73", padding:"1rem"}}>
      <p style={{ color: "#2C0C51", fontSize: "1.1rem" }}>
        This app was an exercise to understand and learn:
      </p>
      <ul style={{ color: "#2C0C51", fontSize: "1rem" }}>
        <li>how props work</li>
        <li>how to render collections</li>
      </ul>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseArr={course} />
      <Content courseArr={course} />
      <Total courseArr={course} />
      <Desc />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div style={{ fontFamily: "monospace", backgroundColor: "#E6EE9C" }}>
      <Course course={course} />
    </div>
  );
};

export default App;
