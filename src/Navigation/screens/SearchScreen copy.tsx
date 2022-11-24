import * as React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react';
import { Searchbar, List } from 'react-native-paper';

// ! fix all the types

export default function SearchScreen() {
  const [fmData, setFmData] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState<any>('');

  const apiKey = 'e5591759270b4ad0c89059888603757d';

  const handleSearch = (searchTerm: any) => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.search&album=%27${searchTerm}'&api_key=${apiKey}&format=json`,
    )
      .then((response) => response.json())
      .then((json) => {
        setFmData(json);
        // setSearchTerm(searchTerm);
        console.log(json.results.albummatches.album);
        return json.results.albummatches.album;
      });
  };

  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
      <Searchbar
        placeholder="Search"
        value={searchTerm as string}
        onChangeText={(searchTerm) => {
          // setSearchTerm(searchTerm);
          // handleSearch(searchTerm);
          setFmData(handleSearch(searchTerm));
        }}
      />
      <List.Section>
        <List.Subheader>Résultats</List.Subheader>
        {fmData?.results?.albummatches &&
          fmData.results.albummatches.album.map((album: any) => (
            <List.Item
              title={album.name}
              description={album.artist}
              // left={(props) => <List.Icon {...props} icon="album" />}
            />
          ))}
      </List.Section>
    </View>
  );
}
