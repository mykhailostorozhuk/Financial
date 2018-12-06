import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, Text, StyleSheet, Image } from 'react-native';


export default class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: props.avatar,
            title: props.title,
            description: props.description,
            sub: props.sub,
            value: props.value
        };
    }

    render() {
        let { title, avatar, description, sub, value } = this.state;

        return (
            <View style={{height: 117, marginLeft: 20, marginRight: 20, backgroundColor: 'white'}}>
                <View style={{height: 15}} />
                <View style={[{height: 93, justifyContent: 'center', borderRadius: 10, backgroundColor: 'white'}, styles.elevationLow1]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={ avatar } style={{ height: 30, width: 30, marginLeft: 15 }} />    
                        <Text style={{flex: 1, fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>{title}</Text>
                        <Text style={{marginRight: 15, fontSize: 15}}>{value}</Text>
                    </View>
                    
                    <Text style={{color: '#262E49', fontSize: 12, marginLeft: 15, marginRight: 15, marginTop: 7}}>
                        <Text>{description}</Text>
                        <Text>{sub}</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    elevationLow1: {
        ...Platform.select({
          ios: {
            shadowColor: 'grey',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: .1,
            shadowRadius: 1,    
          },
          android: {
            elevation: 5,
          },
        }),
    },
});