import React from "react";
import { StyleSheet, Image, ScrollView } from 'react-native';

const CatsScreen = () => {
    const imageCat1 = require('../img/cat1.jpg');
    const imageCat2 = require('../img/cat2.jpg');
    const imageCat3 = require('../img/cat3.jpg');
    const imageCat4 = require('../img/cat4.jpg');
    const imageCat5 = require('../img/cat5.jpg');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={imageCat1} style={styles.image}/>
            <Image source={imageCat2} style={styles.image}/>
            <Image source={imageCat3} style={styles.image}/>
            <Image source={imageCat4} style={styles.image}/>
            <Image source={imageCat5} style={styles.image}/>
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

export default CatsScreen;