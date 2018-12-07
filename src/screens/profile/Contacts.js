import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Platform} from 'react-native';

import AlphabetListView from 'react-native-alphabetlistview';

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

class SectionHeader extends Component {
    render() {
      // inline styles used for brevity, use a stylesheet when possible
      var textStyle = {
        textAlign:'center',
        fontWeight:'700',
        fontSize:16
      };
  
      var viewStyle = {
        height: 30,
        backgroundColor: '#ccc',
        marginLeft: 20, 
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      };
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>{this.props.title}</Text>
        </View>
      );
    }
  }
  
  class SectionItem extends Component {
    render() {
        return (
            <Text style={{color:'#00'}}>{this.props.title}</Text>
        );
    }
  }
  
  class Cell extends Component {
    render() {

        console.log("Cell value: " + JSON.stringify(this.props));

        return (
            <View style={{height: 75, marginLeft: 20, marginRight: 20}}>
                <View style={{height: 5}} />
                <View style={[{height: 65, justifyContent: 'center', borderRadius: 10, backgroundColor: 'white'}, styles.elevationLow1]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={ require('../../resources/avatar.png') } style={{ height: 30, width: 30, marginLeft: 15 }} />   
                        <View style={{flexDirection: 'column', height: 65, justifyContent: 'center'}}>
                            <Text style={{fontSize: 17, marginLeft: 15, fontFamily: "HelveticaNeue"}}>{this.props.item[0]}</Text>
                            <Text style={{marginLeft: 15, fontSize: 14, marginTop: 3, color: '#262E49', fontFamily: "HelveticaNeue"}}>{this.props.item[1]}</Text>
                        </View> 
                    </View>
                </View>
            </View>
        );
    }
  }

  export default class Contacts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: userList,
            temp: userList,
            data: {
                // A: [],
                // B: [],
                // C: [],
                // D: [],
                // E: [],
                F: [['Floyd D. Robinson', '937-719-9926']],
                // G: [],
                // H: [],
                // I: [],
                J: [['Jacob E. Miller', '716-646-8757'], ['James J. Lomeli', '541-549-7092'], ['Joseph S. Wiggins', '651-792-1528']],
                // K: [],
                // L: [],
                M: [['Mickie T. Sweeney', '616-822-8433']],
                // N: [],
                // O: [],
                // P: [],
                // Q: [],
                R: [['Ruth T. Drew', '949-600-8457']],
                S: [['Susan J. Brendel', '920-622-1118']],
                T: [['Tomas D. Pugh', '620-285-1959']],
                // U: [],
                // V: [],
                // W: [],
                // X: [],
                // Y: [],
                // Z: [],
            }
        }
    }

    static navigationOptions = {
        header: null
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

        return (
            <View style={{flex: 1}}>
                <Header1 title={"Contacts"} navigation={this.props.navigation} />

                <View style={styles.search_view}>
                    <View style={styles.view_round}>
                    <View style={styles.search_icon} >
                        <Image source={require('../../resources/search.png')} style={{width: 16, height: 16}}/>
                    </View>
                    <TextInput style={{flex: 1, height: 40, fontSize: 12, fontFamily: "HelveticaNeue"}}
                        underlineColorAndroid = "transparent"
                        placeholder = "Search by names and numbers"
                        placeholderTextColor = "#afafaf"
                        autoCapitalize = "none"
                        onChangeText={this.onSort.bind(this)} />
                    </View>
                </View>

                <View style={{flex: 1, marginTop: 15}}>
                    {/* <FlatList
                        data={this.state.users}
                        keyExtractor={(item, index) => item.index}
                        renderItem={({item}) => <UserItem name={item.name} avatar={item.avatar} phone={item.phone} /> }
                    /> */}

                    <AlphabetListView
                        data={this.state.data}
                        cell={Cell}
                        cellHeight={75}
                        sectionListItem={SectionItem}
                        sectionHeader={SectionHeader}
                        sectionHeaderHeight={30}  />
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
    elevationLow1: {
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

