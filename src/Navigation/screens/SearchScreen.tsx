import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { useState } from 'react';
import { Searchbar, Button } from 'react-native-paper';
import debounce from 'lodash.debounce';
import DiscArray from '../../components/Data/Data';
import Disc from '../../components/Disc/Disc';

const apiKey = 'e5591759270b4ad0c89059888603757d';

const myfetch = (search: string) =>
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${search}&api_key=${apiKey}&format=json`,
    // `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${apiKey}&format=json`,
  ).then((res) => res.json());

const Item = ({ title, image }: { title: string; image: string }) => (
  <View style={styles.item}>
    <Image
      source={{
        uri: image || 'https://pngimg.com/uploads/shrek/shrek_PNG3.png',
      }}
      style={{ width: 50, height: 50 }}
    />
    <Text>{title}</Text>
    <Button
      icon="plus"
      onPress={() => {
        ToastAndroid.show('Album added', ToastAndroid.SHORT);
        DiscArray.push(
          new Disc(
            image || 'https://pngimg.com/uploads/shrek/shrek_PNG3.png',
            title,
            'Artist',
            'Custom',
            ['Oui'],
            1900,
          ),
        );
      }}
      children="Add"
    />
  </View>
);

type Item = {
  name: string;
  image: Array<{ '#text': string }> | undefined;
};

export default function SearchScreen() {
  const [fmData, setFmData] = useState({});

  const renderItem = ({ item }: { item: Item }) => (
    <Item title={item.name} image={item?.image[1]?.['#text']} />
  );

  return (
    <View style={styles.container}>
      <Searchbar
        onChangeText={debounce((e) => myfetch(e).then(setFmData), 800)}
      />
      <FlatList
        data={fmData?.topalbums?.album}
        renderItem={renderItem}
        keyExtractor={(item) => item?.image[0]?.['#text'] + item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    marginVertical: 4,
    flexDirection: 'row',
  },
});
