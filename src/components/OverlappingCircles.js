import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const { width, height } = Dimensions.get('window');

const initialItems = [
  { id: '1', text: 'Your thoughts and attitude' },
  { id: '2', text: 'Your effort and actions' },
  { id: '3', text: 'Your time and schedule' },
  { id: '4', text: 'Your health and well-being' },
  { id: '5', text: 'Physical appearance' },
  { id: '6', text: 'Mood' },

];

const OverlappingCircles = () => {
  const [data, setData] = useState(initialItems);

  const renderItem = ({ item, drag }) => (
      <Text style={styles.item} onTouchStart={drag}>{item.text}</Text>
    
  );

  const onDragEnd = ({ data }) => {
    setData(data);
  };

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

     
        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onDragEnd={onDragEnd}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:35
  },
  circle: {
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  noControlCircle: {
    backgroundColor: '#ffb3b3',
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  semiControlCircle: {
    backgroundColor: '#ffe6b3',
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: 1,
  },
  controlCircle: {
    backgroundColor: '#b3e6ff',
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 2,
  },
  circleLabel: {
    fontWeight: 'bold',
  },
//   listContainer: {
//     position: 'absolute',
//     bottom: 50,
//     width: '100%',
//   },
  item: {

    borderRadius: 10,
    marginBottom: 10,
    zIndex: 1,
  },
});

export default OverlappingCircles;
