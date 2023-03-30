import React from 'react'
import '../styles/styles.css'
import { TItem } from '../types/items'
import TableExpenses, {} from './TableExpenses';

type Props = {
  list: TItem[];
}

function TableItems({ list }: Props) {
  return (
    <section className='container-table'>
      <table>
        <thead>
          <tr>
            <th style={ { width: 100}}>Data</th>
            <th style={ { width: 130}}>Categoria</th>
            <th>Título</th>
            <th style={ { width: 150}}>Valor</th>
          </tr>
        </thead>
        <tbody>
          
          {list.map((item, index) => (
            <TableExpenses
              key={index}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TableItems