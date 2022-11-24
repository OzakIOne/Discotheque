import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useState } from 'react';

interface Props {
  title: string;
  name: string;
  children: string;
}

const Section: React.FC = ({ title, name, children }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>{children}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        ></Switch>
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
