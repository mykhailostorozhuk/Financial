import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Platform} from 'react-native';

import Header1 from '../../components/Header1';

var listPages = new Array();
const list = [
    {
        index: 1,
        title: "Account Settings"   
    },
    {
        index: 2,
        title: "Change Name"
    },
    {
        index: 3,
        title: "Change Picture"
    } 
]

export default class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notification: true,
            sound: false
        }
    }

    static navigationOptions = {
        header: null
    }

    pushScreen = (index) => {

        // let route = ""
        // switch(index) {
        //     case 1:
        //         route = "Settings"
        //         break;
        //     case 2:
        //         route = "Contacts"
        //         break;
        //     case 3:
        //         route = "ChangePin"
        //         break;
        // }

        // this.state.navigation.navigate(route)
    }

    setNotification = (status) => {
        let new_value = !status
        this.setState({
            notification: new_value
        })   
    }

    setSound = (status) => {
        let new_value = !status
        this.setState({
            sound: new_value
        })   
    }

    renderItem(item) {
        
        return (
            <TouchableOpacity onPress={() => this.pushScreen(item.index)}>
                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <Text style={{flex: 1, fontWeight: 'bold', fontSize: 13, marginLeft: 25}}>{item.title}</Text>
                    <Image source={ require('../../resources/arrow_right.png') } style={{ height: 17, width: 9, marginRight: 25 }} />    
                </View>
            </TouchableOpacity>
        );
    }

    render() {

        listPages = list.map((item) => {
            return this.renderItem(item);
        });    

        return (
            <View style={{flex: 1}}>
                <Header1 title={"Settings"} navigation={this.props.navigation} />

                <View style={[{height: 150, backgroundColor: 'white', marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: 20}, styles.elevationLow]}>    
                    {listPages}
                </View>

                <View style={[{height: 150, backgroundColor: 'white', marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: 20}, styles.elevationLow]}>    
                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <Text style={{flex: 1, fontWeight: 'bold', fontSize: 13, marginLeft: 25}}>Notifications</Text>
                        <TouchableOpacity onPress={() => this.setNotification(this.state.notification)}>
                            <Image source={ (this.state.notification) ? require('../../resources/switch_on.png') : require('../../resources/switch_off.png') } style={{ height: 22, width: 36, marginRight: 15 }} />    
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <Text style={{flex: 1, fontWeight: 'bold', fontSize: 13, marginLeft: 25}}>Notifications Sound</Text>
                        <TouchableOpacity onPress={() => this.setSound(this.state.sound)}>
                            <Image source={ (this.state.sound) ? require('../../resources/switch_on.png') : require('../../resources/switch_off.png') } style={{ height: 22, width: 36, marginRight: 15 }} />    
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                        <Text style={{flex: 1, fontWeight: 'bold', fontSize: 13, marginLeft: 25}}>Terms of Services</Text>
                        <Image source={ require('../../resources/arrow_right.png') } style={{ height: 17, width: 9, marginRight: 25 }} />    
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    elevationLow: {
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