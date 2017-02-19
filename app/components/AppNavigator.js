import React, { Component } from 'react';
import {
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

import Landing from './Landing';
import Home from './Home';
import Bulletin from './Bulletin';
import Events from './Events';
import Notices from './Notices';
import Prayer from './Prayer';


const routeCconfig = {
    Home: { screen: Home },
    Bulletin: { screen: Bulletin },
    Events: { screen: Events },
    Notices: { screen: Notices },
    Prayer: { screen: Prayer }
};

const tabConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: false
    // tabBarOptions: {
    //     activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    // }
}
const AppNavigator = TabNavigator(routeCconfig, tabConfig);
export default AppNavigator;
