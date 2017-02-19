import React, { Component } from 'react';
import { leftPad } from '../utils/StringUtils';
import moment from 'moment';

import {
    Text,
    View,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import eventStyles from '../styles/event'

export default class MediaCell extends Component {
    render() {
        let {date, data} = this.props.event;
        date = moment(date).format("MMM Do, YYYY");
        let eventsForTheDay = data.map((x, idx) => {
            let d = new Date(x.startDate);
            let hours = leftPad(d.getHours().toString(), '0', 2);
            let mins = leftPad(d.getMinutes().toString(), '0', 2);
            let time = `${hours} : ${mins}`;
            return (
                <View key={idx}>
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
            )
        });

        return (
            <View style={eventStyles.cellContainer}>

                <View style={eventStyles.cellTextContainer}>
                    <View>
                        <Text style={eventStyles.eventDate} numberOfLines={1}>
                            {date}
                        </Text>
                    </View>
                    <View style={eventStyles.border}>
                    </View>
                    {eventsForTheDay}

                </View>
            </View>
        )
    }
}