import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native';

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
                        <Image source={ require('../resources/back_white.png') } style={{ height: 17, width: 24, marginLeft: 58, marginTop: 4 }} />    
                    </TouchableOpacity>
                    <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', textAlign: 'center', width: deviceWidth - 88}}>{this.state.title}</Text>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    header_view: {
        marginTop: -210, marginLeft: -38, height: 355
    },
    line: {
        backgroundColor: '#262E49', 
        height: .5
    }
});