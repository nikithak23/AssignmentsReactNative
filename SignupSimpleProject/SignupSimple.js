/*
Signup Form , which will have fields as follows
1. Name : Accept only 20 characters no digits or special chars
2. Mobile: Accept only 10 digits no characters
3. Email: Accept only valid Email
4. Password: accept 5 characters only
4. Confirm Pass : Accept 5 characters only and must match Password

* Both the password must be hidden

On Login Button pressed , if form is valid display text below Login Success. Hello {Name} else display error against that particular TextInput
*/

import React, { Component, useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
 
 
const signupSimple= ()=> {
    
    const [username, setUsername]=useState ('');
    const [number, setNumber]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPass, setConfirmpass]= useState('');
    const [isValid, setIsvalid]= useState(false);
    
    
  const validation=() =>{
    if(username&& email&&number&&password&&confirmPass)
    {
      setIsvalid(true);
    }
};


    return (
        <View style={styles.main}>
          <Text style={styles.header}>Sign-Up</Text>



          <Text style={styles.description}>Name</Text>
            <TextInput style={styles.input}
                placeholder="Enter your name"
                onChangeText={(text) => setUsername(text)}
            />
            <View>
              {(/[0-9]/.test(username)||(username.length>=20)?
                <Text style={styles.alert}>Name must contain only characters</Text>:<Text></Text>)
              }
            </View>
        



          <Text style={styles.description}>Mobile</Text>
            <TextInput style={styles.input}
                placeholder="Enter your phone number"
                onChangeText={(text) => setNumber(text)}
            />
            <View>
              {(/[a-z]/.test(number)||/[A-Z]/.test(number)||(number.length>=11)?
                <Text style={styles.alert}>Mobile number must contain 10 digits only</Text>:<Text></Text>)
              }
            </View>




            <Text style={styles.description}>Email</Text>
            <TextInput style={styles.input}
                placeholder="Enter your email-id"
                onChangeText={(text) => setEmail(text)}
            />
            <View>
              {(!email.includes('@')&&(email.length>=1)?
                <Text style={styles.alert}>Enter a valid email address</Text>:<Text></Text>)
              }
            </View>




            <Text style={styles.description}>Password</Text>
            <TextInput style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text )}
            />
            <View>
              {(password.length>=1)&&(password.length!=5)?
                <Text style={styles.alert}>Password must be 5 characters long</Text>:<Text></Text>
              }
            </View>




            <Text style={styles.description}>Confirm Password</Text>
            <TextInput style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(text) => setConfirmpass(text )}
            />
            <View>
              {(confirmPass)!=(password)?
                <Text style={styles.alert}>Passwords must match</Text>:<Text></Text>
              }
            </View>



            <View style={styles.btntext}>
            <Button  title='Sign Up' onPress={validation}/>
            {
              isValid&&<Text style={styles.description}>Login Succesfull. Hello {username}!</Text>
            }
            </View>
        </View>
    );
}







const styles = StyleSheet.create({
main:{
  marginHorizontal:20,
  marginVertical:20,
  backgroundColor: 'white'
},
header:{
  fontSize:40,
  fontWeight:'700',
  color:'black',
  marginBottom:10
},
input: {
  height: 40,
  borderWidth:2,
  padding: 10,
},
description:{
  color:'black',
  fontSize:18,
  fontWeight:'600',
  marginTop: 10
},
btntext:{
  color:'black',
  marginTop:30,
  fontWeight:'bold',
},
alert:{
  color:'red',
  fontSize:13
}

});

export default signupSimple;