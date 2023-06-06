const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1 style={{color:'#4C2878', fontSize:'3rem'}}>{props.title.name}</h1>
    </>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <p style={{color:'#BE2260', fontSize:'1.5rem'}}>
        {props.names}: {props.numbers}
      </p>
    </>
  );
};


const Content = (props) => {
  console.log(props);
  const array = props.partsArr.parts;
  return (
    <>
      <Part names={array[0].name} numbers={array[0].exercises} />
      <Part names={array[1].name} numbers={array[1].exercises} />
      <Part names={array[2].name} numbers={array[2].exercises} />
    </>
  );
};

const Total = (props) => {
  console.log(props);
  const array = props.exerciseArr.parts 
  return (
    <>
      <p style={{color:'#BE2260', fontSize:'1.5rem'}}>Number of exercises: {array[0].exercises+array[1].exercises+array[2].exercises}</p>
    </>
  );
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
