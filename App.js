import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Entypo';

import MapComponent from './MapComponent';

class MapScreen extends React.Component {
  render() {
    return (
      <MapComponent/>
    );
  }
}


export default TabNavigator(
  {
    Map: { screen: MapScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Map') {
            iconName = `map`;
          }

          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      })
  }
);
