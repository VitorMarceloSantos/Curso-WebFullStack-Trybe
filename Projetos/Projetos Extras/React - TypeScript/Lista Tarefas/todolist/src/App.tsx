import { useState } from 'react';
import { Item } from './types/item'
import ListItem from './components/listItem/index'
import AddItem from './components/addItem';
import './style/styles.css'

const App = () => {
  const [list, setList] = useState<Item[]>([ // o useState tem como tipagem um array de type(Item)
    { id: 1, name: 'Comprar um pão na padaria', done: false},
    { id: 2, name: 'Comprar um bolo na padaria', done: true}]);
    const handleAddTask = (taskName: string) => {
      let newList = [...list];
      newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
      })
      setList(newList);
    }
  return(
    <div className='containerInitial'>
      <h1>Lista de Tarefas</h1>
      <AddItem handleAddTask={handleAddTask}/>
      {list.map((item, index) => (
        <ListItem key={index} item={item}/> // criando props
      ))}
    </div>
  );
}

export default App;
