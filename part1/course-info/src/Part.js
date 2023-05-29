const Part = (props) => {
    console.log(props);
    return (
      <>
        <p>
          {props.names} {props.numbers}
        </p>
      </>
    );
  };

export default Part;