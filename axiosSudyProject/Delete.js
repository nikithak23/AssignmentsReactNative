import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";

export default function deleteReq() {

const baseUrl = "https://gorest.co.in/public/v1/users";
const token="3fac894d30fb577c10ed0e03c326975a09e84e7665442b58faa287558e15ff9a";
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitFormHandler = async (event) => {
    
    setIsLoading(true);
    try {
      const response = await axios.delete(`${baseUrl}/2410?access-token=${token}`);
      if (response.status === 204) {
        alert(` You have deleted: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
      } else {
        throw new Error("Failed to delete resource");
      }
    } catch (error) {
      alert("Failed to delete resource");
      setIsLoading(false);
    }
  }; 


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}>Deleting..</Text>
          ) : (
            <Text style={styles.formHeading}>Delete User</Text>
          )}
        </View>
       
        
        
        
        <View>
          <Button
            title="Delete"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },

  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});







/*
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";

export default function postReq() {

const baseUrl = "https://gorest.co.in/public/v1/users";
const token="3fac894d30fb577c10ed0e03c326975a09e84e7665442b58faa287558e15ff9a";
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitFormHandler = async (event) => {
    
    setIsLoading(true);
    try {
      const response = await axios.delete(`${baseUrl}/2410?access-token=${token}`);
      if (response.status === 204) {
        alert(` You have deleted: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
      } else {
        throw new Error("Failed to delete resource");
      }
    } catch (error) {
      alert("Failed to delete resource");
      setIsLoading(false);
    }
  }; 


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}>Deleting..</Text>
          ) : (
            <Text style={styles.formHeading}>Delete User</Text>
          )}
        </View>
       
        
        
        
        <View>
          <Button
            title="Delete"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },

  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});
*/