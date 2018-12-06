import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Platform} from 'react-native';

import Header from '../../components/Header';
import Button from '../../components/Button';

export default class UserInfor extends Component {

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
        this.props.navigation.navigate("PinEnter")
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <Header title={"Sign In"} callback={this.onSignInCallback.bind(this)} />

                <View style={{width: 70, height: 70, marginTop: 25, marginLeft: 30, marginBottom: 15}}>
                    <Image source={ require('../../resources/avatar.png') } style={{resizeMode: 'stretch', width: 70, height: 70}}/>
                    <Image source={ require('../../resources/upload.png') } style={{position: 'absolute', right: 7, bottom: -3, width: 20, height: 20}}/>
                </View>

                <View style={styles.user_infor}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Full Name"
                        placeholderTextColor = "#262E49"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>

                <View style={[styles.user_infor, {marginTop: 25}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Mobile Number"
                        placeholderTextColor = "#262E49"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>

                <View style={[styles.user_infor, {marginTop: 25}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "MID Number"
                        placeholderTextColor = "#262E49"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>
                
                <View style={[{alignItems: 'flex-end', justifyContent: 'center', marginTop: 25, marginRight: 30 }]}>
                    <Button title={"Sign Up"} customContainer={{width: 125, height: 40, borderRadius: 20}} customStyleBtn={{top: 10}} callback={this.onHandledCallback.bind(this)}/>
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