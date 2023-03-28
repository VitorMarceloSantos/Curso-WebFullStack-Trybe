import React, {useState, KeyboardEvent} from 'react'
import '../../style/styles.css'

type Props = {
  handleAddTask: (taskName: string) => void
}

function AddItem({ handleAddTask}: Props) {
    const [inputText, setInputText] = useState('')
    const handleKeyUp = (e:KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
          handleAddTask(inputText);
          setInputText(''); // limpando campo input
        }
    }
  return (
    <div className='containerInput'>
      <div className='plus'>+</div>
      <input 
        type='text'
        placeholder='Adiciona uma tarefa'
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp} // soltar a tecla
      />
    </div>
  )
}

export default AddItem