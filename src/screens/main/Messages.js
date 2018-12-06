import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, Dimensions} from 'react-native';

import TabItem from '../../components/TabItem';
import MessageItem from '../../components/MessageItem';

const deviceWidth = Dimensions.get('window').width

const messageList = [
    {
        index: 1,
        avatar: require('../../resources/avatar.png'),
        title: "Cash In",   
        description: "You have received money from Jacob E. Miller successfull.",
        sub: "Your current Balance $3000.00",
        value: "+$1200"
    },
    {
        index: 2,
        avatar: require('../../resources/avatar.png'),
        title: "Send Money",   
        description: "You have received money from Sami Rahmn successfull.",
        sub: "Your current Balance $2500.00",
        value: "+$1200"
    },
    {
        index: 3,
        avatar: require('../../resources/avatar.png'),
        title: "Payment",   
        description: "You have received money from John successfull.",
        sub: "Your current Balance $1000.00",
        value: "+$1200"
    },
    {
        index: 4,
        avatar: require('../../resources/avatar.png'),
        title: "Cash Out",   
        description: "You have received money from Marco successfull.",
        sub: "Your current Balance $2000.00",
        value: "+$1200"
    }, 
    {
        index: 5,
        avatar: require('../../resources/avatar.png'),
        title: "Buy Airtime",   
        description: "You have received money from James. Miller successfull.",
        sub: "Your current Balance $5000.00",
        value: "+$1200"
    } 
]

export default class Messages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navigation: props.navigation,
            messages: messageList
        }
    }

    pushScreen = (item) => {
        this.state.navigation.navigate('CashIn', {title: item.title})
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 50, textAlign: 'center'}}>Messages</Text>

                <View style={{flex: 1, marginTop: 15}}>
                    <FlatList
                        data={this.state.messages}
                        keyExtractor={(item, index) => item.index}
                        renderItem={({item}) => <TouchableOpacity
                            onPress={() => this.pushScreen(item)}>
                            <MessageItem title={item.title} sub={item.sub} description={item.description} avatar={item.avatar} value={item.value}/>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
        )
    }
}
