import { useState } from 'react';
import { Item } from './types/item'
const App = () => {
  const [list, setList] = useState<Item[]>([ // o useState tem como tipagem um array de type(Item)
    { id: 1, name: 'Comprar um pão na padaria', done: false},
    { id: 2, name: 'Comprar um bolo na padaria', done: false}]);
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      {list.map((item, index) => (
        <div>{index} - {item.name}</div>
      ))}
    </div>
  );
}

export default App;
