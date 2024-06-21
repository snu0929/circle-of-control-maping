import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const PsychoeducationVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        This video explains the Circle of Control concept.
      </Text>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} 
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <Button
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={handlePlayPause}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 35,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  video: {
    width: 320,
    height: 180,
  },
});

export default PsychoeducationVideo;
