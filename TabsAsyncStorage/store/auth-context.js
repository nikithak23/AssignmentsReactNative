import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (name, email, phone) => {},
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        if (value !== null) {
          // We have data!!
          setIsLoggedIn(true);
          console.log(value);
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    retrieveData();
  }, []);

  const logoutHandler = async () => {
    try {
      const value = await AsyncStorage.removeItem('isLoggedIn');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
      setIsLoggedIn(false);
    } catch (error) {
      // Error retrieving data
    }

    //localStorage.removeItem('isLoggedIn');
  };

  const loginHandler = async (name, email, phone) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', '1');
      await AsyncStorage.multiSet([
        ['name', name],
        ['email', email],
        ['phone', phone],
      ]);
      setIsLoggedIn(true);
      console.log('Value set');
    } catch (error) {
      console.log(error);
    }

    //localStorage.setItem('isLoggedIn', '1');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
