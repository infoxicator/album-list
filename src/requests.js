import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';
import gql from 'graphql-tag';

const endpointURL = 'https://graphbrainz.herokuapp.com/';

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({ uri: endpointURL }),
  ]),
  cache: new InMemoryCache(),
});

const albumsQuery = gql`
  query PinkFloyd {
  lookup {
    artist(mbid: "83d91898-7763-47d7-b03b-b92132375c47") {
      name
      lifeSpan {
        begin
        end
      }
      releaseGroups(first: 13, type: ALBUM) {
        edges {
          node {
            id
            title
            firstReleaseDate
            coverArtArchive {
              front
            }
          }
        }
      }
    }
  }
}
`;

export default async function loadAlbums() {
  const { data: { lookup: { artist: { releaseGroups: { edges } } } } } = await client.query({ query: albumsQuery, fetchPolicy: 'no-cache' });
  return edges;
}
