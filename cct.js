import React, {useState, useEffect} from 'react';
import MapView , { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function cct (navigation){

  return (
    <View style={styles.container}>

     <MapView style={styles.map} 
      showsUserLocation={true}
      //currentLocation
       provider="google"
        initialRegion={{
          latitude: 53.346194297487, //Set initial latitude of Dublin
          longitude: -6.258982589999437, //Set initial longitude of Dublin
          latitudeDelta: 0, //Set the overview of the map
          longitudeDelta: 0.02, //Set the overview of the map
         }}>



         <Marker //Adding the CCT marker to the map
          coordinate={{
            latitude: 53.346194297487, //Settind CCT latitud
            longitude: -6.258982589999437, //Setting CCT longitude
          }}>  
          <Callout>
            <Text> CCT College </Text>
          </Callout>
        </Marker>

      </MapView>

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});