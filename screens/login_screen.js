import * as React from 'react';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator, withNavigation} from '@react-navigation/stack';
import {StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';
import GLOBAL from '../global/global.js';

const style = StyleSheet.create({
    container: {
        alignItems: 'center', 
        backgroundColor: '#33B8FF',
        height: '100%'
    },
    textField: {
        height: 40,
        width: '40%',
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: 4,
        borderRadius: 15, 
        color: 'gray',
        borderColor: 'gray',
    },
    loginButton: {
        height: 40, 
        width: "40%",
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 3, 
        borderRadius: 15, 
        backgroundColor: 'white',
        marginTop: "10%",
        borderColor: 'gray', 
    }
});

export class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "realdonaldtrump",
            password: "maga2020",
            loginButtonSelected: false
        };
    }

    async log_in() {
        GLOBAL.username = this.state.username;
        GLOBAL.password = this.state.password;
        let token = null;

        try{
            let response = await fetch("http://192.168.0.86:8000/auth/token/login/", {method: "POST", headers: {Accept: 'application/json', "Content-Type": "application/json"}, body: JSON.stringify({username: this.state.username, password: this.state.password})});
            let json = await response.json();
            this.props.signIn(this.state.username, this.state.password, json.auth_token);
        } catch(error) {
            console.error(error);
        }
    }

    set_login_text_color(selected) {
        this.setState({loginButtonSelected: selected});
    }

    render() {
        let username = this.state.username;
        let password = this.state.password;

        return (
            <View style={style.container}>
                <Text style={{color: 'white', fontSize: 40, marginTop: '30%'}}>
                    APP
                </Text>
                <TextInput style={[style.textField, {marginTop: '30%'}]} value={this.state.username} onChangeText={(username) => { this.setState({username: username})}} />
                <TextInput style={style.textField} value={this.state.password} onChangeText={(password) => { this.setState({password: password})}} />
                <TouchableHighlight style={style.loginButton} onPress={() => this.log_in()} underlayColor='#33B8FF' onShowUnderlay={() => this.set_login_text_color(true)} onHideUnderlay={() => this.set_login_text_color(false)}>
                    <Text style={[{fontSize: 20, fontWeight: 'bold'}, (this.state.loginButtonSelected ? {color: 'white'} : {color: '#33B8FF'})]}>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}