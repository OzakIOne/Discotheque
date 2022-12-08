import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import arrangedData from "../../components/Data/ArrangedData";

const Item = ({ artist, data }: { artist: any; data: any }) => (
  <View style={styles.item}>
    <Text style={styles.artist}>{artist}</Text>
    <Image source={{ uri: data.image }} style={{ width: 50, height: 50 }} />
    <Text>{data.year}</Text>
  </View>
);

export default function AlbumScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <Item artist={item.artist} data={item.data[0]} />
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={arrangedData}
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
  artist: {
    // fontSize: 24,
  },
});
