import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

import { LocalData } from './data/sampledata';
import MediaCell from './MediaCell';
import lodash from 'lodash';
import { leftPad } from '../utils/StringUtils';
import listViewStyles from '../styles/listview';

class Events extends Component {

  constructor(props) {
    super(props)

    let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    let dataSource = ds.cloneWithRows(this.getData());

    this.state = {
      dataSource: dataSource
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    let events = LocalData.events;

    let out = lodash.groupBy(events, (event) => {
      let date = new Date(event.startDate);
      let month = leftPad(date.getMonth().toString(), "0", 2);
      let year = date.getFullYear();
      let _date = date.getDate();
      return `${year}-${month}-${_date}`
    });
    let container = [];
    for (k in out) {
      container.push({ date: k, data: out[k] })
    }
    console.log(container)
    return container;
    // return ['fish', 'egss', 'soup'];
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
          listViewStyle.rowSeparatorHighlighted]}
      />
    );
  }

  renderSeparator2(sectionID, rowID) {
    return (<View style={listViewStyles.separator} key={rowID} />)
  }


  renderRow(row, sectionId, rowId) {
    return (
      <MediaCell event={row} />
    )
  }

  render() {
    let {dataSource} = this.state
    return (
      <View style={listViewStyles.container}>
        <ListView dataSource={dataSource}
          style={{ flex: 1, alignSelf: 'stretch' }}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />
      </View>
    );
  }
}

export default Events;