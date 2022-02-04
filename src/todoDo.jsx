function TodoDo({ id, message, handleDeleteTask }) {
  return (
    <div className="todoDo">
      <div>{id + " " + message + " "}</div>
      <div>
        <button onClick={() => handleDeleteTask(id)}>X</button>
      </div>
    </div>
  );
}
export default TodoDo;
