import React from 'react';
import './App.css';
import DataContexProvider from './context/DataContexProvider';
import TablePlanets from './components/TablePlanets';
// import Intro from './introStarWars/Intro';

function App() {
  return (
    <DataContexProvider>
      <main>
        {/* <span>Hello,App!</span> */}
        {/* <Intro /> */}
        <TablePlanets />
      </main>
    </DataContexProvider>
  );
}

export default App;
