import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage';
import Characters from './Pages/Characters';
import Locations from './Pages/Locations';
import Episodes from './Pages/Episodes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}} >
       <Stack.Screen
       name="HomePage"
       component={HomePage}
       />

      <Stack.Screen
      options={{
        headerShown: true, 
        headerStyle:{
          backgroundColor: "black"
        },
        headerTintColor: "orange", 
        headerTitleStyle:{
          fontWeight: "bold", 
          fontSize: 35,
        }
      }}
      name="Characters"
      component={Characters}
      />

      <Stack.Screen
      options={{
        headerShown: true, 
        headerStyle:{
          backgroundColor: "black"
        },
        headerTintColor: "orange", 
        headerTitleStyle:{
          fontWeight: "bold", 
          fontSize: 35,
        }
      }}
      name="Locations"
      component={Locations}
      />

      <Stack.Screen
      options={{
        headerShown: true, 
        headerStyle:{
          backgroundColor: "black"
        },
        headerTintColor: "orange", 
        headerTitleStyle:{
          fontWeight: "bold", 
          fontSize: 35,
        }
      }}
      name="Episodes"
      component={Episodes}
      />

     </Stack.Navigator>

   </NavigationContainer>
  );
}


