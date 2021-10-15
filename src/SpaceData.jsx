import React from 'react';
import { IonSpinner } from '@ionic/react';
import { useQuery, gql } from '@apollo/client'
import './App.css'

export const ROCKETS = gql`
{
  launchesPast {
    links {
      flickr_images
    }
    mission_name
  }
}
`
const SpaceData = ({inputText}) => {

  const { loading, error, data } = useQuery(ROCKETS)
  if(loading) return <p className="loading"> <IonSpinner className="loading" name="crescent"  /></p>
  if(error) return <p>Elon, we have a problem</p>

  const launches = data.launchesPast.filter(
    launchesPast => launchesPast.links.flickr_images.length > 0 
    && 
    launchesPast.mission_name.toLowerCase().startsWith(inputText.toLowerCase())
  )

  return( 
    <>
    {inputText.length >= 1 ? 
      launches.map((launchesPast, id) => (
        <>
        <div className='wrapper'>
          <ul> 
            <li> 
            <img src={launchesPast.links.flickr_images} alt='rocket' />  
            <p key={id}>{launchesPast.mission_name}</p>
            </li>
          </ul>
        </div>
        </>
        ))
        : ""
        }
    </>
  )
};
export default SpaceData;