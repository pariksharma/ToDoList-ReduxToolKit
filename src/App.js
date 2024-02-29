import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import { useSelector } from 'react-redux';

function App() {

  const color = useSelector(state => state.colorReducer);
  console.log(color);
  
  return (
    <div className="App" style={{backgroundColor: `${color.color}`}} >
      <h1>ToDo List with Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
