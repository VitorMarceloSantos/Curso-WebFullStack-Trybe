import React, {useState} from 'react'
import { Item } from '../../types/item' // importando type
// deve criar um type especifico para props, e especifica tudo que vai receber
type Props = {
  item: Item // type item
}

function ListItem({item}: Props) {  // type Props
  const [isChecked, setIsChecked] = useState(item.done)
  const trhoughStyle = { // aplicando estilo
    textDecoration: 'line-through',
  };
  return (
    <div className='containerList'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
      <label
        style={  (isChecked ? trhoughStyle : undefined) } // personalizando estilo
      >{item.name}</label>
    </div>
  )
}

export default ListItem