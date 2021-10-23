
import React, {useState, useEffect} from 'react';
import MapView , { Marker, Callout} from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';



export default function route (navigation) {

  // code reference https://github.com/bramus/react-native-maps-directions
  
  const [coordinates] = useState([
    {
      latitude: 53.346194297487,  // origin Cct
      longitude: -6.258982589999437,
    },
    {
      latitude: 53.334415329, // destination address Aviva Stadium 
      longitude: -6.223665772,
    },
  ])



  const GOOGLE_MAPS_APIKEY = 'AIzaSyCfbGYNkjx7tbjson8BWmK4hhaQzhD7PDA'; // google API

  return (

    <View style={styles.container}>
    
     <MapView style={styles.map} 
      //showsUserLocation={true}
       provider="google"
        initialRegion={{
          latitude: 53.350140, //Set initial latitude of Dublin
          longitude: -6.266155, //Set initial longitude of Dublin
          latitudeDelta: 0.02, //Set the overview of the map
          longitudeDelta: 0.02, //Set the overview of the map
         }}> 
         
        <MapViewDirections
        lineDashPattern={[2]} // draw a line route
        origin={coordinates[0]} // The origin location to start routing from
        destination={coordinates[1]} //the destination routing to 
        apikey={GOOGLE_MAPS_APIKEY} // google API direction
        strokeColor={'black'} // color
        strokeWidth={3} // line width 
        precision="high"
        />

        <Marker coordinate={coordinates[0]}>
        <Callout>
            <Text> CCT College </Text>
        </Callout> 
        </Marker>
        <Marker coordinate={coordinates[1]}>
        <Callout>
            <Text> Aviva Stadium</Text>
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