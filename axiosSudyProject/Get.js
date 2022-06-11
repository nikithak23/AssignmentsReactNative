import axios from "axios";
import React, { useState, useEffect } from "react";
import {StyleSheet,Text,ScrollView,View,Button,TouchableOpacity,SafeAreaView,FlatList} from "react-native";
import { StackActions } from '@react-navigation/native';

export default function getReq({navigation}) {
const baseUrl = "https://gorest.co.in/public/v1/users";
const token="3fac894d30fb577c10ed0e03c326975a09e84e7665442b58faa287558e15ff9a";



const [isChanged, setIsChanged] = useState(false);

const renderUser=({item})=>{
  const EditPushAction = StackActions.push('Edit Details', {UserId:item.id,Username:item.name,Useremail:item.email,Usergender:item.gender,Userstatus:item.status});
  return(
    <View style={styles.box}>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
          <Text style={styles.text}>Gender: {item.gender}</Text>
          <Text style={styles.text}>Status: {item.status}</Text>
          <View style={styles.btn}>
          <Button 
          title="Edit"
          color='grey'
          onPress={()=>{navigation.dispatch(EditPushAction)}}
          />
          <Button
          title="Delete"
          color='grey'
          onPress={()=>{
            axios
            .delete(`${baseUrl}/${item.id}?access-token=${token}`)
            .then(response => { if(response.status===204)
            {alert('Successfully deleted the user data belonging to ' +item.name);}
            setIsChanged(true);
             })
            .catch(e => console.log('Something went wrong!', e));

            }}
          />
          </View>
    </View>
  );
}

function User({ userObject }) {
  return (
    <View>
      <FlatList
        data={userObject}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        horizontal={false}
        scrollEnabled={true} 
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}



  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);
  

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}?access-token=${token}`;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        if (response.status === 200) {
          setUser(response.data.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Data fetching cancelled');
        }else{
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  }, []);


  return (
    
    <View style={styles.container}>
    <View style={{flexDirection:"row"}}>
      <Text style={{fontSize:25, marginTop:5, marginLeft:20,marginRight:120, fontWeight:'bold', color:'grey'}}> User Details</Text>
      <View>
      <Button
      title="Add User"
      style={styles.buttonStyles}
      color='grey'
      onPress={()=>{navigation.navigate('Add User')}}
      />
      </View>

     
    </View>
    <View style={styles.wrapperStyle}>
        {!isLoading && !hasError && user && <User userObject={user} />}
    </View>
    <View style={styles.wrapperStyle}>
      {isLoading && <Text> Loading </Text>}
      {!isLoading && hasError && <Text> An error has occurred </Text>}
    </View>
      
  </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    alignItems: 'stretch',
    justifyContent:'center',
    paddingTop:50,
    paddingBottom:40
  },
  wrapperStyle: {
    minHeight: -10,
    //minHeight:128
  },
  buttonStyles: {
    padding: 10,
    marginBottom:10,
    marginTop:10,
    marginLeft:80,
    
    
  },
  btn:{
    marginHorizontal:100,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10
  },
  text: {
    fontSize: 16,
    color:'white',
    fontWeight:'400'
  },
  box:{ 
    margin:20 , 
    width:350,
    height:170, 
    borderColor:'darkturquoise',
    borderWidth:2,
    borderRadius:15,
    padding:10,
    backgroundColor:'darkturquoise'
  },
});



/*
import axios from "axios";
import React, { useState, useEffect } from "react";
import {StyleSheet,Text,ScrollView,View,Button,TouchableOpacity,SafeAreaView,FlatList} from "react-native";
import { StackActions } from '@react-navigation/native';

export default function getReq({navigation}) {
const baseUrl = "https://gorest.co.in/public/v1/users";
const token="3fac894d30fb577c10ed0e03c326975a09e84e7665442b58faa287558e15ff9a";



const [isChanged, setIsChanged] = useState(false);

const renderUser=({item})=>{
  const EditPushAction = StackActions.push('Edit Details', {UserId:item.id,Username:item.name,Useremail:item.email,Usergender:item.gender,Userstatus:item.status});
  return(
    <View style={styles.box}>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
          <Text style={styles.text}>Gender: {item.gender}</Text>
          <Text style={styles.text}>Status: {item.status}</Text>
          <View style={styles.btn}>
          <Button 
          title="Edit"
          color='grey'
          onPress={()=>{navigation.dispatch(EditPushAction)}}
          />
          <Button
          title="Delete"
          color='grey'
          onPress={()=>{
            axios
            .delete(`${baseUrl}/${item.id}?access-token=${token}`)
            .then(response => { if(response.status===204)
            {alert('Successfully deleted the user data belonging to ' +item.name);}
            setIsChanged(true);
             })
            .catch(e => console.log('Something went wrong!', e));

            }}
          />
          </View>
    </View>
  );
}

function User({ userObject }) {
  return (
    <View>
      <FlatList
        data={userObject}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        horizontal={false}
        scrollEnabled={true} 
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}



  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);
  

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `${baseUrl}?access-token=${token}`;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, { cancelToken: source.token });
        if (response.status === 200) {
          setUser(response.data.data);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Data fetching cancelled');
        }else{
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  }, []);


  return (
    
    <View style={styles.container}>
    <View style={{flexDirection:"row"}}>
      <Text style={{fontSize:25, marginTop:5, marginLeft:20,marginRight:120, fontWeight:'bold', color:'grey'}}> User Details</Text>
      <View>
      <Button
      title="Add User"
      style={styles.buttonStyles}
      color='grey'
      onPress={()=>{navigation.navigate('Add User')}}
      />
      </View>

     
    </View>
    <View style={styles.wrapperStyle}>
        {!isLoading && !hasError && user && <User userObject={user} />}
    </View>
    <View style={styles.wrapperStyle}>
      {isLoading && <Text> Loading </Text>}
      {!isLoading && hasError && <Text> An error has occurred </Text>}
    </View>
      
  </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightcyan",
    alignItems: 'stretch',
    justifyContent:'center',
    paddingTop:50,
    paddingBottom:40
  },
  wrapperStyle: {
    minHeight: -10,
    //minHeight:128
  },
  buttonStyles: {
    padding: 10,
    marginBottom:10,
    marginTop:10,
    marginLeft:80,
    
    
  },
  btn:{
    marginHorizontal:100,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10
  },
  text: {
    fontSize: 16,
    color:'white',
    fontWeight:'400'
  },
  box:{ 
    margin:20 , 
    width:350,
    height:170, 
    borderColor:'darkturquoise',
    borderWidth:2,
    borderRadius:15,
    padding:10,
    backgroundColor:'darkturquoise'
  },
});
*/