import { useQuery, gql, NetworkStatus } from '@apollo/client'

/* START SAMPLE_1 *****************************************************************/
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_LOCATIONS, {
    notifyOnNetworkStatusChange: true,
  });
  
  if (networkStatus === NetworkStatus.refetch) return <>REFECTH</>
  if (loading) return <>LOADING</>;
  if (error) return <>ERROR: {error.message} </>;

  return (
    <>
    <button onClick={() => refetch() }>REFECTH</button>
    {
      data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt="location-reference" src={`${photo}`} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))
    }
    </>
  );
}
/* END SAMPLE_1 *****************************************************************/

/* START SAMPLE_2 *****************************************************************/
const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  return (
    <select name='dog' onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}
/* END SAMPLE_2 *****************************************************************/

/* START SAMPLE_3 *****************************************************************/
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed }
  });

  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
/* END SAMPLE_3 *****************************************************************/

/* START SAMPLE_4 *****************************************************************/
function DogPhoto_v2({ bread }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { bread },
    pollInterval: 500
  });

  if (loading) return null;
  if (error) return `ERROR: ${error.message}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
/* END SAMPLE_4 *****************************************************************/

/* START SAMPLE_5 *****************************************************************/
function DogPhoto_v3({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      {/* Click button and notice that the UI updates with a new dog photo! */}
      <button onClick={() => refetch({ breed: 'new_dog_breed' })}>
        Refetch new breed!
      </button>
    </div>
  );
}
/* END SAMPLE_5 *****************************************************************/

/* START SAMPLE_3 *****************************************************************/
/* END SAMPLE_3 *****************************************************************/


function DogDisplay() {
  const onSelected = () => {

  }

  return (
    <>
      <Dogs onDogSelected={onSelected} />
    </>
  )
}


function App() {

  return (
    <>
      <h1>SAMPLE GRAPHQL APP</h1>
      <DisplayLocations />
      {/* <DogDisplay /> */}
    </>
  );
}
export default App;