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

export default Part;