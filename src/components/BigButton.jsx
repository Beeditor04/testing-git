const BigButton = (props) => {
    return (
        <a href={props.link}><button className="big-button">{props.text}</button></a>
    );
  };
  
  export default BigButton;
  