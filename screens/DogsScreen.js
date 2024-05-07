import React from "react";
import { StyleSheet, Image, ScrollView } from 'react-native';

const DogsScreen = () => {
    const imageDog1 = require('../img/dog1.jpg');
    const imageDog2 = require('../img/dog2.jpg');
    const imageDog3 = require('../img/dog3.jpg');
    const imageDog4 = require('../img/dog4.jpg');
    const imageDog5 = require('../img/dog5.jpg');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={imageDog1} style={styles.image}/>
            <Image source={imageDog2} style={styles.image}/>
            <Image source={imageDog3} style={styles.image}/>
            <Image source={imageDog4} style={styles.image}/>
            <Image source={imageDog5} style={styles.image}/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container take up the whole screen
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically
    },
    image: {
      width: 250, // Adjust width as needed
      height: 250, // Adjust height as needed
      marginBottom: 15,
      marginTop: 15, // Add space between image and button
    },
    
  });

export default DogsScreen;