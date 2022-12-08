import { QueryClient, QueryCache, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log('onError', error);
    },
    onSuccess: (data) => {
      console.log('onSuccess', data);
    }
  })
});


function Layout() {
  const { isLoading, isSuccess, isError, data } = useQuery(
    'getUsers',
    () => axios.get(`https://jsonplaceholder.typicode.com/users`),
    {
      onSuccess: (data) => { console.log('onSuccess', data); },
      onError: (error) => { console.log('onError', error); }
    }
  )

  if (isLoading) {
    console.log('is loading');
    return <h1>LOADING</h1>
  }
  console.log(data)
  return (
    <ul>
      {
        (
          data.data.map(value => {
            return (<li>{value.id} {value.name}</li>)
          })
        )
      }
    </ul>
  )

}

function SampleReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>SAMPLE REACT QUERY</h1>
        <Layout />
      </div>
    </QueryClientProvider>
  )
}

export default SampleReactQuery;