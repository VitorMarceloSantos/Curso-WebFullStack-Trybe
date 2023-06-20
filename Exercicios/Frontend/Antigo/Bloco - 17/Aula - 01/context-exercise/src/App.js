import React, { Component } from 'react'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import DataContexProvider from './components/DataContexProvider'


class App extends Component {
  render() {
    return (
      <DataContexProvider> {/*Engloba todos os componentes que vão fazer uso do context. */}
        <main>
          <HeaderComponent/>
          <FooterComponent/>
        </main>
      </DataContexProvider>
      
    )
  }
}

export default App
