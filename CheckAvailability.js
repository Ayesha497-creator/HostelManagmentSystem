// components/CheckAvailability.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckAvailability = () => {
  const navigation = useNavigation();
  const availableSeats = 20;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Room Availability</Text>
        <Image 
          source={require('../assets/room.jpg')} 
          style={styles.image}
        />
        <Text style={styles.infoText}>{availableSeats} seats left</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RoomAllotment")}>
          <Text style={styles.buttonText}>Allocate Room</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink', 
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',
  },
  image: {
    width: '80%',
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 20,
    color: 'darkred',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckAvailability;
