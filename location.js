//import * as React from 'react';
import React, {useState, useEffect} from 'react';
import MapView , { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function location (navigation) {

  const [location, setLocation] = useState({coords:{latitude:0, longitude: 0}}); //set the user location
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // ask permission to show user location
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); // get the user location 
      console.log(location); //Printing the data that we get from the user in the console, to know the 
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View style={styles.container}>

    
     <MapView style={styles.map} 
      //showsUserLocation={true}
       provider="google"
        initialRegion={{
          latitude: 53.346194297487,  //Set initial latitude of Dublin
          longitude: -6.258982589999437, //Set initial longitude of Dublin
          latitudeDelta: 0.02, //Set the overview of the map
          longitudeDelta: 0.02, //Set the overview of the map
         }}>

        <Marker   //Marker that catch the user location
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />



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