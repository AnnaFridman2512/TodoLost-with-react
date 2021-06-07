import Title from './../Todos/Title'
import TodoList from './../Todos/TodoList';
import './App.css';

function App() {


  const items = [
    {
      text: "Do something",
      completed: false,
    },
    {
      text: "Make something",
      completed: false,
    },
    {
      text: "Sleep",
      completed: true,
    },
  ];
  
  return (
    <div className="App">
    <header className="App-header">
      <Title name="Anna" size="1" />
      <TodoList items={items} />
    </header>
    </div>
  );
}

export default App;
