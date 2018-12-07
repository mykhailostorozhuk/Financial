import React, { Component } from 'react';
import { View, Platform, Text, Dimensions, StyleSheet, Image } from 'react-native';

import Button from '../../components/Button';

var deviceWidth = Dimensions.get('window').width;

export default class Success extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onHandledCallback() {
        this.props.navigation.navigate("Main")
    }

    render() {
        
        return (
            <View style={styles.slide}>
                <View>
                    <Image source={ require('../../resources/success_bg.png') } style={{resizeMode: 'stretch', height: 200, width: deviceWidth - 100}}/>
                </View>
                <Text style={{color: '#190310', fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Payment Successful</Text>
                <Text style={[{width: 350, textAlign: 'center', marginTop: 15, fontSize: 12, color: '#262E49', lineHeight: 20}, (Platform.OS == "android") ? {paddingLeft: 15, paddingRight: 15} : null]}>There are many variations of passages of Lorem lpsum avaiable, but the majority have suffered alteration in</Text>

                <View style={{marginTop: 30}}>
                    <Button customContainer={{width: deviceWidth - 2 * 30, height: 50}} customStyleBtn={{top: 15}} title={"Back To Home"} callback={this.onHandledCallback.bind(this)} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 100
    },
});