import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import DiscArray from '../../components/Data/Data';
import sortDiscs from '../../components/Data/Utils';

const Item = ({ element }: any) => (
  <View style={styles.container}>
    <Text style={styles.subcategory}>{element.type}</Text>
    {element.value.map((item: any, index: number) => (
      <View key={index} style={styles.item}>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <View>
          <Text style={styles.artist}>{item.artist}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    ))}
  </View>
);

export default function AlbumScreen() {
  const [discs, setDiscs] = useState(sortDiscs(DiscArray, 'year'));
  const [sorttype, setSorttype] = useState('year');

  const renderItem = ({ item }: any) => <Item element={item} />;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={discs}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
      />
      <RadioButton.Group
        onValueChange={(sortValue) => {
          setSorttype(sortValue);
          setDiscs(sortDiscs(DiscArray, sortValue));
        }}
        value={sorttype}
      >
        <RadioButton.Item label="Year" value="year" />
        <RadioButton.Item label="Genre" value="genre" />
        <RadioButton.Item label="Artist" value="artist" />
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcategory: {
    fontSize: 24,
    marginTop: 10,
  },
  artist: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
