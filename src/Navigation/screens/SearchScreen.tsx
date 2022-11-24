import * as React from 'react';
import { View, Text } from 'react-native';
import { useState, useDeferredValue } from 'react';
import { Searchbar, List } from 'react-native-paper';
import useThrottle from 'react-use/lib/useThrottle';
import useThrottleFn from 'react-use/lib/useThrottleFn';

// ! fix all the types

export default function SearchScreen() {
  const [fmData, setFmData] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState<String>('');

  const apiKey = 'e5591759270b4ad0c89059888603757d';

  const handleInput = (text: string) => setSearchTerm(text);

  const handleFetch = async () => {
    console.log('FETCHING');

    const rawData = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.search&album=%27${throttleValue}'&api_key=${apiKey}&format=json`,
    );
    const json = await rawData.json();
    setFmData(json);
  };
  const throttleValue = useThrottleFn(handleFetch, 500, []);

  const handleFetch2 = useThrottleFn(
    async () => {
      console.log('FETCHING');

      const rawData = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&album=%27${throttleValue}'&api_key=${apiKey}&format=json`,
      );
      const json = await rawData.json();
      setFmData(json);
    },
    500,
    [],
  );

  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
      <Searchbar
        placeholder="Search"
        value={searchTerm as string}
        onChangeText={handleFetch2}
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
