import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, Text, StyleSheet, Image } from 'react-native';


export default class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: props.avatar,
            name: props.name,
            phone: props.phone
        };
    }

    render() {
        let { avatar, name, phone } = this.state;

        return (
            <View style={{height: 75, marginLeft: 20, marginRight: 20, backgroundColor: 'white'}}>
                <View style={{height: 5}} />
                <View style={[{height: 65, justifyContent: 'center', borderRadius: 10, backgroundColor: 'white'}, styles.elevationLow1]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={ avatar } style={{ height: 30, width: 30, marginLeft: 15 }} />   
                        <View style={{flexDirection: 'column', height: 65, justifyContent: 'center'}}>
                            <Text style={{fontSize: 17, marginLeft: 15, fontFamily: "HelveticaNeue"}}>{name}</Text>
                            <Text style={{marginLeft: 15, fontSize: 14, marginTop: 3, color: '#262E49', fontFamily: "HelveticaNeue"}}>{phone}</Text>
                        </View> 
                    </View>
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
            elevation: 2,
          },
        }),
    },
});