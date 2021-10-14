import React, { useState } from 'react';
import './App.css'
import { SearchBar } from './Searchbar';
import { useQuery, gql } from '@apollo/client'

import { IonCard, IonContent, IonPage, IonSpinner } from '@ionic/react';
import SpaceData from './SpaceData';


function App() {
const [inputText, setInputText] = useState();

  return (
    <>
    <div className="container">
        <div className='left'>
            <SearchBar
            inputText={inputText}
            setInputText={setInputText}
            />
          </div>
          <div className="right">
            <div className="wrapper"> 
              <SpaceData/>
          </div>
        </div>
    </div>
    </>
  );

}

export default App;