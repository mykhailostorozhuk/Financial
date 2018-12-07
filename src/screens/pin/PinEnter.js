import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

var listPages = new Array();

var str_pin = ""

import Header from '../../components/Header';

export default class PinEnter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_pin : false,
            second_pin : false,
            third_pin : false,
            four_pin : false
        }
    }

    static navigationOptions = {
        header: null
    }

    onActionLogin = () => {
        this.props.navigation.navigate("Login")
    }

    onPinInput = (number, index) => {

        var value = -1

        if (index == 3) {
            if (number != 10 && number != 12) {
                value = 0
            }
        } else {
            value = number
        }

        str_pin = str_pin.concat("" + value + "")

        if (str_pin.length == 1) {
            this.setState({
                first_pin: true
            })
        } else if (str_pin.length == 2) {
            this.setState({
                second_pin: true
            })
        } else if (str_pin.length == 3) {
            this.setState({
                third_pin: true
            })
        } else if (str_pin.length == 4) {
            this.setState({
                four_pin: true
            })
        } 

        if (str_pin.length == 4) {
            // alert(str_pin)

            this.props.navigation.navigate("Main")
        }
    }

    onSignInCallback() {
        this.props.navigation.navigate("Login")
    }

    renderItem(index) {
        
        return (
            <View style={styles.view}>
                <TouchableOpacity onPress={() => this.onPinInput(1 + 3*index, index)}>
                    <View style={{width: 66.3, paddingLeft: 5}}>
                        <Text style={styles.button}>{ (index != 3) ? 1 + 3*index : ""}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPinInput(2 + 3*index, index)}>
                    <View style={{width: 66.3, alignItems: 'center'}}>
                        <Text style={styles.button}>{(index != 3) ? 2 + 3*index : "0"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPinInput(3 + 3*index, index)}>
                    <View style={{width: 66.3, paddingLeft: 5}}>
                        <Text style={[styles.button, {textAlign: 'right'}]}>{(index != 3) ? 3 + 3*index : ""}</Text>
                    </View>                        
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        listPages = new Array();
        for (let index = 0; index < 4; index++) {
            listPages.push(this.renderItem(index));
        }

        return (
            <View style={{flex: 1}}>
                <Header title={"Sign In"} callback={this.onSignInCallback.bind(this)} />

                <View style={{height: 40, marginTop: 20}}>
                    <Text style={{flex: 1, fontSize: 20, textAlign: 'center', paddingTop: 10}}>Enter Your PIN Number</Text>
                </View>

                <View style={{height: 40, marginTop: 15, width: 200, flexDirection: 'row', alignSelf: 'center'}}>
                    <View style={styles.pin_view}>
                        <Image source={ require('../../resources/pin_bg.png') } style={styles.pin_bg}/>
                        { (this.state.first_pin) ? <Image source={ require('../../resources/pin_input.png') } style={styles.pin_input}/> : null }
                    </View>
                    <View style={styles.pin_view}>
                        <Image source={ require('../../resources/pin_bg.png') } style={styles.pin_bg}/>
                        { (this.state.second_pin) ? <Image source={ require('../../resources/pin_input.png') } style={styles.pin_input}/> : null }
                    </View>
                    <View style={styles.pin_view}>
                        <Image source={ require('../../resources/pin_bg.png') } style={styles.pin_bg}/>
                        { (this.state.third_pin) ? <Image source={ require('../../resources/pin_input.png') } style={styles.pin_input}/> : null }
                    </View>
                    <View style={styles.pin_view}>
                        <Image source={ require('../../resources/pin_bg.png') } style={styles.pin_bg}/>
                        { (this.state.four_pin) ? <Image source={ require('../../resources/pin_input.png') } style={styles.pin_input}/> : null }
                    </View>                    
                </View>
                
                <View style={{flex: 1, flexDirection: 'column', width: 200, marginTop: 10, marginBottom: 40, alignSelf: 'center'}}>
                    {listPages}
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    pin_view: {
        width: 50, alignItems: 'center'
    },
    pin_bg: {
        height: 40, width: 40
    },
    pin_input: {
        position: 'absolute', left: 19, top: 14, height: 12, width: 12
    },
    view: {
        flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center'
    },
    button: {
        height: 40, width: 40, textAlign: 'center', paddingTop: 10, fontSize: 20
    }
});