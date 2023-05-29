const Header = (props) => {
    console.log(props);
    return (
      <>
        <h1>{props.title.name}</h1>
      </>
    );
  };

export default Header;