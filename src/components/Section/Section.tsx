import { Text, StyleSheet, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

interface Props {
  title: String;
  children: String;
}

const Section = ({ title, children }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}
        >
          {children}
        </Text>
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  sectionContainer: {},
  sectionTitle: {},
  sectionDescription: {},
});
