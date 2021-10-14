import React, { useState } from 'react';
import {  IonPage, IonSearchbar, IonCard,  IonButton, IonInput } from '@ionic/react';

export const SearchBar = ({inputText, setInputText}) => {
  
  const inputTextHandler = (e) => {
    
    setInputText(e.target.value)
      console.log(e.target.value)
  }

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    console.log(inputText, 'It was clicked')
  }
  return (
    <IonPage> 
      <form>
        <IonCard>  
          <IonInput value={inputText} onIonChange={inputTextHandler} placeholder="Enter Input"></IonInput>
        </IonCard>
          <IonButton onIonSubmit={inputSubmitHandler} >Search</IonButton>
      </form>
    </IonPage>
  );
};