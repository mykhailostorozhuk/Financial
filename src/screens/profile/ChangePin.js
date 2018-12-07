import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Platform} from 'react-native';

import Header1 from '../../components/Header1';
import Button from '../../components/Button';

export default class ChangePin extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onHandledCallback() {
        
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <Header1 title={"Change Pin"} navigation={this.props.navigation} />

                <Text style={{fontSize: 30, marginTop: 25, fontWeight: 'bold', marginLeft: 30, fontFamily: "Helvetica Neue"}}>Change Pin</Text>
                <Text style={{color: '#262E49', fontSize: 17, marginBottom: 25, marginLeft: 30, marginTop: 10, fontFamily: "HelveticaNeue"}}>Change your current pin</Text>

                <View style={styles.user_infor}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Current Pin"
                        placeholderTextColor = "#A7A8A9"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>

                <View style={[styles.user_infor, {marginTop: 25}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "New Pin"
                        placeholderTextColor = "#A7A8A9"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>

                <View style={[styles.user_infor, {marginTop: 25}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Confirm Pin"
                        placeholderTextColor = "#A7A8A9"
                        autoCapitalize = "none" />
                </View>
                <View style={[styles.line, styles.viewSpace]}/>
                
                <View style={[{alignItems: 'flex-end', justifyContent: 'center', marginTop: 25, marginRight: 30 }]}>
                    <Button title={"Confirm"} customContainer={{width: 125, height: 40, borderRadius: 20}} customStyleBtn={{top: 10}} callback={this.onHandledCallback.bind(this)}/>
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
        color: 'white',
        fontFamily: "HelveticaNeue",
        fontSize: 17
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
        backgroundColor: '#E7E8E9', 
        height: .5
    }
});