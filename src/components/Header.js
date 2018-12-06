import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
        };
    }

    onAction() {
        
        if (this.props.callback) {
            this.props.callback();
        }
    }

    render() {
        
        return (
            <View style={styles.header_view}>
                <Image source={ require('../resources/header_bg.png') } style={{height: 355}}/>

                <TouchableOpacity style={{position: 'absolute', right: 15, top: 205}} onPress={() => this.onAction()}>
                    <View >
                        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>{this.state.title}</Text>
                        <View style={[styles.line, {width: 35, marginTop: 2, backgroundColor: 'white', height: 1}]}/>
                    </View>
                </TouchableOpacity>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    header_view: {
        alignItems: 'center', marginTop: -160, marginLeft: -15, height: 355
    },
    line: {
        backgroundColor: '#262E49', 
        height: .5
    }
});