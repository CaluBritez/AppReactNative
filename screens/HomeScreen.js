import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();
    const imageDog = require('../img/dogGangster.jpg');
    const imageCat = require('../img/catGangster.jpg');

    return (
        <View style={styles.container}>

            <Text style={styles.text}>What is your preference?</Text>

            <Image source={imageDog} style={styles.image}/>
            <TouchableOpacity onPress={() => navigation.navigate('Dogs')} style={styles.button}>
                <Text style={styles.buttonText}>DogsGangster</Text>
            </TouchableOpacity>

            <Image source={imageCat} style={styles.image}/>
            <TouchableOpacity onPress={() => navigation.navigate('Cats')} style={styles.button}>
                <Text style={styles.buttonText}>CatsGangster</Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container take up the whole screen
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20, // Add space between text and image
    },
    image: {
      width: 200, // Adjust width as needed
      height: 200, // Adjust height as needed
      marginBottom: 15,
      marginTop: 15, // Add space between image and button
    },
    button: {
      backgroundColor: 'tomato',
      padding: 10,
      borderRadius: 10,
      width: '50%',
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
    },
  });
export default HomeScreen;