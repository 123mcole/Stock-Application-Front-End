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

/*function return_home_screen() {
    return(
        <ScrollView>
      <Text>
        This is {varr} cool!
      </Text>
        </ScrollView>
    )
}*/

function fun() {

}

function launchHomeScreen() {

}

function launchPeopleScreen() {

}

/*const HomeScreen = {{ navigation }} => {
  return (
    <View style={styles.homeScreenBackground}>
    <View style={styles.mainSection}>
      
      
    <Text>
      {count}
    </Text>

    
    </View>
    <View style={styles.navigationBar}>
      <TouchableHighlight onPress={onPress} style={navigationBarButtonStyles.peopleButton}>
          <Text style={StyleSheet.create({fontSize: 16})}>
            pp
          </Text>
      </TouchableHighlight>


      <TouchableHighlight onPress={onPress} style={navigationBarButtonStyles.homeButton}>
        <Text style={StyleSheet.create({fontSize: 16})}>
          home
        </Text>
      </TouchableHighlight>
    </View>
</View>
  )
}*/

let navigationBarButtonStyles = StyleSheet.create({
  homeButton: {
    borderRadius: 2,
    backgroundColor: "white",
    paddingHorizontal: 4,
    width: "20%",
    marginLeft: "10%",
    alignItems: "center"
  },
  peopleButton: {
    borderRadius: 2,
    backgroundColor: "white",
    paddingHorizontal: 4,
    width: "20%",
    alignItems: "center",
    marginLeft: "10%"
  }
})

let styles = StyleSheet.create({
  homeScreenBackground: {
    backgroundColor: 'cyan',
    flex: 1,
  },
  navigationBar: {
    backgroundColor: 'brown',
    width: '100%',
    height: '5%',
    alignItems: "center",
    flexDirection: "row",

  },
  mainSection: {
    width: '100%',
    height: '95%',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
    width: '50%',
    marginLeft: '25%',
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
})