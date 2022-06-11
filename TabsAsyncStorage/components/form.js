import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';

const Form = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  const nameCheck = () => {
    if (/[0-9]/.test(name) === true) {
      return (
        <Text style={styles.error}>Name must contain only characters</Text>
      );
    }
  };
  const mobileCheck = phone => {
    return setPhone((phone = isNaN(phone) ? '' : phone));
  };
  const emailCheck = () => {
    if (email.includes('@') === false && email) {
      return <Text style={styles.error}>Enter valid email</Text>;
    }
  };
  const passwordCheck = () => {
    if (confirmPassword !== password && confirmPassword) {
      return <Text style={styles.error}>Both passwords must be same.</Text>;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        
          <Text style={styles.description}>Name</Text>
          <TextInput
            value={name}
            onChangeText={input => setName(input)}
            maxLength={20}
            style={styles.inputField}
          />
          {nameCheck()}
       
        
          <Text style={styles.description}>Mobile</Text>
          <TextInput
            value={phone}
            onChangeText={input => mobileCheck(input)}
            maxLength={10}
            style={styles.inputField}
          />
        
        
          <Text style={styles.description}>Email</Text>
          <TextInput
            value={email}
            onChangeText={input => setEmail(input)}
            style={styles.inputField}
          />
          {emailCheck()}
      
        
          <Text style={styles.description}>Password</Text>
          <TextInput
            value={password}
            onChangeText={input => setPassword(input)}
            secureTextEntry={true}
            maxLength={5}
            style={styles.inputField}
          />
        
        
          <Text style={styles.description}> Confirm Password</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={input => setConfirmPassword(input)}
            secureTextEntry={true}
            maxLength={5}
            style={styles.inputField}
          />
          {passwordCheck()}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-evenly',
    //marginHorizontal: 5,
  },

  inputField: {
    //paddingTop: 10,
    //fontSize: 20,
    //color: 'white',
    height: 40,
    marginHorizontal:20,
    borderColor:'black',
    borderBottomWidth:2,
    paddingBottom:10
  },

  description: {
    //textAlign: 'left',
    //fontSize: 20,
    //textAlign: 'left',
    //color: 'white',
    color:'black',
    fontSize:18,
    fontWeight:'700',
    marginTop: 10,
    marginHorizontal:20
  },
  error: {
    //color: 'purple',
    //fontSize: 13,
    //marginTop: Platform.OS === 'ios' ? 15 : 1,
    color:'red',
    fontSize:13,
    marginHorizontal:20
  },
});
export default Form;