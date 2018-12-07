import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image, Platform } from 'react-native';

const deviceWidth = Dimensions.get('window').width

export default class Header1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            title: props.title,
        };
    }

    render() {
        
        const {goBack} = this.state.navigation;

        return (
            <View style={styles.header_view}>
                <Image source={ require('../resources/header_bg.png') } style={{height: 355}}/>

                <View style={{position: 'absolute', top: 265, flexDirection: 'row'}}>

                    <TouchableOpacity  onPress={() => goBack()}>
                        <Image source={ require('../resources/back_white.png') } style={[{ height: 17, width: 24, marginTop: 4}, (Platform.OS == 'ios') ? {marginLeft: 58} : {marginLeft: 72} ]} />    
                    </TouchableOpacity>
                    <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', textAlign: 'center', width: deviceWidth - 88, fontFamily: "Helvetica Neue"}}>{this.state.title}</Text>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    header_view: {
        marginTop: -210, 
        height: 355,
        ...Platform.select({
            ios: {
                marginLeft: -38, 
            },
            android: {
                marginLeft: -52, 
            }
        })
    },
    line: {
        backgroundColor: '#262E49', 
        height: .5
    }
});