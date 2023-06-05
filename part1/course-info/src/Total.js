const Total = (props) => {
  console.log(props);
  const array = props.exerciseArr.parts 
  return (
    <>
      <p style={{color:'#BE2260', fontSize:'1.5rem'}}>Number of exercises: {array[0].exercises+array[1].exercises+array[2].exercises}</p>
    </>
  );
};

export default Total;
