/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import {HomeScreen} from "./screens/home_screen";
import {PeopleScreen} from "./screens/people_screen";
import {LoginScreen} from "./screens/login_screen.js";
import {ProfileScreen} from './screens/profile_screen.js';
import {StockScreen} from './screens/stocks_screen.js';

import GLOBAL from './global/global.js';

import 'react-native-gesture-handler';
import { NavigationContainer, StackActions, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//const Stack = createStackNavigator();

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);

    this.state = {
      username: 'realDonaldJTrump',
      password: 'MAGA2020',
      auth_token: null,
      signedIn: false,
    }
  }

  signIn(un, pw, at) {
    this.setState({
      username: un,
      password: pw,
      auth_token: at,
      signedIn: true,
    });
  }

  render() {
    return (
      this.state.signedIn ? (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
          <Tab.Screen name="Stocks" component={StockScreen}/> 
          <Tab.Screen name="Profile">
            {() => <ProfileScreen username={this.state.username} password={this.state.password} auth_token = {this.state.auth_token}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>)
      : (
        <LoginScreen signIn = {this.signIn}/> 
      )
    );
  }
}

export default App;

