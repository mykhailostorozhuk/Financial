import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform, Dimensions} from 'react-native';

import TabItem from '../../components/TabItem';

import Home from './Home';
import Messages from './Messages';
import Statistics from './Statistics';
import Profile from './Profile';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tab_index: 0
        }
    }

    static navigationOptions = {
        header: null
    }

    onHandledCallback(tab_index) {

        this.setState({
            tab_index: tab_index
        })
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <View style={{flex: 1, marginBottom: 100}}>
                    { (this.state.tab_index == 0) ? <Home navigation={this.props.navigation} /> : ((this.state.tab_index == 1) ? <Messages navigation={this.props.navigation} /> : ((this.state.tab_index == 2) ? <Statistics navigation={this.props.navigation} /> : <Profile navigation={this.props.navigation} />)) }
                </View>

                <TabItem tab_index={this.state.tab_index} callback={this.onHandledCallback.bind(this)} />
            </View>
        )
    }
}
