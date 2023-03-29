import React from 'react'
import '../styles/styles.css'

function TableItems() {
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

        </tbody>
      </table>
    </section>
  )
}

export default TableItems