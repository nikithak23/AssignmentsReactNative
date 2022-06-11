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


export default function putReq({route}) {
 
const baseUrl = "https://gorest.co.in/public/v1/users";
const token="3fac894d30fb577c10ed0e03c326975a09e84e7665442b58faa287558e15ff9a";

  const [name, setName] = useState(route.params.Username);
  const [email, setEmail] = useState(route.params.Useremail);
  const [gender, setGender] = useState(route.params.Usergender);
  const [status, setStatus] = useState(route.params.Userstatus);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onChangeGenderHandler = (gender) => {
    setGender(gender);
  };

  const onChangeStatusHandler = (status) => {
    setStatus(status);
  };

  const onSubmitFormHandler = (event) => {
    if (!name.trim() || !email.trim() || !gender.trim() || !status.trim()) {
      alert("Input Invalid");
      return;
    }
    setIsLoading(true);

    const configurationObject = {
      url: `${baseUrl}/${route.params.UserId}?access-token=${token}`,
      method: "PUT",
      data: { name, email, gender, status },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          alert(` You have updated: ${JSON.stringify(response.data)}`);
          setIsLoading(false);
          setName("");
          setEmail("");
          setGender("");
          setStatus("");
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        alert("An error has occurred");
        setIsLoading(false);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}>Updating... </Text>
          ) : (
            <Text style={styles.formHeading}>Update user</Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={name}
            editable={!isLoading}
            onChangeText={onChangeNameHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={email}
            editable={!isLoading}
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Gender"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={gender}
            editable={!isLoading}
            onChangeText={onChangeGenderHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Status"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={status}
            editable={!isLoading}
            onChangeText={onChangeStatusHandler}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
            color='grey'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: "center",
    marginTop: 35,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor:'darkturquoise',
    backgroundColor:'darkturquoise',
    minWidth: 300,
    height:40,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 16,
    color:'white',
    fontWeight:'400'
  },
  submitButton: {
    marginTop:50,
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


export default function putReq({route}) {
 
const baseUrl = "https://gorest.co.in/public/v1/users";
const token="3fac894d30fb577c10ed0e03c326975a09e84e7665442b58faa287558e15ff9a";

  const [name, setName] = useState(route.params.Username);
  const [email, setEmail] = useState(route.params.Useremail);
  const [gender, setGender] = useState(route.params.Usergender);
  const [status, setStatus] = useState(route.params.Userstatus);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onChangeGenderHandler = (gender) => {
    setGender(gender);
  };

  const onChangeStatusHandler = (status) => {
    setStatus(status);
  };

  const onSubmitFormHandler = (event) => {
    if (!name.trim() || !email.trim() || !gender.trim() || !status.trim()) {
      alert("Input Invalid");
      return;
    }
    setIsLoading(true);

    const configurationObject = {
      url: `${baseUrl}/${route.params.UserId}?access-token=${token}`,
      method: "PUT",
      data: { name, email, gender, status },
    };

    axios(configurationObject)
      .then((response) => {
        if (response.status === 200) {
          alert(` You have updated: ${JSON.stringify(response.data)}`);
          setIsLoading(false);
          setName("");
          setEmail("");
          setGender("");
          setStatus("");
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        alert("An error has occurred");
        setIsLoading(false);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}>Updating... </Text>
          ) : (
            <Text style={styles.formHeading}>Update user</Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={name}
            editable={!isLoading}
            onChangeText={onChangeNameHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={email}
            editable={!isLoading}
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Gender"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={gender}
            editable={!isLoading}
            onChangeText={onChangeGenderHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Status"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={status}
            editable={!isLoading}
            onChangeText={onChangeStatusHandler}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
            color='grey'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: "center",
    marginTop: 35,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor:'darkturquoise',
    backgroundColor:'darkturquoise',
    minWidth: 300,
    height:40,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 16,
    color:'white',
    fontWeight:'400'
  },
  submitButton: {
    marginTop:50,
    padding: 100,
  },
});
*/