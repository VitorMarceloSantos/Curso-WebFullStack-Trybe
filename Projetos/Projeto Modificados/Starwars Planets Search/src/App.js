import React from 'react';
import './App.css';
import DataContexProvider from './context/DataContexProvider';
import TablePlanets from './components/TablePlanets';
import Header from './components/Header';
import Intro from './introStarWars/Intro';

function App() {
  return (
    <DataContexProvider>
      <main>
        <Intro />
        {/* <Header />
        <TablePlanets /> */}
      </main>
    </DataContexProvider>
  );
}

export default App;
