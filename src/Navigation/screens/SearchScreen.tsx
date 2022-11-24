import { View, Text } from 'react-native';
import { useState } from 'react';
import { Searchbar, List } from 'react-native-paper';
import debounce from 'lodash.debounce';

// ! fix all the types

const apiKey = 'e5591759270b4ad0c89059888603757d';

const myfetch = (search: string) =>
  debounce(
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.search&album=%27${search}'&api_key=${apiKey}&format=json`,
    ).then((response: any) => response.json()),
    1000,
  );

const myfetch2 = debounce(myfetch, 1000);

export default function SearchScreen() {
  const [fmData, setFmData] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInput = (text: string) => {
    setSearchTerm(text);

    myfetch(text).then((data: any) => {
      setFmData(data);
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
      <Searchbar
        placeholder="Search"
        value={searchTerm}
        onChangeText={handleInput}
      />
      <List.Section>
        <List.Subheader>Résultats</List.Subheader>
        {fmData?.results?.albummatches &&
          fmData.results.albummatches.album.map((album: any) => (
            <List.Item
              key={album.name + album.artist}
              title={album.name}
              description={album.artist}
              // left={(props) => <List.Icon {...props} icon="album" />}
            />
          ))}
      </List.Section>
    </View>
  );
}
