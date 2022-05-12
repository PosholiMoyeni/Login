import React from 'react';
import { View, StyleSheet, TextInput,  TouchableOpacity, Text } from 'react-native';

 const Login = ({setRegistered}) =>{

    function logging(){
        setRegistered(true)
    }

    return(
        <View style = {styles.body}>
            <Text style = {{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 30,
                marginBottom: 50,
                color:'grey'
            }}>LOGIN</Text>
            <View style ={styles.input}>
                
                <Text style = {styles.title}>Email</Text>
                <View style = {styles.View}>
                    <TextInput style = {styles.space}/>
                </View>
                <Text style = {styles.title}>Password</Text>
                <View style = {styles.View}>
                    <TextInput style = {styles.space}/>
                </View>
                <TouchableOpacity>
                    <Text style = {{alignSelf: 'flex-end', color: 'grey'}}>Forgot password?</Text>
                </TouchableOpacity>
            </View>  

            <TouchableOpacity style = {styles.Button}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color:'white',
                }}>Login</Text>
            </TouchableOpacity>
           
            <Text style = {{
                 fontSize: 17,
                 color: 'grey',
                 marginTop:15,
            }}>Need an account?</Text>
            <TouchableOpacity onPress={logging} style={styles.Button}>
                <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        color:'white'
                    }}>Sign up</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        backgroundColor: '#fffff',
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

})
