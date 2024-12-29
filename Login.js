import React from 'react';
import { View, Text, TextInput, Button, StyleSheet ,TouchableOpacity,Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Placeholder for actual login logic
    // If login is successful, navigate to HomePage
    navigation.navigate('HomePage');
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
        <Text style={styles.heading}>GIRLS HOSTEL💐</Text>
      <Text style={styles.heading}>Login</Text>
<Image 
          source={require( '../assets/logo.jpg')} 
          style={styles.image}
        />
      <TextInput style={styles.input} placeholder="Student id" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
    </View>
       </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:'',
    padding: 16,
    backgroundColor: 'pink', 
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
     color: 'brown',
      fontWeight: 'bold',
  },
  image: {
    width: '70%',
    height: 350,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 10,
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
   linkText: {
    color: 'brown',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
 
});

export default Login;
