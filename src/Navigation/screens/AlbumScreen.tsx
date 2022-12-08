import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import dataByGenre from "../../components/Data/DataByGenre";
import dataByArtist from "../../components/Data/DataByArtist";
import dataByYear from "../../components/Data/DataByYear";

const Item = ({ element, data }: { element: any; data: any }) => (
  <View style={styles.item}>
    <Text style={styles.element}>{element}</Text>
    <Image source={{ uri: data.image }} style={{ width: 50, height: 50 }} />
    <Text>{data.year}</Text>
  </View>
);

export default function AlbumScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <Item element={item.element} data={item.data[0]} />
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        //TODO faire un switch ??? Sur l'appel du toggle
        // data={dataByYear}
        // data={dataByGenre}
        data={dataByArtist}
        renderItem={renderItem}
        keyExtractor={(item) => item.idx}
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
    alignItems: "center",
    marginVertical: 4,
    // // marginHorizontal: 16,
    // padding: 10,
    flexDirection: "row",
  },
  element: {
    // fontSize: 24,
  },
});
