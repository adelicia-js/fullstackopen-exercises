import PropTypes from "prop-types";

const Header = ({ courseArr }) => {
  return (
    <>
      <h2 style={{ color: "#02646D", fontSize: "2rem" }}>{courseArr.name}</h2>
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
      <li
        style={{
          color: "#2E7D32",
          fontSize: "1.2rem",
          padding: "0 0 0.5rem 0.5rem",
        }}
      >
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
  const exerciseValues = courseArr.parts.map(
    (courseType) => courseType.exercises
  );
  const total = exerciseValues.reduce((prevVal, currVal) => prevVal + currVal);
  console.log("exercises array: ", exerciseValues);
  console.log("total: ", total);
  return (
    <>
      <p style={{ color: "#1A237E", fontSize: "1.2rem" }}>
        Total of{" "}
        <span style={{ color: "#1A237E", fontWeight: "bolder" }}>{total}</span>{" "}
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
    <div
      style={{
        backgroundColor: "#4DB6AC",
        borderTop: "1px solid #02332B",
        padding: "1rem",
      }}
    >
      <p style={{ color: "#02332B", fontSize: "1.1rem" }}>
        This app was an exercise to understand and learn:
      </p>
      <ul style={{ color: "#02332B", fontSize: "1rem" }}>
        <li>how props work</li>
        <li>how to render collections</li>
      </ul>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <h1 style={{ color: "#004D40", fontSize: "3rem" }}>
        Web Development Curriculum
      </h1>
      {course.map((courseType) => (
        <div key={courseType.id}>
          <Header courseArr={courseType} />
          <Content courseArr={courseType} />
          <Total courseArr={courseType} />
        </div>
      ))}

      <Desc />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.array,
};

export default Course;

