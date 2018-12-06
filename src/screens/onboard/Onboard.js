import React, { Component } from "react";
import { View, Text, Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import Swiper from '../../components/Swiper';
import Button from '../../components/Button';

var deviceWidth = Dimensions.get('window').width;

let dataOnboarding = [
    {
        title: "Smart Wallet",
        img_link: require('../../resources/onboard1.png'),
        description: "There are many variations of passages of Lorern Lpsum available, but the majority have suffered alteration in"
    },
    {
        title: "Track Statements",
        img_link: require('../../resources/onboard2.png'),
        description: "There are many variations of passages of Lorern Lpsum available, but the majority have suffered alteration in"
    },
    {
        title: "Pay Anywhere",
        img_link: require('../../resources/onboard3.png'),
        description: "There are many variations of passages of Lorern Lpsum available, but the majority have suffered alteration in"
    }
];
export default class Onboard extends Component {
    constructor() {
        super();
        
        this.state = {
            index: 0
        };
    }
    static navigationOptions = {
        header: null
    }

    onHandledCallback() {
        this.props.navigation.navigate("Login")
    }

    renderItem(item) {
        return (
            <View key={item.title} style={styles.slide}>
                <View>
                    <Image source={ item.img_link } style={{resizeMode: 'stretch', height: 200, width: deviceWidth - 100}}/>
                </View>
                <Text style={{color: '#190310', fontWeight: 'bold', fontSize: 25, marginTop: 50}}>{item.title}</Text>
                <Text style={{width: 350, textAlign: 'center', marginTop: 15, fontSize: 12, color: '#262E49', lineHeight: 20}}>{item.description}</Text>
            </View>
        );
    }
    onMomentumScrollEnd(e, state, content) {
        this.setState({
            index: state.index
        })
    }
    render() {
        let listPages = dataOnboarding.map((item) => {
            return this.renderItem(item);
        });
        let { index } = this.state;
        
        return (<View style={styles.container}>
            <Swiper
                activeDotColor={"#BBA7F6"}
                style={styles.wrapper}
                showsButtons={false}
                onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                ref="Swiper" >
                {listPages}
            </Swiper>
            <View style={styles.containerFooter}>
                <Button customContainer={{width: deviceWidth - 2 * 30, height: 50}} customStyleBtn={{top: 15}} title={"Get Started"} callback={this.onHandledCallback.bind(this)} />
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    wrapper: {
        flex: 1
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 100
    },
    containerFooter: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 150,
        left: 0,
        right: 0,
    }
});