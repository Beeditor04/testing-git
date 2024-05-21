const ContainerInput = (props) => {
    const maxLength = (event) => {
        if (props.type === "number" && event.target.value.length > 10) {
          event.target.value = event.target.value.slice(0, 10);
        }
      };
  return (
    <div className="input-cont">
      <h4>{props.text}</h4>
      <input 
        className={"input-box" + (props.type === "number" ? " number" : "")} 
        type={props.type}   
        onChange={maxLength}
    />
    </div>
  );
};

export default ContainerInput;
