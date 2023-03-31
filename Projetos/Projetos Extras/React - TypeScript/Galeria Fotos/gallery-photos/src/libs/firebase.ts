// .env -> o arquivo fica global e é disponibilizado no GitHub
// .env.local -> o arquivo fica apenas na máquina local, não é disponibilizado no GitHub

import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

//   apiKey: "AIzaSyASbxnUAe1IKg3VHd2GiS2Lagob0bSRO9M",
//   authDomain: "galeria-de-fotos-61100.firebaseapp.com",
//   projectId: "galeria-de-fotos-61100",
//   storageBucket: "galeria-de-fotos-61100.appspot.com",
//   messagingSenderId: "610973843067",
//   appId: "1:610973843067:web:4404ce5a5f8db5f8146cde"

const firebaseApp = initializeApp(firebaseConfig); // inicializando o firebase

export const storage = getStorage(firebaseApp); // utilizando o Storage do firebase