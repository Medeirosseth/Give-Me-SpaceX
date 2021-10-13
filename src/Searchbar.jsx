import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonCard, IonItemDivider, IonButton } from '@ionic/react';

export const SearchBar = ({inputText, setInputText}) => {

  const inputTextHandler = (event) => {
    event.preventDefault();
      console.log(event.target.value)
  }

  return (
    <form>
      <IonCard>  
        <IonInput onIonChange={inputTextHandler} placeholder="Enter Input"></IonInput>
      </IonCard>
        <IonButton>Search</IonButton>
    </form>
  );
};