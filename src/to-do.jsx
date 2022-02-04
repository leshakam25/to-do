import TodoDo from "./todoDo";
import React, { useState } from "react";
import { sendListCreator, updateListBodyCreator } from "./store";

function Todo(props) {
  const [inputText, setInputText] = useState("");

  const [listElements, setListElements] = useState([
    "Пропылесосить",
    "Посуда",
    "Кушкуш",
  ]);
  const handleAddTask = () => {
    if (inputText.length === 0) alert("Введена пустая строка");
    else {
      setListElements([...listElements, inputText]);
      setInputText("");
    }
  };
  const handleDeleteTask = (id) => {
    let array = [...listElements];
    array.splice(id);
    setListElements([...array]);
  };
  const handleChangeInput = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div className="todoBody">
      <div>
        <h3>toDoList</h3>
      </div>
      <div className="list">
        <div>
          <textarea
            onChange={handleChangeInput}
            // ref={newListElement}
            value={inputText}
          />
        </div>
        <div>
          <p>Списочек задач:</p>
        </div>
        {listElements.map((task, index) => (
          <TodoDo
            id={index}
            message={task}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
        <button onClick={handleAddTask}>Добавить</button>
      </div>
    </div>
  );
}
export default Todo;
