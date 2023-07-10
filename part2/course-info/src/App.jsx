import PropTypes from "prop-types";

const Header = ({courseArr}) => {
  return (
    <>
      <h1 style={{color:'#4C2878', fontSize:'3rem'}}>{courseArr.name}</h1>
    </>
  );
};

Header.propTypes = {
  courseArr: PropTypes.object,
  name: PropTypes.string,
};

const Part = ({ part, exercises }) => {
  return (
    <>
      <p style={{color:'#BE2260', fontSize:'1.5rem'}}>
        {part}: {exercises}
      </p>
    </>
  );
};

Part.propTypes = {
  part: PropTypes.string,
  exercises: PropTypes.number,
};

const Content = ({ courseArr }) => {
  return (
    <>
      <Part part={courseArr.parts[0].name} exercises={courseArr.parts[0].exercises} />
      <Part part={courseArr.parts[1].name} exercises={courseArr.parts[1].exercises} />
      <Part part={courseArr.parts[2].name} exercises={courseArr.parts[2].exercises} />
    </>
  );
};

Content.propTypes = {
  courseArr: PropTypes.object,
  parts: PropTypes.array,
  name: PropTypes.string,
  exercises: PropTypes.number,
};

const Total = ({ courseArr }) => {
  return (
    <>
      <p style={{color:'#BE2260', fontSize:'1.5rem'}}>
        Number of exercises: {""}
        {courseArr.parts[0].exercises +
          courseArr.parts[1].exercises +
          courseArr.parts[2].exercises}
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
      <>
          <p style={{color:'#1198DA', fontSize:'1rem'}}>[This app was an exercise to understand and learn how props work. :{')'}]</p>
      </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div style={{fontFamily:'monospace', backgroundColor:'#E6EE9C'}}>
      <Header courseArr={course} />
      <Content courseArr={course} />
      <Total courseArr={course}/>
      <Desc/>
    </div>
  );
};

export default App;
