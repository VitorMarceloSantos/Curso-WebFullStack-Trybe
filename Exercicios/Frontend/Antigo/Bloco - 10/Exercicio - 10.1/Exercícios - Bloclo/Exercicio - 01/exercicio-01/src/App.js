import './App.css';


const Task = (value) => { 
  return (
    <li> { value } </li>
  );
}

function App() {
  const array = ['HTML', 'CSS', 'JavaScript'];
  return (
    <div className="App">
      { Task('Aprendendo Reack') }
      { array.map((skill) => Task(skill) ) }
    </div>
  );
}

export default App;
