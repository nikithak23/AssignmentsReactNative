/* 
Screen must have a Text "Your Current Counter Value is 0"
It will have 2 buttons Increment, Decrement

- Increment will disable / hide when Counter reaches 10
- Decrement will disable / hide when Counter reaches 0
Tricky Work: 

1. When u reach 10, you can display another text "Congrats we reached 10". This will only display when u reach 10 else must not be shown in screen
2. "Your Current Counter Value is 0" -> Text color can be Red when it is 0 and Green when it is 10 . Else always Black..


Tricky work if possible solve it.. It would be a Plus point for ur assignment..

Do this only using functional component.
*/


import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet,flex} from 'react-native';

const counter = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`You clicked ${count} times`);  //any function can be passed here //the variables used can be passed as parameters at the closure of useEffect as }[param1, param2,...so on..]);
  }); //Three things can be passed here i.e. either [] or [parameter in this case it's *count*] or nothing i.e. just end like this -> });
         //[] ->This will print the parameter used in the function passed into useEffect(count in this case) value in the console log(terminal) only in the beginning orrrr  it'll also print whenever there's any change made to the code
         //[parameter] in this case its [count] -> This will print in the console log i.e. terminal each and every change in the parameter i.e. count varible here  orrrr it'll also print in the terminal whenever any change is made to the code
         // nothig is passed i.e. nor paramerter[param] nor an empty squre brace [] -> this works same as the above case i.e. when a [param] is passed i.e.--->>>> This will print in the console log i.e. terminal each and every change in the parameter i.e. count varible here  orrrr it'll also print in the terminal whenever any change is made to the code
         //However among these three cases, the last one is never preferred. You are expected to either pass some parameter or empty square braces like this-> []
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20}}> 
        {
        count==10?<Text style={{color:"green"}}>Congrats we reached 10!</Text>:
        count == 0?<Text style={{color:"red"}}>Your current Counter Value is 0</Text>: 
        <Text style={{color: "black"}}>Your Current Counter Value is {count}</Text>
        }
        </Text>
      
        <Button onPress={() => setCount(count + 1)} title="   +   " disabled={count>=10} />
        <Button onPress={() => setCount(count - 1)} title="   -   " disabled={count<=0} />
    </View> 
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1, 
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center'
  }
});

export default counter;
