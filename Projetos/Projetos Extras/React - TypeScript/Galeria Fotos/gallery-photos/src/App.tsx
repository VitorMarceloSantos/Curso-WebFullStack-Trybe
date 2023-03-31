import React, {useState, useEffect, FormEvent} from 'react'
import './styles/styles.css'
import * as Photos from './service/photos';
import { Photo } from './types/Photo';
import PhotoItem from './components/PhotoItem';

function App() {
  const [load, setLoad] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhoto = async () => {
      // Carregamento - Loading
      setLoad(true);
      setPhotos(await Photos.getAll()); // Esperando receber as fotos do firebase
      setLoad(false);
    }
    getPhoto();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {  // tipando um elemento evento
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;  // typando o file
    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insertPhoto(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result as Photo);
        setPhotos(newPhotoList)
      }
    }
  }

  return (
    <section className='container-initial'>
      <div className='container-area'>
        <div className='container-header'>
          <h1>Galeria de Fotos</h1>
        </div>
        <form className='upload-form' method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name='image' />
          <input type="submit" value='Enviar' />
          {uploading && "Enviando..."}
        </form>
        {/* Loading -> Carregamento */}
        {load && (
          <div className='scrennWarning'>
            <div>Carregando...</div>
          </div>
        )}
        {!load && photos.length > 0 && (
          <div className='photo-list'>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name}/>
            ))}
          </div>
        )}
        {!load && photos.length === 0 && (
           <div className='scrennWarning'>
           <div>Não há fotos cadastradas.</div>
         </div>
        )}
      </div>
    </section>
  )
}

export default App
