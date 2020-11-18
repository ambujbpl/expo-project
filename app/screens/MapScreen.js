import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import ENV from '../env';

const MapScreen = props => {
  const mapRegion = {
    latitude: ENV.latitude,
    longitude: ENV.longitude,
    latitudeDelta: ENV.latitudeDelta,
    longitudeDelta: ENV.longitudeDelta
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
