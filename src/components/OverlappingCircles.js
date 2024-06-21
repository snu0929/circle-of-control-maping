import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OverlappingCircles = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.noControlCircle]}>
        <Text style={styles.circleLabel}>No Control</Text>
      </View>
      <View style={[styles.circle, styles.semiControlCircle]}>
        <Text style={styles.circleLabel}>Semi-Control</Text>
      </View>
      <View style={[styles.circle, styles.controlCircle]}>
        <Text style={styles.circleLabel}>Control</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noControlCircle: {
    backgroundColor: '#ffb3b3',
    width: 400,
    height: 400,
    borderRadius: 200,
  },
  semiControlCircle: {
    backgroundColor: '#ffe6b3',
    width: 300,
    height: 300,
    borderRadius: 150,
    zIndex: 1,
  },
  controlCircle: {
    backgroundColor: '#b3e6ff',
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: 2,
  },
  circleLabel: {
    fontWeight: 'bold',
  },
});

export default OverlappingCircles;
