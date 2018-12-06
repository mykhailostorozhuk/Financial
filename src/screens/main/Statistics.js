import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, Dimensions, processColor} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

const messageList = [
    {
        index: 1,
        title: "Make Payment",   
        description: "There are many variations of passages of Lorem lpsum.",
        value: "+$1200",
        date: "15/08/2018"
    },
    {
        index: 2,
        title: "Received Money",   
        description: "There are many variations of passages of Lorem lpsum.",
        value: "+$1200",
        date: "18/08/2018"        
    }
]

export default class Statistics extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navigation: props.navigation,
            legend: {
                enabled: true,
                textSize: 14,
                form: "SQUARE",
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true
              },
              data: {
                dataSets: [{
                  values: [5, 40, 77, 81, 43, 50, 25],
                  label: 'Company A',
                  config: {
                    drawValues: false,
                    colors: [processColor('#BBA7F6')],
                  }
                }, {
                  values: [40, 5, 50, 23, 79, 95, 50],
                  label: 'Company B',
                  config: {
                    drawValues: false,
                    colors: [processColor('#F6B6D9')],
                  }
                }],
                config: {
                  barWidth: 0.2,
                  group: {
                    fromX: 0,
                    groupSpace: 0.2,
                    barSpace: 0.2,
                  },
                }
              },
              xAxis: {
                valueFormatter: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                granularityEnabled: true,
                granularity: 1,
                axisMaximum: 7,
                axisMinimum: 0,
                centerAxisLabels: true
              },
        
              marker: {
                enabled: true,
                markerColor: processColor('#F0C0FF8C'),
                textColor: processColor('white'),
                markerFontSize: 14,
              },
        };
    }

    componentDidMount() {
        this.setState({...this.state, highlights: [{x: 1, y:40}, {x: 2, y:50}]})
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
          this.setState({...this.state, selectedEntry: null})
        } else {
          this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    
        console.log(event.nativeEvent)
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 50, textAlign: 'center'}}>Statistics</Text>

                <View style={[{height: 250, backgroundColor: 'white', marginLeft: 20, marginRight: 20, borderRadius: 10, marginTop: 20}, styles.elevationLow1]}>    
                    <View style={{flexDirection: 'row', height: 75}}>
                        <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, height: 75, justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Transaction Overview</Text>
                            <Text style={{color: '#262E49', fontSize: 12, marginTop: 10}}>Showing This Weekly Transaction</Text>
                        </View>
                        
                        <View style={{flexDirection: 'column', marginRight: 15, height: 75, justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#BBA7F6'}} />
                                <Text style={{fontSize: 13, marginLeft: 5}}>Received</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#F6B6D9'}} />
                                <Text style={{fontSize: 13, marginLeft: 5}}>Sent</Text>
                            </View>
                        </View> 
                    </View>

                    <BarChart
                        style={{flex: 1}}
                        xAxis={this.state.xAxis}
                        data={this.state.data}
                        legend={this.state.legend}
                        drawValueAboveBar={false}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={(event) => console.log(event.nativeEvent)}
                        highlights={this.state.highlights}
                        marker={this.state.marker}
                    />
                    
                </View>

                <View style={[{height: 80, justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', margin: 20}, styles.elevationLow1]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, height: 75}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Make Payment</Text>
                            <Text style={{color: '#262E49', fontSize: 12, marginTop: 10}}>There are many variations of passages of Lorem lpsum.</Text>
                        </View>
                        
                        <View style={{flexDirection: 'column', marginRight: 15, height: 75}}>
                            <Text style={{fontSize: 12, textAlign: 'right'}}>18/08/2018</Text>
                            <Text style={{fontSize: 15, textAlign: 'right', marginTop: 5}}>-$1200</Text>
                            <Text style={{fontSize: 12, textAlign: 'right', marginTop: 20, color: '#F6B6D9'}}>Sent</Text>
                        </View>                        
                    </View>                   
                </View>

                <View style={[{height: 80, justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', marginLeft: 20, marginRight:20}, styles.elevationLow1]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, height: 75}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>Received Payment</Text>
                            <Text style={{color: '#262E49', fontSize: 12, marginTop: 10}}>There are many variations of passages of Lorem lpsum.</Text>
                        </View>
                        
                        <View style={{flexDirection: 'column', marginRight: 15, height: 75}}>
                            <Text style={{fontSize: 12, textAlign: 'right'}}>15/08/2018</Text>
                            <Text style={{fontSize: 15, textAlign: 'right', marginTop: 5}}>+$500</Text>
                            <Text style={{fontSize: 12, textAlign: 'right', marginTop: 20, color: '#BBA7F6'}}>Received</Text>
                        </View>                        
                    </View>                   
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    elevationLow1: {
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
});