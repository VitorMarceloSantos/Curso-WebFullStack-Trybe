import { React, useState } from 'react';
import './App.css';
import DataContexProvider from './context/DataContexProvider';
// import VerifyIntroProvider from './context/VerifyIntroProvider';
import TablePlanets from './components/TablePlanets';
import Header from './components/Header';
import Intro from './introStarWars/Intro';

function App() {
  const [verifyIntro, setVerifyIntro] = useState(false);
  return (
    // <VerifyIntroProvider>
    <DataContexProvider>
      <main>
        {verifyIntro === false ? (
          <Intro setVerifyIntro={ setVerifyIntro } />
        ) : (
          <div>
            <Header />
            <TablePlanets />
          </div>
        )}
      </main>
    </DataContexProvider>
    // </VerifyIntroProvider>
  );
}

export default App;
