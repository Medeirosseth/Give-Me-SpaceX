import React from 'react';
import { useQuery, gql } from '@apollo/client'

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

  const { loading, error, data } = useQuery(ROCKETS)
  if(loading) return <p>'Tis loading...</p>
  if(error) return <p>Elon, we have a problem</p>
  return (
    <>
    <div className="App">
      <h2>SPACE STUFF</h2>
      {data.launchesPast.map((launchesPast, id) => (
        <p key={id}>{launchesPast.mission_name}</p>
      ))}
    </div>
    </>
  );
}

export default App;
