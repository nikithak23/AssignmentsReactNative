/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


//import App from './_RandomEg/async2';
//import App from './_RandomEg/async3';
//import App from './_RandomEg/async4_object';
//import App from './_RandomEg/simpleTab';
//import App from './AwesomeProject/AwesomeProject';
//import navig from './axiosSudyProject/navig';
//import counter from './CounterProject/Counter';
//import navigPage from './DrawerNavigation/navigPage';
//import navigPage from './FlatlistNavigationProject/NavigPage';
import homePage from './FlatlistSimpleProject/flatlistSimple'
//import App from './ReduxMovieApp/App';
//import App from './ReduxPersistEg/App';
import App from './ReduxPizzaApp/App';
//import App from './ReduxSample/App';
//import scrollableTabs from './ScrollableTabsProject/scrollableTabs';
//import navigPage from './SignupNavigationProject/NavigPage';
//import signupSimple from './SignupSimpleProject/SignupSimple';
//import simpleApp from './SimpleAppLayout/simpleAppLayout';
//import splash from './SplashScreen/splashScreen';
//import MainBottomTabWithSignup from './TabsAsyncStorage/MainBottomTabWithSignUp';
//import navigPage from './TabsNavigationProject/NavigPage';
import mainNavig from './WeatherApp1/mainNavig'; //Data is not persisted. No delete operation. Cities can only be added to fav and rec search
//import mainNavig from './WeatherApp0/mainNavig';


//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => mainNavig);