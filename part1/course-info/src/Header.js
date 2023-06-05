const Header = (props) => {
    console.log(props);
    return (
      <>
        <h1 style={{color:'#4C2878', fontSize:'3rem'}}>{props.title.name}</h1>
      </>
    );
  };

export default Header;