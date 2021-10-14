import React, { useState } from 'react';
import SpaceData, { ROCKETS } from './SpaceData'
import {  IonButton, IonCard, IonFooter, IonInput } from '@ionic/react';
import './App.css'
import { useQuery } from '@apollo/client';

export const SearchBar = ({showHide, setShowHide}) => {
  const [inputText, setInputText] = useState('')

  const { data } = useQuery(ROCKETS)

  const inputTextHandler = (e) => {    
    setInputText(e.target.value)
  }

  // const getFilteredInput = (inputText, data) => {
  //   if(!inputText) {
  //     return data
  //   }
  //   return data.filter(data => data.mission_name.includes(inputText))
  // }

  return (
    <>
      <div className="container">
        <div className='left'>
          <IonCard>
            <IonInput type="text" value={inputText} onIonChange={inputTextHandler}  placeholder={"Enter Input " + inputText}></IonInput>   
          </IonCard> 
          <IonButton onIonClick={()=>setShowHide(true)}>Search</IonButton>
        </div>
        <div className="right"> 
          <SpaceData 
          showHide={showHide}
          setShowHide={setShowHide}
          inputText={inputText} />
        </div>
      </div>
    </>
  );
};