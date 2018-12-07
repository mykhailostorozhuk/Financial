import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform, Dimensions, Alert} from 'react-native';

const deviceHeight = Dimensions.get('window').height

var listPages = new Array();
const settingsList = [
    {
        index: 1,
        icon: require('../../resources/settings.png'),
        title: "Settings"   
    },
    {
        index: 2,
        icon: require('../../resources/contacts.png'),
        title: "Contacts"
    },
    {
        index: 3,
        icon: require('../../resources/change_pin.png'),
        title: "Change Pin"
    },
    {
        index: 4,
        icon: require('../../resources/limits.png'),
        title: "Limits"
    }, 
    {
        index: 5,
        icon: require('../../resources/logout.png'),
        title: "Log Out"
    } 
]

export default class Profile extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            navigation: props.navigation,            
        }
    }

    pushScreen = (index) => {

        let route = ""

        if (index != 5) {
            switch(index) {
                case 1:
                    route = "Settings"
                    break;
                case 2:
                    route = "Contacts"
                    break;
                case 3:
                    route = "ChangePin"
                    break;
                case 4:
                    route = "Limits"
                    break;
            }
    
            this.state.navigation.navigate(route)    
        } else {
            // Alert.alert(
            //     'Confirm',
            //     'Are you sure you want to logout?',
            //     [
            //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            //       {text: 'OK', onPress: () => this.state.navigation.navigate("Login") },
            //     ],
            //     { cancelable: false }
            //   ) 
        }
        
    }

    renderItem(item, item_height) {
        
        return (
            <TouchableOpacity onPress={() => this.pushScreen(item.index)}>
                <View style={{flexDirection: 'row', height: item_height, alignItems: 'center'}}>
                    <Image source={ item.icon } style={{ height: 28, width: 28, marginLeft: 15 }} />    
                    <Text style={{flex: 1, fontSize: 15, marginLeft: 15, fontFamily: "HelveticaNeue"}}>{item.title}</Text>
                    <Image source={ require('../../resources/arrow_right.png') } style={{ height: 17, width: 9, marginRight: 15 }} />    
                </View>
            </TouchableOpacity>
        );
    }

    render() {

        let view_height = (deviceHeight - 155) / 2
        let item_height = view_height / 5

        listPages = settingsList.map((item) => {
            return this.renderItem(item, item_height);
        });    

        return (
            <View style={{flex: 1, flexDirection: 'column', marginTop: 55}}>
                <View style={[{height: view_height, backgroundColor: 'white', marginLeft: 20, marginRight: 20, borderRadius: 10}, styles.elevationLow]}>    
                    {listPages}
                </View>

                <View style={[{flex: 1, backgroundColor: 'white', marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: 15, paddingLeft: 15, paddingRight: 15}, styles.elevationLow]}>    
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 25, fontFamily: "Helvetica Neue"}}>About Us</Text>
                    <Text style={{color: '#262E49', fontSize: 14, marginTop: 20, lineHeight: 20, fontFamily: "HelveticaNeue"}}>There are many variations of passages of Lorem lpsum available, but the majority have suffered alteration in some form. By injected humour, or randomised words which don't look even slightly believable.</Text>

                    <Text style={{position: 'absolute', left: 0, right: 0, bottom: 20, fontSize: 12, color: '#262E49', textAlign: 'center', fontFamily: "HelveticaNeue"}}>Version 1.0</Text>
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
            elevation: 2,
          },
        }),
    },
});