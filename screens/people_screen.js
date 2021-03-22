import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export class PeopleScreen{ //extends React.Component
//get content (initally set by constructor), then call loading function, then update new content, and force a refresh
    content;
    loaded = false;

    constructor() {
        this.content = this.returnLoadingScreen;
    }

    //runtime methods

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        )
      }
    
    async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.loaded = true;
        }
    }

    //html methods

    returnLoadingScreen() {
        return (
            <View>
                <Text>
                    {this.loaded}
                </Text>
            </View>
        )
    }
}

performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

export class PeopleComponent extends React.Component {
  render() {
    return (
      <View>
          <Text>
              {this.loaded}
          </Text>
      </View>
  )
  }
}