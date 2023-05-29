import Part from "./Part";

const Content = (props) => {
    console.log(props);
    const array = props.partsArr;
    return (
      <>
        <Part names={array[0].name} numbers={array[0].exercises} />
        <Part names={array[1].name} numbers={array[1].exercises} />
        <Part names={array[2].name} numbers={array[2].exercises} />
      </>
    );
  };

export default Content;

