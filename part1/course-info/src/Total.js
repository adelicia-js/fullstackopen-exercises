const Total = (props) => {
  console.log(props);
  const array = props.exerciseArr 
  return (
    <>
      <p>Number of exercises {array[0].exercises+array[1].exercises+array[2].exercises}</p>
    </>
  );
};

export default Total;
