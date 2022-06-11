import React, {useState} from 'react';

import {Text, View, Button, StyleSheet} from 'react-native';
import Form from '../components/form';
import {StackActions} from '@react-navigation/native';
import {useContext} from 'react';
import AuthContext from '../store/auth-context';


const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const ctx = useContext(AuthContext);

  const validation = () => {
    if (
      /[0-9]/.test(name) === false &&
      phone &&
      password &&
      email.includes('@') &&
      password === confirmPassword
    ) {
      setIsValid(true);
      ctx.onLogin(name, email, phone); //function call //To store the entered name,email and phone in async storage 
      navigation.dispatch(StackActions.replace('TabPage', {
          name: name,
          email: email,
          phone: phone,
        }),
      );
    } else {
      setIsValid(false);
    }
  };

  const renderForm = () => {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Text style={styles.header}>SignUp</Text>
          <View style={styles.form}>
            <Form
              name={name}
              setName={setName}
              password={password}
              setPassword={setPassword}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button onPress={validation} title="Login" color={'darkolivegreen'}></Button>
          {isValid === true ? (
            <Text style={styles.success}>Login Success. Hello {name}</Text>
          ) : null}
        </View>
      </View>
    );
  };

return <View>{renderForm()}</View>;
};

const styles = StyleSheet.create({
  container: {
    //padding: Platform.OS === 'ios' ? 50 : 30,
    width: '100%',
    height: '100%',
    backgroundColor: 'honeydew',
  },
  secondContainer: {
    flex: 1,
    //justifyContent: 'flex-start',
  },
  header: {
    //fontSize: 30,
    //color: 'white',
    //marginBottom: 20,
    //textAlign: 'center',
    //fontFamily: 'Cochin',
    //fontWeight: 'bold',
    fontSize:40,
    fontWeight:'800',
    color:'black',
    textAlign:'center',
    marginVertical:20,
  },
  form: {
    flex: 1,
    //borderRadius: 5,
  },
  button: {
    //paddingTop: Platform.OS === 'ios' ? 30 : 10,
    //fontSize: Platform.OS === 'ios' ? 30 : 'default',
    //color: Platform.OS === 'ios' ? 'white' : 'white',
    marginTop:20,
    marginBottom:120,
    fontWeight:'bold',
    marginHorizontal:80,
  },
  success: {
    marginTop: 0,
    textAlign: 'center',
    color: 'black',
  },
});
export default SignUpPage;