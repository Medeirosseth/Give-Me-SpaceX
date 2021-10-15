import React, { useState } from 'react';
import './App.css'
import { SearchBar } from './Searchbar';
import {IonFooter} from '@ionic/react'

function App() {
const [inputText, setInputText] = useState();
const [hideShow, setHideShow ] = useState(true);

  return (
    <>
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        hideShow={hideShow}
        setHideShow={setHideShow} />
        <IonFooter/>
    </>
  );
}

export default App;