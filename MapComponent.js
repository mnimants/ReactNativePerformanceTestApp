import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends Component {
  render() {
    let universityLocation = {
      latitude: 56.9497151,
      longitude: 24.1145698,
      latitudeDelta: 0.0045,
      longitudeDelta: 0.0045,
    };

    return (
      <MapView
      style={{flex: 1}}
      region={universityLocation}
      />
    );
  }
}
