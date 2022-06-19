import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Index from './screens/Index';
import Login from './screens/Login';
import Cadastrar from './screens/Cadastrar';
import Carro from './screens/Carro'
import Moto from './screens/Moto'
import Bicicleta from './screens/Bicicleta'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Carro" component={Carro} />
      <Stack.Screen name="Moto" component={Moto} />
      <Stack.Screen name="Bicicleta" component={Bicicleta} />
    </Stack.Navigator>
  );
}

export default function App({navigation}){
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}