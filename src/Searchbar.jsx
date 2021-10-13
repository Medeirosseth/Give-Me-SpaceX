import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonCard, IonItemDivider, IonButton } from '@ionic/react';

export const SearchBar = () => {

  const [text, setText] = useState();

  return (
    <form>
      <IonCard>  
        <IonInput value={text} placeholder="Enter Input"></IonInput>
      </IonCard>
        <IonButton>Search</IonButton>
    </form>
  );
};