import React, {useState, useEffect} from 'react'
import './styles/styles.css'
import {TItem} from './types/items'
import {categories} from './data/categories'
import {items} from './data/items'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';
import TableItems from './components/TableItems'
import InfoArea from './components/InfoArea'

function App() {
  const [list, setList] = useState(items) // já está tipado(TItem), pois o item já foi tipado
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filterList, setFilterList] = useState<TItem[]>([]) // tipando, pois o array está vazio
  const [income, setIcome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth)); // a funçao já está tipada
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseConunt = 0;

    for(let i in filterList){
      if(categories[filterList[i].category].expenses) {
        expenseConunt += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
    }
    setIcome(incomeCount);
    setExpense(expenseConunt);

  }, [filterList]);

  const handleMonthChance = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
   <section className='container-initial'>
    <div className='container-header'>
      <h1 className='title'>Sistema Financeiro</h1>
    </div>
    <div className='container-body'>
      <InfoArea 
        currentMonth={currentMonth}
        onMonthchange={handleMonthChance}
        income={income}
        expense={expense}
      />
      <TableItems list={filterList}/>
    </div>
   </section>
  )
}

export default App
