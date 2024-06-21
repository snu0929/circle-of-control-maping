import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import PsychoeducationVideo from './src/components/PsychoeducationVideo'; // Ensure the path is correct
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OverlappingCircles from './src/components/OverlappingCircles';

export default function App() {
  return (
    // <GestureHandlerRootView>  
    <View style={styles.container}>
  
    <OverlappingCircles/>
    </View>
    // </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
