import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform, Dimensions} from 'react-native';

import GridView from 'react-native-super-grid';

import {HomeItem} from "../../components/HomeItem";
import TabItem from '../../components/TabItem';

const deviceWidth = Dimensions.get('window').width

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navigation: props.navigation,
            tab_index: 0
        }
    }

    pushScreen = (index) => {
       
        switch(index) {
            case 0:
                this.state.navigation.navigate('SendMoney', {title: "Send Money"})
                break;
            case 1:
                this.state.navigation.navigate('SendMoney', {title: "Buy Airtime"})
                break;
            case 2:
                this.state.navigation.navigate('CashOut')
                break;
            case 3:
                this.state.navigation.navigate('MakePayment')
                break;
            case 4:
                this.state.navigation.navigate('RequestPayment')
                break;
            case 5:
                this.state.navigation.navigate('ReferFriend')
                break;
        }     
    }

    onHandledCallback(tab_index) {

        alert(tab_index);
        this.setState({
            tab_index: tab_index
        })
    }

    render() {

        const items = [
            { index: 1, title: "Send Money", thumb_img: require("../../resources/send_money.png") },
            { index: 2, title: "Buy Airtime", thumb_img: require("../../resources/buy_airtime.png") },
            { index: 3, title: "Cash Out", thumb_img: require("../../resources/cash_out.png") },
            { index: 4, title: "Make Payment", thumb_img: require("../../resources/make_payment.png") },
            { index: 5, title: "Request Payment", thumb_img: require("../../resources/request_payment.png") },
            { index: 6, title: "Refer a Friend", thumb_img: require("../../resources/refer_friend.png") }
        ]

        return (
            <View style={{flex: 1}}>

                <View style={[{alignItems: 'center', marginTop: -160, marginLeft: -15, height: 355}]}>
                    <Image source={ require('../../resources/header_bg.png') } style={{height: 355}}/>

                    <View style={{position: 'absolute', top: 205, bottom: 0, width: 130, alignItems: 'center', paddingLeft: 15}}>
                        <Image source={ require('../../resources/avatar.png') } style={{resizeMode: 'stretch', width: 55, height: 55}}/>
                        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 8}}>Ahmed Nayef</Text>
                        <Text style={{fontSize: 13, color: 'white'}}>Personal</Text>
                        <View style={[{width: 130, height: 35, backgroundColor: 'white', borderRadius: 17.5, marginTop: 7}, styles.elevationLow]}>
                            <Text style={{flex: 1, fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>$ 50,000</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.gridWrap}>
                    <GridView
                        itemDimension={deviceWidth / 3 - 15}
                        items={items}
                        spacing={15}
                        renderItem={(item, index) => (
                            <TouchableOpacity onPress={() => this.pushScreen(index)}>
                                <HomeItem item={item} />
                            </TouchableOpacity>
                        )}/>
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
            elevation: 2,
          },
        }),
    },    
});