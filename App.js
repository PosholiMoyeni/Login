import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import Registration from  './Registration';
import Login from './Login';
import { useState, React } from 'react';

export default function App(){

  const [Registered, setRegistered] = useState(true);

  return(
    <View style = {styles.container}>
      {Registered? <Login/>:<Registration setRegistered = {setRegistered}/>}
    </View>
  );kk
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  } 
});