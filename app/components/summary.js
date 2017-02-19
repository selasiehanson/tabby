import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    ScrollView,
    View
} from 'react-native';
import { LocalData } from './data/sampledata';
import { leftPad } from '../utils/StringUtils';
import listViewStyles from '../styles/listview';
import eventStyles from '../styles/event'

class TodaysEvents extends Component {

    constructor(){
        super()
        let ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        let dataSource = ds.cloneWithRows(this.getData());

        this.state = {
            dataSource: dataSource
        }
    }
    renderRow(x, sectionId, rowId) {
        let d = new Date(x.startDate);
        let hours = leftPad(d.getHours().toString(), '0', 2);
        let mins = leftPad(d.getMinutes().toString(), '0', 2);
        let time = `${hours} : ${mins}`;
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[eventStyles.eventTime, eventStyles.event]}>
                        {time}
                    </Text>
                    <Text style={[eventStyles.event, eventStyles.eventTitle]} numberOfLines={2}>
                        {x.title}
                    </Text>
                </View>
                <View style={eventStyles.border}>
                </View>
            </View> 
        );
    }

 renderSeparator(
        sectionId,
        rowId,
        adjacentRowHighlighted
    ) {
        return (
            <View
                key={"SEP_" + sectionId + "_" + rowId}
                style={[listViewStyles.rowSeparator, adjacentRowHighlighted &&
                    listViewStyles.rowSeparatorHighlighted]}
                />
        );
    }

    getData(){
        let data = LocalData.events.filter((e, i) => i < 6);
        console.log(data)
        return data;
    }

    render() {
        let {dataSource} = this.state;                    
        return (
            <View style={[eventStyle.container, cardStyle.cardcontainer]}>
                <View style={[prayerStyles.miniCaptionDateContainer,{paddingLeft: 5}]}>
                    <Text  style={prayerStyles.miniCaption}> What's happening at ridge today.</Text>
                </View>

                <ListView dataSource={dataSource}
                    style={{ flex: 1, alignSelf: 'stretch' }}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                />  
            </View>
        );
    }
}

const colors = {
    blue: '#673AB7',
    white: "#FFFFFF",
}

const TodaysPrayer = () => {
    return (
        <View style={[prayerStyles.container, cardStyle.cardcontainer]}>
            <View style={prayerStyles.miniCaptionDateContainer}>
                <Text  style={prayerStyles.miniCaption}> Prayer for today. </Text>
                <Text style={prayerStyles.date}> Tues 2nd Nov, 2016 </Text>             
            </View>
            
            <Text style={prayerStyles.caption}> Prayer for the nation </Text>
            <View> 
                <Text style={prayerStyles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. 
                </Text>                
            </View>
            <View style={prayerStyles.readingsContainer}> 
                <Text style={prayerStyles.readingsLabel}> Readings: </Text>
                <Text style={prayerStyles.readings}> Romans 12:19</Text>
            </View>
        </View>
    )
}

const MediationSummary = () => {
    return (
        <View style={[prayerStyles.container, cardStyle.cardcontainer]}>
            <View style={prayerStyles.miniCaptionDateContainer}>
                <Text  style={prayerStyles.miniCaption}>Meditation For the Month. </Text>                              
            </View>
            
            <Text style={prayerStyles.caption}> God can do the impossible </Text>
            <View> 
                <Text style={prayerStyles.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. 
                </Text>                
            </View>
            <View style={prayerStyles.readingsContainer}> 
                <Text style={prayerStyles.readingsLabel}> Readings: </Text>
                <Text style={prayerStyles.readings}> Luke 5:1-10</Text>
            </View>
        </View>
    );
}

export default class Summary extends Component {
    render() {
        return (
            <ScrollView style={scrollStyles.container}>
                <TodaysPrayer />
                <TodaysEvents />
                <MediationSummary />
            </ScrollView>
        );
    }
}

var cardStyle  = StyleSheet.create({
    cardcontainer: {
        shadowColor: 'darkgrey',        
        backgroundColor: 'white',
        borderColor: "#dedede",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.8,
        // shadowRadius: 1,
    }
});

var scrollStyles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: "#f1f1f1"
        //flexDirection: 'column'
    }
})

var eventStyle = StyleSheet.create({
    container: { 
        borderWidth: 1,
        padding:0,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    },
});

var prayerStyles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 5,
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10
    },
    miniCaptionDateContainer:  {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    miniCaption: {
        color: "#3a4277",
        fontSize: 12 ,
        
        fontWeight: 'bold'       
    },
    date: {
        alignSelf: 'flex-end',
        color: '#bb0026',
        fontSize: 12,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#4d4d4d"
    },
    content: {
        fontSize: 13,
        marginBottom: 5 
    },
    readingsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    readingsLabel: {
        fontSize: 12
    },
    readings: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 12
    }
});