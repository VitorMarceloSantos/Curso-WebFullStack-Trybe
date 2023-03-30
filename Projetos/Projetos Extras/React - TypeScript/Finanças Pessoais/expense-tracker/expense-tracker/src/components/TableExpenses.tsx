import React from 'react'
import { categories } from '../data/categories';
import { formatDate } from '../helpers/dateFilter';
import { TItem } from '../types/items'

type Props = {
  item: TItem;
}

function TableExpenses({ item }: Props) {
  return (
    <tr className='container-table-line'>
      <td className='table-colum'>{formatDate(item.date)}</td>
      <div className='container-style-category' style={ { backgroundColor: categories[item.category].color }}>
        <td className='table-colum'>{categories[item.category].title}</td>
      </div>
      <td className='table-colum'>{item.title}</td>
      <div className='container-table-value' style={ { color: categories[item.category].expenses ? 'red' : 'green' }}>
        <td className='table-colum'>{`R$ ${item.value}`}</td>
      </div>
    </tr>
  )
}

export default TableExpenses