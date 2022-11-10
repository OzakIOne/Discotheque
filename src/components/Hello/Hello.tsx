import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';

const Section: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <Text>{props.name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>{props.children}</Text>
        <Switch></Switch>
      </View>
    </View>
  );
};
export default Section;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
