import React from 'react';
import './App.css'
import { SearchBar } from './Searchbar';
import { IonApp, IonFooter } from '@ionic/react'

function App() {

  return (
    <>
      <IonApp>
        <SearchBar />
        <IonFooter />
      </IonApp>
    </>
  );
}

export default App;