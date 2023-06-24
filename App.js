import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import CreateAnimal from './pages/Animals/CreateAnimal';
import AnimalsList from './pages/Animals/AnimalsList';
import DetailAnimal from './pages/Animals/DetailAnimal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // @TODO implémenter le principe des privateRoute pour le component Home
    // possible avec react-native ?
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: `Honnys`}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: `Page de connexion`}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: `Page de création de compte`}}
        />
        <Stack.Screen
          name="CreateAnimal"
          component={CreateAnimal}
          options={{title: `Enregistrer un animal`}}
        />
        <Stack.Screen
          name="AnimalsList"
          component={AnimalsList}
          options={{title: `Mes animaux`}}
        />    
        <Stack.Screen name="DetailAnimal">
          {props => <DetailAnimal {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
