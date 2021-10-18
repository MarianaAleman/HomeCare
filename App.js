import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import welcome from './welcome.js';
import cct from './cct.js';
import location from './location.js';
import route from './route.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={welcome}
          options={{ title: 'Welcome!' }}
        />
          <Stack.Screen
          name="location"
          component={location}
          options={{ title: 'Your location' }}
        />
          <Stack.Screen
          name="cct"
          component={cct}
          options={{ title: 'CCT' }}
        />
        <Stack.Screen
          name="route"
          component={route}
          options={{ title: 'Route' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
