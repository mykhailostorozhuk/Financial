import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Platform} from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onSignUpCallback() {
        this.props.navigation.navigate("Signup")
    }

    onHandledCallback() {
        this.props.navigation.navigate("Main")
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <Header title={"Sign Up"} callback={this.onSignUpCallback.bind(this)} />

                <Text style={{fontSize: 30, marginTop: 25, fontWeight: 'bold', marginLeft: 30}}>Welcome Back</Text>
                <Text style={{color: '#262E49', fontSize: 15, marginBottom: 25, marginLeft: 30, marginTop: 10}}>Please sign in to continue!</Text>

                <View style={styles.user_infor}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email"
                        placeholderTextColor = "#262E49"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>

                <View style={[styles.user_infor, {marginTop: 25}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#262E49"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>
                
                <TouchableOpacity onPress={() => this.onActionForgotPassword()}>
                    <Text style={{color: '#262E49', fontSize: 15, marginTop: 25, textAlign: 'right', marginRight: 30}}>Forgot Password</Text>
                </TouchableOpacity>

                <View style={[{alignItems: 'flex-end', justifyContent: 'center', marginTop: 25, marginRight: 30 }]}>
                    <Button title={"Sign In"} customContainer={{width: 125, height: 40, borderRadius: 20}} customStyleBtn={{top: 10}} callback={this.onHandledCallback.bind(this)}/>
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    text_input: {
        flex: 1, 
        height: 40, 
        marginLeft: 16, 
        color: 'white'
    },
    user_infor: {
        height: 45,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    viewSpace: {
        marginLeft: 30,
        marginRight: 30
    },
    line: {
        backgroundColor: '#262E49', 
        height: .5
    }
});