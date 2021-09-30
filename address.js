import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
      
    <View style={styles.container}>
        <div>
          
        </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext:{
    fontFamily: 'roboto',
    color: 'gray',
    
  },
  picture: { 
    width: 200, 
    height: 200
  },
  boton:{
    width: 100,
    height: 50,
  },
});
