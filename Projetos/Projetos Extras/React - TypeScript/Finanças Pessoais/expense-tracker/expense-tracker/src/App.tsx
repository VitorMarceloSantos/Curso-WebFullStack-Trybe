import React, {useState, useEffect} from 'react'
import './styles/styles.css'
import {TCategories} from './types/categories'
import {TItem} from './types/items'
import {categories} from './data/categories'
import {items} from './data/items'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';
import TableItems from './components/TableItems'

function App() {
  const [list, setList] = useState(items) // já está tipado(TItem), pois o item já foi tipado
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filterList, setFilterList] = useState<TItem[]>([]) // tipando, pois o array está vazio

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth)); // a funçao já está tipada
  }, [list, currentMonth]);

  return (
   <section className='container-initial'>
    <div className='container-header'>
      <h1 className='title'>Sistema Financeiro</h1>
    </div>
    <div className='container-body'>

      {/* Area de Informações */}

      {/* Area de Inserção */}

      <TableItems />

    </div>
   </section>
  )
}

export default App
