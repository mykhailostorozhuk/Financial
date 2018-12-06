import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Platform} from 'react-native';

import Header1 from '../../components/Header1';
import UserItem from '../../components/UserItem';

const userList = [
    {
        index: 1,
        avatar: require('../../resources/avatar.png'),
        name: "Joseph S. Wiggins",   
        phone: "651-792-1528"
    },
    {
        index: 2,
        avatar: require('../../resources/avatar.png'),
        name: "Jacob E. Miller",   
        phone: "716-646-8757"
    },
    {
        index: 3,
        avatar: require('../../resources/avatar.png'),
        name: "James J. Lomeli",   
        phone: "541-549-7092"
    },
    {
        index: 4,
        avatar: require('../../resources/avatar.png'),
        name: "Mickie T. Sweeney",   
        phone: "616-822-8433"
    }, 
    {
        index: 5,
        avatar: require('../../resources/avatar.png'),
        name: "Floyd D. Robinson",   
        phone: "937-719-9926"
    },
    {
        index: 6,
        avatar: require('../../resources/avatar.png'),
        name: "Thomas D. Pugh",   
        phone: "620-285-1959"
    },
    {
        index: 7,
        avatar: require('../../resources/avatar.png'),
        name: "Ruth T. Drew",   
        phone: "949-600-8457"
    }, 
    {
        index: 8,
        avatar: require('../../resources/avatar.png'),
        name: "Susan J. Brendel",   
        phone: "920-622-1118"
    }  
]

export default class SendMoney extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: userList,
            temp: userList
        }
    }

    static navigationOptions = {
        header: null
    }

    pushScreen = (title, item) => {
        this.props.navigation.navigate("SendMoney1", {title: title, item: item})
    }

    onSort(e) {
        let text = e.toLowerCase()
    
        let fullList = this.state.temp;
    
        console.log("FEED DATA", fullList);
        let filteredList = fullList.filter((item) => { // search from a full list, and not from a previous search results list
          if(item.name.toLowerCase().match(text) || item.phone.toLowerCase().match(text))
            return item;
        })
        if (!text || text === '') {
          this.setState({
            users: fullList
        })
        } else if (!filteredList.length) {
         // set no data flag to true so as to render flatlist conditionally
           console.log("EMPTY DATA");
        }
        else if (Array.isArray(filteredList)) {
          this.setState({
            users: filteredList
          })
        }
    }

    render() {

        const {navigation} = this.props
        let title = navigation.state.params.title
        
        return (
            <View style={{flex: 1}}>
                <Header1 title={title} navigation={this.props.navigation} />

                <View style={styles.search_view}>
                    <View style={styles.view_round}>
                    <View style={styles.search_icon} >
                        <Image source={require('../../resources/search.png')} style={{width: 16, height: 16}}/>
                    </View>
                    <TextInput style={{flex: 1, height: 40}}
                        underlineColorAndroid = "transparent"
                        placeholder = "Search by names and numbers"
                        placeholderTextColor = "#afafaf"
                        autoCapitalize = "none"
                        onChangeText={this.onSort.bind(this)} />
                    </View>
                </View>

                <View style={{flex: 1, marginTop: 15}}>
                    <FlatList
                        data={this.state.users}
                        keyExtractor={(item, index) => item.index}
                        renderItem={({item}) => <TouchableOpacity
                            onPress={() => this.pushScreen(title, item)}>
                            <UserItem name={item.name} avatar={item.avatar} phone={item.phone}/>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    search_view: {
        height: 60,
        backgroundColor: 'white'
      },
      view_round: {
        flexDirection: 'row', 
        height: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 20,
        borderWidth: .3,
        borderColor: '#E7E8E9'
      },
      search_icon: {
        width: 75,
        alignItems: 'center',
        justifyContent: 'center'
      },
});