import React, { useState } from 'react';
import './App.css'
import { SearchBar } from './Searchbar';
import { useQuery, gql } from '@apollo/client'

import { IonApp, IonCard, IonInput, Ionloading, IonPage, IonSpinner } from '@ionic/react';

const ROCKETS = gql`
{
  launchesPast {
    id
    mission_name
    rocket {
      rocket_name
      rocket {
        active
      }
    }
  }
}
`

function App() {
const [inputText, setInputText] = useState();

  const { loading, error, data } = useQuery(ROCKETS)
  if(loading) return <p className="loading"> <IonSpinner name="crescent" /></p>
  if(error) return <p>Elon, we have a problem</p>
  return (
    <>
    <IonPage> 
    <section class="container">
        <div className='left'>
          <div className='insideLeft'>
            <SearchBar
            inputText={inputText}
            setInputText={setInputText}
            />
          </div>
        </div>
        <div className='right'>
          <div className='insideRight'>
            {data.launchesPast.map((launchesPast, id) => (
              <p key={id}>{launchesPast.mission_name}</p>
            ))}
          </div>
        </div>
    </section>
    </IonPage>
    </>
  );
}

export default App;
