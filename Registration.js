import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


const Registration = () =>{
    
    return (
        <View style={styles.body}>
            <Text style={{
                 alignSelf: 'center',
                 fontWeight: 'bold',
                 fontSize: 30,
                 marginBottom: 50,
                 color:'grey'
            }}>
                SIGN UP
            </Text>
            <View style ={styles.input}>
                
                <Text style = {styles.title}>First name</Text>
                <View style = {styles.View}>
                    <TextInput style = {styles.space}/>
                </View>
                <Text style = {styles.title}>Last name</Text>
                <View style = {styles.View}>
                    <TextInput style = {styles.space}/>
                </View>
                <Text style = {styles.title}>Email</Text>
                <View style = {styles.View}>
                    <TextInput style = {styles.space}
                        placeholder='example@gmail.com'
                        placeholderTextColor='#5555'
                    />
                </View>
                <Text style = {styles.title}>Password</Text>
                <View style = {styles.View}>
                  <TextInput style = {styles.space}/>
                 </View>
                <Text style = {styles.title}>Confirm password</Text>
                <View style = {styles.View}>
                  <TextInput style = {styles.space}/>
                </View>  
                <TouchableOpacity style = {styles.Button}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color:'white',
                }}>Sign up</Text>
            </TouchableOpacity>
            </View> 
            <Text style = {{
                 fontSize: 17,
                 color: 'grey',
                 marginTop:15,
            }}>Already have an account?</Text>
            <TouchableOpacity style={styles.Button}>
                <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        color:'white'
                    }}>Login</Text>
            </TouchableOpacity> 
        </View>
    )
}
export default Registration
const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
        fontSize: 17,
        color: 'grey'
    },
    space: {
        width:275,
        fontSize: 20,
        margin:10,
        textAlign: 'center',
    },
    Button: {
        backgroundColor: '#12c6ed',
        height:30,
        width: 100,
        borderRadius:10,
        alignItems: 'center',
        margin: 10,
    },
    View:{
        height:50,
        width:300,
        borderWidth: 1,
        borderColor:'#5555',
        borderRadius: 5,
        marginBottom:10,
    },
  });