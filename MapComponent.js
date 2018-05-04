import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

const universityLocation = {
  latitude: 56.9497151,
  longitude: 24.1145698,
  latitudeDelta: 0.0045,
  longitudeDelta: 0.0045,
};

const nycLocation = {
  latitude: 40.6976637,
  longitude: -74.1197639,
  latitudeDelta: 0.0045,
  longitudeDelta: 0.0045,
};

const londonLocation = {
  latitude: 51.5287718,
  longitude: -0.2416803,
  latitudeDelta: 0.0045,
  longitudeDelta: 0.0045,
};

const tokyoLocation = {
  latitude: 35.6735408,
  longitude: 139.5703047,
  latitudeDelta: 0.0045,
  longitudeDelta: 0.0045,
};

const locations = [universityLocation, nycLocation, londonLocation, tokyoLocation];

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { locationIndex: 0 };
  }

  startJumping = () => {
    console.log("Console: " + this.state.locationIndex);

    let nextIndex = this.state.locationIndex + 1;

    if(nextIndex == locations.length) {
      nextIndex = 0;
    }

    this.setState({ locationIndex: nextIndex });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{
            flex: 1
          }}
          region={locations[this.state.locationIndex]}
          />
          <Button
            onPress={this.startJumping}
            title="Start jumping"
            color="#841584"
            />
      </View>
    );
  }
}
