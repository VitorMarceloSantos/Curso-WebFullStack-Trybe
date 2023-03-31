import { Photo } from "../types/Photo";
import { storage } from '../libs/firebase';
import {ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage';
import { v4 as createId } from 'uuid'

export const getAll = async () => {
  let list: Photo[] = [];

  // Fazendo Referência ao FireBase
  const imagesFolder = ref(storage, 'images'); // cria referência da pasta
  const photoList = await listAll(imagesFolder); // Retorna todas as fotos da pastas images

  for(let i in photoList.items) {
    let urlPhoto = await getDownloadURL(photoList.items[i]); // gera um link de dowload
    list.push({
      name: photoList.items[i].name,
      url: urlPhoto
    });
  }

  return list;
}

export const insertPhoto = async (file: File) => { // tipando o parâmetro
  if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) { // verifica extensão do arquivo
    let randomName = createId(); // criando nome aleatorio
    let newFile = ref(storage, `images/${randomName}`); // gerando arquivo com nome aleatorio
    let upload = await uploadBytes(newFile, file); // enviado para o firebase
    let photoUrl = await getDownloadURL(upload.ref); // gerando link da foto
    return {
      name: upload.ref.name,
      url:  photoUrl
    } as Photo;
  } else new Error('Tipo de arquivo não permitido.');
}