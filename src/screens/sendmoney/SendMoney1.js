import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, Platform} from 'react-native';

import Header1 from '../../components/Header1';
import Button from '../../components/Button';

const deviceWidth = Dimensions.get('window').width

export default class SendMoney1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prepaid: 1
        }
    }

    static navigationOptions = {
        header: null
    }

    onHandledCallback() {
        this.props.navigation.navigate("Success")
    }

    onChooseType = (index) => {
        this.setState({
            prepaid: index
        })
    }

    render() {

        const {navigation} = this.props
        let title = navigation.state.params.title
        var item = navigation.state.params.item

        return (
            <View style={{flex: 1}}>
                <Header1 title={title} navigation={this.props.navigation} />

                <View style={[{height: 360, margin: 20, borderRadius: 10, backgroundColor: 'white'}, styles.elevationLow1]}>
                    <View style={{height: 65, marginLeft: 10, marginRight: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 65}}>
                            <Image source={ item.avatar } style={{ height: 30, width: 30, marginLeft: 15 }} />   
                            <View style={{flex: 1, flexDirection: 'column', height: 65, justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 15}}>{item.name}</Text>
                                <Text style={{marginLeft: 15, fontSize: 14, marginTop: 3, color: '#262E49'}}>{item.phone}</Text>
                            </View> 
                            <Image source={ require('../../resources/error.png') } style={{ height: 18, width: 18, marginRight: 15 }} />   
                        </View>
                    </View>                   

                    <Text style={{fontWeight: 'bold', fontSize: 13, marginLeft: 25, marginTop: 10}}>Enter Your Amount</Text>

                    <View style={[styles.user_infor, {marginTop: 25}]}>
                        <TextInput style={[styles.text_input, styles.viewSpace]}
                            underlineColorAndroid = "transparent"
                            placeholder = "$100"
                            placeholderTextColor = "grey"
                            autoCapitalize = "none" />
                    </View>

                    <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 25, marginRight: 25}}>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Amount</Text>
                            <Text style={styles.text}>$100.00</Text>
                        </View>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Charge</Text>
                            <Text style={styles.text}>$0.00</Text>
                        </View>
                        <View style={styles.date_view}>
                            <Text style={[styles.text, {fontWeight: 'bold'}]}>Total</Text>
                            <Text style={styles.text}>$100.00</Text>
                        </View>
                    </View>

                    { (title === "Send Money") ? 
                        <View style={{height: 60, marginTop: 20}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{flex: 1, fontWeight: 'bold', fontSize: 13, marginLeft: 25}}>Reference</Text>
                                <Text style={{fontSize: 12, marginTop: 3, color: '#262E49', marginRight: 25}}>0/25</Text>
                            </View>
                            <View style={[styles.user_infor, {marginLeft: 25}]}>
                                <TextInput style={{marginTop: 4}}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Tap to add a note"
                                    placeholderTextColor = "grey"
                                    autoCapitalize = "none" />
                            </View>
                        </View> :
                        <View style={{height: 60, marginTop: 20}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13, marginLeft: 25}}>Select Type</Text>
                            <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                                <Text style={{flex: 1, fontSize: 11, marginLeft: 25, color: '#262E49'}}>Select operator type</Text>
                                <TouchableOpacity onPress={() => this.onChooseType(1)}>
                                    <View style={ (this.state.prepaid == 1) ? styles.sel_btn : styles.un_sel_btn}>
                                        <Text style={[{fontSize: 13, color: '#F4AED4'}]}>Prepaid</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onChooseType(0)}>
                                    <View style={[(this.state.prepaid == 0) ? styles.sel_btn : styles.un_sel_btn, {marginLeft: 10, marginRight: 15}]}>
                                        <Text style={[{fontSize: 13, color: '#F4AED4'}]}>Postpaid</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                    <View style={[styles.user_infor, {marginLeft: 25, marginRight: 25, marginTop: 5}]}>
                        <TextInput style={{flex: 1, marginTop: 4, textAlign: 'center', height: 40}}
                            underlineColorAndroid = "transparent"
                            placeholder = "Enter Your Pin"
                            placeholderTextColor = "grey"
                            autoCapitalize = "none" />
                    </View>
                </View>

                <Button customContainer={{width: deviceWidth - 40, height: 50, marginLeft: 10, marginRight: 20}} customStyleBtn={{top: 15}} title={"Send Money"} callback={this.onHandledCallback.bind(this)} />
            </View>
        )
    }


}
const styles = StyleSheet.create({
    elevationLow1: {
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: .1,
            shadowRadius: 1,    
          },
          android: {
            elevation: 5,
          },
        }),
    },
    line: {
        height: .3, width: deviceWidth - 90, marginLeft: 25, backgroundColor: '#262E49'
    },
    text_input: {
        flex: 1, 
        height: 40,
        marginLeft: 16, 
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    user_infor: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    viewSpace: {
        marginLeft: 30,
        marginRight: 30
    },
    date_view: {
        flexDirection: 'column', height: 35, width: (deviceWidth - 100) / 3, alignItems: 'center' 
    },
    text: {
        flex: 1, fontSize: 11
    },
    sel_btn: {
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 30, 
        backgroundColor: '#FBE9F3',
        width: 80,
        height: 35
    },
    un_sel_btn: {
        justifyContent: 'center', 
        alignItems: 'center',
        height: 35, 
        width: 80,
        borderRadius: 30, 
        borderWidth: .5, 
        borderColor: '#FBE9F3',
        backgroundColor: 'white'        
    },
});