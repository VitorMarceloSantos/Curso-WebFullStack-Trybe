import React from 'react'
import { formatCurrentMonth } from '../helpers/dateFilter';
import ResumeItem, {} from './ResumeItem';

type Props = {
  currentMonth: string;
  onMonthchange: (newMonth: string) => void;
  income: number;
  expense: number;
}

function InfoArea({currentMonth, onMonthchange, income, expense}: Props) {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1);
    onMonthchange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    onMonthchange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }
  return (
    <section className='container-info-area'>
      <div className='container-month-area'>
        <div className='monthArrow' onClick={handlePrevMonth}>
          ⬅️
        </div>
        <div className='monthTitle'>
          {formatCurrentMonth(currentMonth)}
        </div>
        <div className='monthArrow' onClick={ handleNextMonth}>
          ➡️
        </div>
      </div>
      <div className='container-resume-area'>
          <ResumeItem title='Receita' value={income}/>
          <ResumeItem title='Despesa' value={expense}/>
          <ResumeItem title='Balanço' value={income-expense}/>
      </div>
    </section>
  )
}

export default InfoArea