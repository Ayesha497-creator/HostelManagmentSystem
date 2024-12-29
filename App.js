import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './components/Login';
import Register from './components/Register';
import CheckAvailability from './components/CheckAvailability';
import RoomAllotment from './components/RoomAllotment';
import ViewDetails from './components/ViewDetails';
import HomePage from './components/HomePage';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'CheckAvailability') {
          iconName = 'bed-outline';
        } else if (route.name === 'RoomAllotment') {
          iconName = 'key-outline';
        } else if (route.name === 'ViewDetails') {
          iconName = 'information-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="CheckAvailability" component={CheckAvailability} options={{ headerShown: false }} />
    <Tab.Screen name="RoomAllotment" component={RoomAllotment} options={{ headerShown: false }} />
    <Tab.Screen name="ViewDetails" component={ViewDetails} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: true,
      drawerActiveTintColor: 'green',
      drawerInactiveTintColor: 'gray',
    }}
  >
    <Drawer.Screen name="Home" component={HomePage} options={{ title: 'Home', headerShown: true }} />
    <Drawer.Screen name="CheckAvailability" component={CheckAvailability} />
    <Drawer.Screen name="RoomAllotment" component={RoomAllotment} />
    <Drawer.Screen name="ViewDetails" component={ViewDetails} />
  </Drawer.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
      <Stack.Screen name="HomePage" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
