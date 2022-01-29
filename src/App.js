import "./App.css";
import Todo from "./to-do";

function App(props) {
  return (
    <div className="App">
      <Todo
        listData={props.store.state.listData}
        listCase={props.store.listCase}
      />
    </div>
  );
}

export default App;
