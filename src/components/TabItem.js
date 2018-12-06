import React, { Component } from 'react';
import { View, Platform, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

const deviceWidth = Dimensions.get('window').width

export default class TabItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab_index: props.tab_index
        };
    }

    pushScreen = (index) => {
        
        if (this.props.callback) {
            this.props.callback(index);
        }

        this.setState({
            tab_index: index
        })
    }

    render() {

        let { tab_index } = this.state;
        
        return (
            <View style={[styles.bottom_tabbar, styles.elevationLow]}>
                <TouchableOpacity onPress={() => this.pushScreen(0)}>
                    <View style={{width: (deviceWidth - 40) / 4, alignItems: 'center'}}>
                        { (tab_index === 0) ? <Image source={ require('../resources/home_active.png') } style={styles.active}/> :
                        <Image source={ require('../resources/home_deactive.png') } style={[styles.deactive, {width: 25, height: 25}]}/>}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.pushScreen(1)}>
                    <View style={{width: (deviceWidth - 40) / 4, alignItems: 'center'}}>
                        { (tab_index === 1) ? <Image source={ require('../resources/message_active.png') } style={styles.active}/> :
                        <Image source={ require('../resources/message_deactive.png') } style={{marginTop: 32, width: 25, height: 23}}/>}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.pushScreen(2)}>
                    <View style={{width: (deviceWidth - 40) / 4, alignItems: 'center'}}>
                        { (tab_index === 2) ? <Image source={ require('../resources/statement_active.png') } style={styles.active}/> :
                        <Image source={ require('../resources/statement_deactive.png') } style={{marginTop: 29, width: 22, height: 26}}/>}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.pushScreen(3)}>
                    <View style={{width: (deviceWidth - 40) / 4, alignItems: 'center'}}>
                        { (tab_index === 3) ? <Image source={ require('../resources/more_active.png') } style={styles.active}/> :
                        <Image source={ require('../resources/more_deactive.png') } style={{marginTop: 36, width: 21, height: 19}}/>}
                    </View>                    
                </TouchableOpacity>
            </View>
        );
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
    bottom_tabbar: {
        flexDirection: 'row', position: 'absolute', left: 20, right: 20, bottom: 20, height: 70, borderRadius: 20, backgroundColor: 'white'
    },
    active: {
        height: 64, width: 64
    },
    deactive: {
        marginTop: 30, width: 25, height: 25
    },
});