import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Platform} from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';

export default class Signup extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onSignInCallback() {
        this.props.navigation.navigate("Login")
    }

    onHandledCallback() {
        this.props.navigation.navigate("UserInfor")
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <Header title={"Sign In"} callback={this.onSignInCallback.bind(this)} />

                <Text style={{fontSize: 30, marginTop: 25, fontWeight: 'bold', marginLeft: 30}}>Sign Up</Text>
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

                <View style={[styles.user_infor, {marginTop: 25}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Confirm Password"
                        placeholderTextColor = "#262E49"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>
                
                <View style={[{alignItems: 'flex-end', justifyContent: 'center', marginTop: 25, marginRight: 30 }]}>
                    <Button title={"Next"} customContainer={{width: 125, height: 40, borderRadius: 20}} customStyleBtn={{top: 10}} callback={this.onHandledCallback.bind(this)}/>
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