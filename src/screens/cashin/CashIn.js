import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, Image} from 'react-native';

import CashInItem from '../../components/CashInItem';

const cashInList = [
    {
        index: 1,
        avatar: require('../../resources/avatar.png'),
        name: "Jacob E. Miller",
        description: "You have received money from Jacob E. Miller successfull.",
        datetime: "6:18 AM, 15-08-2018",
        transationId: "5E37DETHR8",
        receivedMoney: "$1,000.00",
        totalAmount: "$500.00"
    },
    {
        index: 2,
        avatar: require('../../resources/avatar.png'),
        name: "James J. Lomeli",
        description: "You have received money from James J. Lomeli successfull.",
        datetime: "6:18 AM, 15-08-2018",
        transationId: "5E37DETHR8",
        receivedMoney: "$1,000.00",
        totalAmount: "$500.00"
    },
    {
        index: 3,
        avatar: require('../../resources/avatar.png'),
        name: "Floyd D. Robinson",
        description: "You have received money from Floyd D. Robinson successfull.",
        datetime: "6:18 AM, 15-08-2018",
        transationId: "5E37DETHR8",
        receivedMoney: "$1,000.00",
        totalAmount: "$500.00"
    },
    {
        index: 4,
        avatar: require('../../resources/avatar.png'),
        name: "Marco Di Carlo",
        description: "You have received money from Marco Di Carlo successfull.",
        datetime: "6:18 AM, 15-08-2018",
        transationId: "5E37DETHR8",
        receivedMoney: "$1,000.00",
        totalAmount: "$500.00"
    } 
]

export default class CashIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cashes: cashInList
        }
    }

    static navigationOptions = {
        header: null
    }

    render() {

        const {goBack} = this.props.navigation;

        const {navigation} = this.props
        let title = navigation.state.params.title


        return (
            <View style={{flex: 1, alignItems: 'center'}}>

                <TouchableOpacity style={{ position: 'absolute', left: 20, top: 57 }} onPress={() => goBack()}>
                    <Image source={ require('../../resources/back.png') } style={{ height: 17, width: 24 }} />    
                </TouchableOpacity>

                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 50, textAlign: 'center', width: 200}}>{title}</Text>

                <View style={{flex: 1, marginTop: 15}}>
                    <FlatList
                        data={this.state.cashes}
                        keyExtractor={(item, index) => item.index}
                        renderItem={({item}) => <TouchableOpacity
                            onPress={() => this.pushScreen(item)}>
                            <CashInItem name={item.name} avatar={item.avatar} description={item.description}  datetime={item.datetime} transationId={item.transationId} receivedMoney={item.receivedMoney} totalAmount={item.totalAmount} />
                        </TouchableOpacity>}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    gridWrap: {
        paddingLeft: 5,
        paddingRight: 5 
    },
    elevationLow: {
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: -1, height: 5 },
            shadowOpacity: .1,
            shadowRadius: 5,    
          },
          android: {
            elevation: 5,
          },
        }),
    },    
});