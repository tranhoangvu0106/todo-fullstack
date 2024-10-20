import AddTodo from './AddTodo';
import './App.css';
import TodoList from './TodoList';

function App() {
  const data = [];
  return (
    <div className='App'>
      <AddTodo />
      <TodoList todos={data} />
    </div>
  );
}

export default App;
