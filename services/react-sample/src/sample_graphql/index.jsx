import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

function SampleGraphql() {
  return (
    <ApolloProvider client={client}>
      <>
        <App />
      </>
    </ApolloProvider>
  );
}

export default SampleGraphql;