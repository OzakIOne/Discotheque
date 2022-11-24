import * as React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Searchbar, List } from 'react-native-paper';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

// ! fix all the types

type Album = {}; // TODO

const getAlbumBySearchTerm = (searchTerm: any): any => {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.search&album=%27${searchTerm}'&api_key=${apiKey}&format=json`,
  ).then((response) => response.json());
};

const queryClient = new QueryClient();

const apiKey = 'e55';

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const albumQuery = useQuery(
    ['albumList', searchTerm],
    () => getAlbumBySearchTerm(searchTerm),
    { enabled: Boolean(searchTerm) },
  );
  const albumList = albumQuery.data?.results?.albummatches?.album ?? [];

  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
        <Searchbar
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {albumList.length > 0 ? <AlbumList albumList={albumList} /> : null}
      </QueryClientProvider>
    </View>
  );
}

const AlbumList = (albumList: any) => {
  return (
    <List.Section>
      <List.Subheader>Résultats</List.Subheader>
      {albumList.map((album: any) => (
        <List.Item
          title={album.name}
          description={album.artist}
          // left={(props) => <List.Icon {...props} icon="album" />}
        />
      ))}
    </List.Section>
  );
};
