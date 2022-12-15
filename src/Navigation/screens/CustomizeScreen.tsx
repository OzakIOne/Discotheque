import { useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DiscArray from '../../components/Data/Data';
import Disc from '../../components/Disc/Disc';

export default function CustomizeScreen() {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [tracks, setTracks] = useState([]);
  const [year, setYear] = useState(0);

  return (
    <View>
      <TextInput
        label="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        label="Artist"
        value={artist}
        onChangeText={(text) => setArtist(text)}
      />
      <TextInput
        label="Genre"
        value={genre}
        onChangeText={(text) => setGenre(text)}
      />
      <TextInput
        label="Year"
        value={year.toString()}
        onChangeText={(text) => setYear(parseInt(text))}
      />
      <TextInput
        label="Image URL"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
      />
      <TextInput
        label="Track 1, Track 2, ..."
        value={tracks.join(', ')}
        onChangeText={(text) => setTracks(text.split(','))}
      />
      <Button
        mode="contained"
        onPress={() => {
          DiscArray.push(
            new Disc(imageUrl, title, artist, genre, tracks, year),
          );
          ToastAndroid.show('Button Save pressed', ToastAndroid.SHORT);
        }}
      >
        Save
      </Button>
    </View>
  );
}
