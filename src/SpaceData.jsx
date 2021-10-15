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
const SpaceData = ({inputText, showHide, setHideShow}) => {

  const { loading, error, data } = useQuery(ROCKETS)
  if(loading) return <p className="loading"> <IonSpinner className="loading" name="crescent"  /></p>
  if(error) return <p>Elon, we have a problem</p>

  const launches = data.launchesPast.filter(
    launchesPast => launchesPast.links.flickr_images.length > 0 
    && 
    launchesPast.mission_name.includes(inputText)
  )

  return( 
    <>
      <div className={'imgContainer ' + (showHide && "active"  )}> 
        {data ? 
          launches.map((launchesPast, id) => (
          <>
            <ul> 
              <li> 
                <p key={id}>{launchesPast.mission_name}</p>
                <img key={id} src={launchesPast.links.flickr_images} alt='rocket' />  
              </li>
            </ul>
          </>
          ))
          : <h1>nuthin'</h1>
        }
      </div>
    </>
  )
};
export default SpaceData;