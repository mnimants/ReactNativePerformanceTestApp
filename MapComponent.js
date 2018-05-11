import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';

const universityLocation = {
  latitude: 56.9497151,
  longitude: 24.1145698,
  latitudeDelta: 0.045,
  longitudeDelta: 0.045,
};

const nycLocation = {
  latitude: 40.6976637,
  longitude: -74.1197639,
  latitudeDelta: 0.045,
  longitudeDelta: 0.045,
};

const londonLocation = {
  latitude: 51.5287718,
  longitude: -0.2416803,
  latitudeDelta: 0.045,
  longitudeDelta: 0.045,
};

const tokyoLocation = {
  latitude: 35.6735408,
  longitude: 139.5703047,
  latitudeDelta: 0.045,
  longitudeDelta: 0.045,
};

const animationDuration = 1000;
const intervalBetweenJumps = 3000;

const locations = [universityLocation, nycLocation, londonLocation, tokyoLocation];

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.locationIndex = 0;
    this.state = {isJumping: false};
  }

  componentDidMount() {
    this.startJumping();
  }

  startJumping = () => {
    if(this.state.isJumping == true) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.jump();
    }, intervalBetweenJumps);

    this.setState({isJumping: true});
  }

  stopJumping = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.setState({isJumping: false});
    this.locationIndex = 0;
  };

  toggleJumping = () => {
    if(this.state.isJumping == true) {
      this.stopJumping();
    } else {
      this.startJumping();
    }
  };


  jump = () => {
    console.log("Console: " + this.locationIndex);

    let nextIndex = this.locationIndex + 1;

    if(nextIndex == locations.length) {
      clearInterval(this.intervalId);
      this.intervalId = null;

      this.setState({isJumping: false});
      return;
    }

    if (this.mapView) {
      this.mapView.animateToCoordinate(locations[nextIndex], animationDuration)
    }

    this.locationIndex = nextIndex;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={c => this.mapView = c}
          style={{
            flex: 1
          }}
          initialRegion={locations[0]}
          />
          <Button
            onPress={this.toggleJumping}
            title='Toggle Jumping'
            color="#841584"
            />
      </View>
    );
  }
}
