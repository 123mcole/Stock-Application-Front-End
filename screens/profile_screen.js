import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

let style = StyleSheet.create({
    headerText: {
        alignItems: 'center',
        fontSize: 40,
        color: 'white'
    },
    header: {
        height: '10%',
        backgroundColor: '#33B8FF',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    container: {
        
    },
})

export class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch("http://192.168.0.86:8000/auth/users/me/", {method: "GET", headers: {Accept: 'application/json', "Content-Type": "application/json", Authorization: "Token ".concat(this.props.auth_token)}});
            let json = await response.json();
            console.log(json);
            this.setState({username: json.username, password: json.password});
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <View style={style.header}>   
                    <Text style={style.headerText}>
                        Name Goes Here
                    </Text>
                </View>
                <View style={style.container}>
                    <Image source={require("../images/profile_picture.jpg")} style={{marginTop: 50, width: 200, height: 200, alignSelf: 'center'}}/>
                    <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 24}}>
                        {this.state.username}
                    </Text>
                    <Text style={{alignSelf: 'center', marginVertical: 2, fontSize: 12}}>
                        
                    </Text>
                </View>
            </>
        )
    }
    
}