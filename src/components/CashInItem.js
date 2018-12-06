import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, Text, StyleSheet, Image, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width

export default class CashInItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: props.avatar,
            name: props.name,
            description: props.description,
            datetime: props.datetime,
            transationId: props.transationId,
            receivedMoney: props.receivedMoney,
            totalAmount: props.totalAmount
        };
    }

    render() {
        let { name, avatar, description, datetime, transationId, receivedMoney, totalAmount } = this.state;

        return (
            <View style={{height: 215, marginLeft: 20, marginRight: 20}}>
                <View style={{height: 10}} />
                <View style={[{height: 205, justifyContent: 'center', borderRadius: 10, backgroundColor: 'white'}, styles.elevationLow1]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={ avatar } style={{ height: 30, width: 30, marginLeft: 15 }} />    
                        <Text style={{flex: 1, fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>{name}</Text>
                        <Image source={ require('../resources/delete.png') } style={{ height: 15, width: 12, marginRight: 15 }} />    
                    </View>
                    
                    <Text style={{fontSize: 13, marginLeft: 15, marginRight: 15, marginTop: 10}}>{description}</Text>

                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Date & Time</Text>
                            <Text style={styles.text}>{datetime}</Text>
                        </View>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Transation ID</Text>
                            <Text style={styles.text}>{transationId}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Received Money</Text>
                            <Text style={styles.text}>{receivedMoney}</Text>
                        </View>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Total Amount</Text>
                            <Text style={styles.text}>{totalAmount}</Text>
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
            elevation: 5,
          },
        }),
    },
    date_view: {
        flexDirection: 'column', height: 35, width: (deviceWidth - 40) /2 , paddingLeft: 15
    },
    text: {
        flex: 1, fontSize: 11
    }
});