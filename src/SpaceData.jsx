import React from 'react';
import { IonSlides, IonSlide, IonContent, IonSpinner } from '@ionic/react';
import { useQuery, gql } from '@apollo/client'

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

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
const SpaceData = () => {

  const { loading, error, data } = useQuery(ROCKETS)
  if(loading) return <p className="loading"> <IonSpinner name="crescent" /></p>
  if(error) return <p>Elon, we have a problem</p>

    return( 
      <>

      {data.launchesPast.map((launchesPast, id) => (
        <>
        <p key={id}>{launchesPast.mission_name}</p>
        <img key={id} src={launchesPast.links.flickr_images} alt='rocket' />        
        </>
        ))}

      </>
    )
};


export default SpaceData;