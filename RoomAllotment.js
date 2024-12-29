import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Assuming you've already set up Firebase (import db from firebase configuration)
const RoomAllotment = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    department: "",
    contact: "",
    studentId: "",
    email: "",
    address: "",
  });

  // Firebase handling room allotment
  const handleAllotment = async () => {
    try {
      await db.collection('roomAllotments').add(form); // Add data to Firebase
      Alert.alert("Room Allotment Successful", "Your room has been allotted.", [
        { text: "OK", onPress: () => navigation.navigate("ViewDetails") },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to allot room. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Room Allotment Form</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/all.jpg')} 
          style={styles.image}
        />
        {Object.keys(form).map((key) => (
          <TextInput
            key={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            placeholderTextColor="#888"
            style={styles.input}
            onChangeText={(text) => setForm({ ...form, [key]: text })}
          />
        ))}
        <TouchableOpacity style={styles.button} onPress={handleAllotment}>
          <Text style={styles.buttonText}>Submit</Text>
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
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'teal',
  },
  image: {
    width: '80%',
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
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
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RoomAllotment;
