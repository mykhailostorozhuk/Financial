import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            hidden: props.hidden,
            customStyleBtn: props.customStyleBtn,
            customStyleText: props.customStyleText,
            customContainer: props.customContainer
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.hidden !== this.state.hidden) {
            this.setState({
                hidden: nextProps.hidden
            });
        }
        if (nextProps.title !== this.state.title) {
            this.setState({
                title: nextProps.title
            });
        }
    }
    onPress() {
        if (this.props.callback) {
            this.props.callback();
        }
    }
    render() {
        let { title, hidden } = this.state;
        return (<View style={[styles.container, this.state.customContainer ? this.state.customContainer : null]}>
                <Image source={ require('../resources/btn_bg.png') } style={[this.state.customContainer]}/>
                <TouchableOpacity style={[styles.button, this.state.customStyleBtn ? this.state.customStyleBtn : null, this.state.hidden ? {backgroundColor: '#9d9d9d'} : null]} onPress={this.onPress.bind(this)}>
                    <Text style={[styles.title, this.state.customStyleText ? this.state.customStyleText : null]}>{title}</Text>
                </TouchableOpacity>
        </View>);
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});