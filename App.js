import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ActionPlan from './src/components/ActionPlan';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
     
          <ActionPlan/>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
  },
  scrollContainer: {
    padding: 5,
  },
});
