import React, { useState } from 'react';
import SpaceData from './SpaceData'
import {  IonCard, IonInput } from '@ionic/react';
import './App.css'

export const SearchBar = () => {
  const [inputText, setInputText] = useState('')

  const inputTextHandler = (e) => {    
    setInputText(e.target.value)
  }

  return (
    <>
      <div className="container">
        <div className='left'>
          <IonCard>
            <IonInput type="text" value={inputText} onIonChange={inputTextHandler}  placeholder={"Enter Input " + inputText}></IonInput>   
          </IonCard> 
        </div>
        <div className="right"> 
        <SpaceData 
        inputText={inputText} />
        </div>
      </div>
    </>
  );
};