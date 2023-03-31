import React from 'react'

type Props = {
  name: string;
  url: string;
}

function PhotoItem({name, url}: Props) {
  return (
    <div className='container-photo'>
      <img src={url} alt={name} />
      {name}
    </div>
  )
}

export default PhotoItem