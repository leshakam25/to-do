import TodoDo from "./todoDo";
import React from "react";
import { sendListCreator, updateListBodyCreator } from "./store";

function Todo(props) {
  let listElements = props.listData.map((p) => (
    <TodoDo id={p.id} message={p.message} />
  ));

  let newListElement = React.createRef();

  let onSendList = () => {
    sendList();
  };

  let onListChange = () => {
    let message = newListElement.current.value;
    updateListBody(message);
  };

  let sendList = () => {
    props.store.listcase(sendListCreator());
  };

  let updateListBody = (text) => {
    let action = updateListBodyCreator(text);
    props.store.dispatch(action);
  };

  return (
    <div className="todoBody">
      <div>
        <h3>toDoList</h3>
      </div>
      <div className="list">
        <div>
          <textarea
            onChange={onListChange}
            ref={newListElement}
            value={props.list}
          />
        </div>
        <div>
          <p>Списочек задач:</p>
        </div>
        {listElements}
        <button onClick={onSendList}>Добавить</button>
      </div>
    </div>
  );
}
export default Todo;
