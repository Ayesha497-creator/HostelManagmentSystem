import React from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    // Placeholder for actual registration logic
    // If registration is successful, navigate to HomePage
    navigation.navigate('HomePage');
  };

  return (
     <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <Image 
            source={require( '../assets/logo.jpg')} 
          style={styles.image}
        />
      <TextInput style={styles.input} placeholder="name" />
        <TextInput style={styles.input} placeholder="Father name"/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry/>
      <TextInput style={styles.input} placeholder="Email" />
       <TextInput style={styles.input} placeholder="Contact number" />
      <TextInput style={styles.input} placeholder=" Department"/>
      <Button title="Register" onPress={handleRegister} />
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'pink',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'ghostwhite',
  },
   image: {
    width: '80%',
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});

export default Register;
