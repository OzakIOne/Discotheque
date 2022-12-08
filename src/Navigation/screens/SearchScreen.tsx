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

const apiKey = 'e5591759270b4ad0c89059888603757d';

const myfetch = (search: string) =>
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=${apiKey}&format=json`,
  ).then((res) => res.json());

const Item = ({ title, image }: { title: string; image: string }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
    <Text style={styles.title}>{title}</Text>
    <Button
      icon="plus"
      onPress={() =>
        ToastAndroid.show('Button plus pressed', ToastAndroid.SHORT)
      }
      children=""
    />
  </View>
);

export default function SearchScreen() {
  const [fmData, setFmData] = useState({});

  const renderItem = ({ item }: { item: any }) => (
    <Item title={item.name} image={item.image[0]['#text']} />
  );

  return (
    <View style={styles.container}>
      <Searchbar
        onChangeText={debounce((e) => myfetch(e).then(setFmData), 300)}
      />
      <FlatList
        data={fmData?.results?.albummatches.album}
        renderItem={renderItem}
        keyExtractor={(item) => item.image[0]['#text']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // marginTop: StatusBar.currentHeight,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    // height: 50,
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    // // marginHorizontal: 16,
    // padding: 10,
    flexDirection: 'row',
  },
  title: {
    // fontSize: 24,
  },
});
