
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Events from './components/Events';

class HomeScreen extends Component {
  render() {
    return (
      <View style={pageStyles.page}>
        <Text> Home </Text>
      </View>
    );
  }
}

class EventsScreen extends Component {
  render() {
    return (
      <View style={pageStyles.page}>
        <Text> Events </Text>
      </View>
    );
  }
}

class NoticesScreen extends Component {
  render() {
    return (
      <View style={pageStyles.page}>
        <Text> Notices </Text>
      </View>
    );
  }
}

class PrayerScreen extends Component {
  render() {
    return (
      <ScrollableTabView tabBarUnderlineStyle={{ borderWidth: 0.5 }}>
        <MonthlyPrayerBulletinScreen tabLabel="Prayer" />
        <WeeklyMeditationScreen tabLabel="Meditation" />
      </ScrollableTabView >
    );
  }
}

class MonthlyPrayerBulletinScreen extends Component {
  render() {
    return (
      <View style={pageStyles.page}>
        <Text> Prayer Bulletin </Text>
      </View>
    );
  }
}

class WeeklyMeditationScreen extends Component {
  render() {
    return (
      <View style={pageStyles.page}>
        <Text> Meditation </Text>
      </View>
    );
  }
}

const TabIcon = (props) => {
  let { id, selected, title, icon, clickHandler } = props;

  return (
    <TouchableOpacity onPress={() => clickHandler(id)}>
      <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name={icon} style={{ fontSize: 24, textAlign: 'center', color: selected ? 'red' : 'black', fontWeight: 'bold' }} />
        <Text style={{ color: selected ? 'red' : 'black', fontSize: 10, fontWeight: 'bold', textAlign: 'center' }}>
          {title.toUpperCase()}
        </Text>
      </View >
    </TouchableOpacity>
  );
}

export default class TabView extends Component {

  constructor(props) {
    super(props);
    this._tabItemClicked = this._tabItemClicked.bind(this);
    this.state = {
      tabsDefs: [
        { id: "home", title: "Home", icon: "ios-home-outline", selected: true },
        { id: "events", title: "Events", icon: "ios-calendar-outline" },
        { id: "notices", title: "Notices", icon: "ios-albums-outline" },
        { id: "prayer", title: "Prayer", icon: "ios-add-outline" }
      ]
    }
  }

  _renderTabItem({id, icon, title, selected, clickHandler }) {
    let attrs = { id, selected, title, icon, clickHandler };
    return TabIcon(attrs);

  }

  _tabItemClicked(id) {
    console.log(`${id} has been clicked`);

    let modifiedTabDefs = this.state.tabsDefs.map(x => {
      if (x.id === id) {
        x.selected = true;
      } else {
        x.selected = false;
      }
      return x;
    });

    this.setState({ ...this.state, tabsDefs: modifiedTabDefs });
  }

  _renderScreen(id) {
    console.log(id);
    switch (id) {
      case 'events':
        return <Events />

      case 'notices':
        return <NoticesScreen />

      case 'prayer':
        return <PrayerScreen />

      default:
        return <HomeScreen />
    }
  }

  _renderTabItems(items) {
    return items.map(x => {
      let { id, selected, title, icon, clickHandler } = x;

      return (
        <TabIcon key={id} selected={selected} id={id} title={title} clickHandler={this._tabItemClicked} icon={icon} />
      )
    })
  }

  _getSelectedScreen(items = []) {
    console.log(items);
    let found = items.filter(x => x.selected);
    if (found.length > 0) {
      return this._renderScreen(found[0].id)
    }
    return this._renderScreen('')
  }

  render() {
    let tabsDefs = this.state.tabsDefs;
    let tabs = this._renderTabItems(tabsDefs);

    return (
      <View style={styles.container}>
        <View style={styles.screenHolder}>
          {this._getSelectedScreen(tabsDefs)}
        </View>
        <View style={styles.tabContainer}>
          {tabs}
        </View>
      </View >
    );
  }
}

const pageStyles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  screenHolder: {
    flex: 1,
    backgroundColor: 'white'
  },
  tabContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  tabItem: {
    flex: 1
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