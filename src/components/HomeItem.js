import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions, Platform} from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const HomeItem = (props) => {

    return (
        <View style={[style.card, style.elevationLow]}>
            <Image style={{resizeMode: 'stretch', width: 50, height: 50, marginLeft: 20}} source={ props.item.thumb_img }/>
            <Text style={[{fontSize: 13, paddingTop: 8, marginLeft: 20}]}>{ props.item.title }</Text>
        </View>
    )
};

const style = StyleSheet.create({
    card: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: (deviceHeight - 355) / 3,
        borderRadius: 10
    },
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
    }
});
