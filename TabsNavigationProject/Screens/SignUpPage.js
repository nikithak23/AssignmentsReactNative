import { StackActions } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet,TextInput, Image } from 'react-native';
//import AuthContext from '../authContext';

function SignUpPage({ navigation }){
    
    const [username, setUsername]=useState ('');
    const [number, setNumber]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPass, setConfirmpass]= useState('');
    const [isValid, setIsvalid]= useState(false);
    const [isVisible, setState]= useState(true); //for splashscreen
    //const ctx = useContext(AuthContext);
    
  
  const validation=() =>{
    if(username&& email&&number&&password&&confirmPass)
    {
      setIsvalid(true);
      navigation.navigate('TabPage', {name:username, email:email,  phone:number});
      //setIsvalid(true);
      //ctx.onLogin(username,email,number);
      //navigation.dispatch(StackActions.replace('TabPage',{
        //name:username,
        //email:email,
        //phone:number,
      //}),
      //);
    }
  };


  let Hide_Splash_Screen=()=>{  
    setState({isVisible:false});
  }
  useEffect(()=>{
    setTimeout(function(){
      Hide_Splash_Screen();
    },2000);
  })
  const rend=() =>{
    return (Splash_Screen = (  
                <View style={styles.SplashScreen_RootView}>  
                    <View style={styles.SplashScreen_ChildView}>  
                        <Image source={{uri:'https://www.nicepng.com/png/detail/334-3341474_sign-up-button-green-sign-up-button-png.png'}}  
                       style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                   </View>  
                </View> ))
   }   

  
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
                <Text style={styles.alert}>Mobile number must contain 10 digits</Text>:<Text></Text>)
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
            <Button title="Sign Up" onPress={validation}
            color={'darkolivegreen'}/>   
            </View>

            
            
            {  
              isVisible==true? rend() : null //part of splash screen code 
            }  
      </View>
           
    );
  }
 

  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'honeydew'

    },
    header:{
      fontSize:40,
      fontWeight:'800',
      color:'black',
      textAlign:'center',
      marginVertical:20,
    },
    input: {
      height: 40,
      marginHorizontal:20,
      borderColor:'black',
      borderBottomWidth:2
    },
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'700',
      marginTop: 5,
      marginHorizontal:20
    },
    btntext:{
      marginTop:40,
      fontWeight:'bold',
      marginHorizontal:80,
      
    },
    alert:{
      color:'red',
      fontSize:13,
      marginHorizontal:20
    },
    
    MainContainer:  
      { 
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
      },  
      SplashScreen_RootView:  
      {  
        justifyContent: 'center',  
        flex:1,   
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
        },  
      SplashScreen_ChildView:  
      {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'honeydew',  
        flex:1,  
      }
    
  
  });
  
export default SignUpPage;  









/*
import React, { useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet,TextInput, Image } from 'react-native';

function SignUpPage({ navigation }){
    
    const [username, setUsername]=useState ('');
    const [number, setNumber]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPass, setConfirmpass]= useState('');
    const [isValid, setIsvalid]= useState(false);
    const [isVisible, setState]= useState(true);
  
  
  
  const validation=() =>{
    if(username&& email&&number&&password&&confirmPass)
    {
      setIsvalid(true);
      navigation.navigate('TabPage', {name:username, num:number, email:email});
    }
  };


  let Hide_Splash_Screen=()=>{  
    setState({isVisible:false});
  }
  useEffect(()=>{
    setTimeout(function(){
      Hide_Splash_Screen();
    },2000);
  })
  const rend=() =>{
    return (Splash_Screen = (  
                <View style={styles.SplashScreen_RootView}>  
                    <View style={styles.SplashScreen_ChildView}>  
                        <Image source={{uri:'https://www.nicepng.com/png/detail/334-3341474_sign-up-button-green-sign-up-button-png.png'}}  
                       style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                   </View>  
                </View> ))
   }   

  
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
              {/[a-z]/.test(number)||(/[A-Z]/.test(number)||(number.length>=11)?
                <Text style={styles.alert}>Mobile number must contain 10 digits</Text>:<Text></Text>)
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
            <Button title="Sign Up" onPress={validation}
            color={'darkolivegreen'}/>   
            </View>
                {  
                  isVisible==true? rend() : null  
                }  
      </View>
           
    );
  }
 

  const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'honeydew'

    },
    header:{
      fontSize:40,
      fontWeight:'800',
      color:'black',
      textAlign:'center',
      marginVertical:20,
    },
    input: {
      height: 40,
      marginHorizontal:20,
      borderColor:'black',
      borderBottomWidth:2
    },
    description:{
      color:'black',
      fontSize:18,
      fontWeight:'700',
      marginTop: 5,
      marginHorizontal:20
    },
    btntext:{
      marginTop:40,
      fontWeight:'bold',
      marginHorizontal:80,
      
    },
    alert:{
      color:'red',
      fontSize:13,
      marginHorizontal:20
    },
    
    MainContainer:  
      { 
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
      },  
      SplashScreen_RootView:  
      {  
        justifyContent: 'center',  
        flex:1,   
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
        },  
      SplashScreen_ChildView:  
      {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: 'honeydew',  
        flex:1,  
      }
    
  
  });
  
export default SignUpPage;  

*/