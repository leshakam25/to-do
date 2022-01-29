function TodoDo(props) {
  return (
    <div className="todoDo">
      <div>{props.id + " " + props.message + " "}</div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
}
export default TodoDo;
