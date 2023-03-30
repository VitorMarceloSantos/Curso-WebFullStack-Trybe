import React from 'react'

type Props = {
  title: string;
  value: number;
}

const verifyColor = (title: string, value: number) => {
  if(title === 'Balanço') {
    if(value > 0) return 'green'
    return 'red'
  }
  return 'black'
}

function ResumeItem({title, value}: Props) {
  return (
    <section className='container-resume-item'>
      <div className='container-resume-title'>{title}</div>
      <div
        className='container-resume-value'
        style={ { color: verifyColor(title, value)}}
      >{`R$ ${value}`}</div>
    </section>
  )
}

export default ResumeItem