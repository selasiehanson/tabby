import React, { Component } from 'react';

import {
    StyleSheet
} from 'react-native';

let eventStyles = StyleSheet.create({
    cellContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#FFF",

    },
    cellImage: {
        height: 80,
        width: 60,
        marginRight: 8,
        resizeMode: 'contain'
    },
    cellTextContainer: {
        flex: 1
    },
    eventDate: {
        backgroundColor: "#F6F6F6",
        padding: 8,
        fontSize: 12,
        fontWeight: '600',
        flex: 1
    },
    eventTime: {
        width: 70
    },
    event: {
        fontSize: 12,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 18,
        paddingBottom: 18,
        color: '#999',

    },
    eventTitle: {
        flex: 1,
        paddingLeft: 0
    },
    mediaYear: {
        fontWeight: 'bold'
    },
    border: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 1
    }
});

export default eventStyles;  