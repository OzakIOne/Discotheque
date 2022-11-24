import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import AlbumScreen from '../screens/AlbumScreen';
import SearchScreen from '../screens/SearchScreen';
import CustomizeScreen from '../screens/CustomizeScreen';

//Screen names
const albumListScreen = 'Albums';
const searchScreen = 'Search';
const customizeScreen = 'Cutsomize';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={albumListScreen}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === albumListScreen) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === searchScreen) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn === customizeScreen) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'pink',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
              fontSize: 10,
              paddingBottom: 10,
            },
            tabBarStyle: [
              {
                display: 'flex',
              },
              null,
            ],
          })}
        >
          <Tab.Screen name={albumListScreen} component={AlbumScreen} />
          <Tab.Screen name={searchScreen} component={SearchScreen} />
          <Tab.Screen name={customizeScreen} component={CustomizeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainContainer;
