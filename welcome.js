import React from "react";
import { Image,Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function welcome ({navigation}){
    return(
<View style={styles.container}>
<View style={styles.container2}>
      <Image
          source={{
            uri: 'https://drive.google.com/file/d/1vUs4oVw_5GdbwuxmFWuOSqxdGECIRGMR/view?usp=sharing',
          }}
          style={styles.picture}
        />
        <Text style={styles.textsytle}> Welcome to Workers Track App!</Text>
        <Text style={styles.textstyle2}> What would you like to search? </Text>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
            navigation.navigate("location")
        }}>
      <Text style={styles.btnText}> Found my location</Text>
      </TouchableOpacity> 

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
            navigation.navigate("cct")
          }}>
        <Text style={styles.btnText}> Search for CCT</Text>
      </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
            navigation.navigate("route")
        }}>
      <Text style={styles.btnText}> Create my route to CCT</Text>
      </TouchableOpacity>
      <Text style={styles.smalltext}>Worker Track App By BadNachos</Text>
 </View> 
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: .9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    borderRadius: 10,
  },
  textsytle:{
    padding: 10,
    fontSize: 50,
    
  },
    textstyle2:{
    padding: 20,
    fontSize: 20,
    
  },
  picture:{
    width: 200, 
    height: 200
  },
  button:{
    width: 300,
    marginTop: 20,
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 50,
  },
  btnText:{
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  smalltext:{
    color: "gray",
  fontSize: 10,
  padding: 50,
  }
});