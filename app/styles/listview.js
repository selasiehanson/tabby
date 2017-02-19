import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';

const colors = {
    blue: '#673AB7',
    white: "#FFFFFF",
}
const listViewStyles = StyleSheet.create({
    rowSeparator: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 0,
        marginLeft: 0
    },
    rowSeparatorHighlighted: {
        opacity: 0.0
    },
    separator: {
        backgroundColor: '#eeeeee',
        height: 1,
    },
    header: {
        backgroundColor: colors.blue,
        alignSelf: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5
    },
    headerText: {
        fontSize: 20,
        color: colors.white,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 0
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default listViewStyles;