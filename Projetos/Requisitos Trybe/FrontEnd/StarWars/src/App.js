import React from 'react';
import './App.css';
import DataContexProvider from './context/DataContexProvider';
import TablePlanets from './components/TablePlanets';

function App() {
  return (
    <DataContexProvider>
      <main>
        <span>Hello,App!</span>
        <TablePlanets />
      </main>
    </DataContexProvider>
  );
}

export default App;
