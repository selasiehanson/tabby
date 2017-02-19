import React, { Component } from 'react';
import {
    View,    
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Tabs, Text, Button, Icon, Header,Title, Card, CardItem } from 'native-base';
import {NoticesData} from './data/data-general-info';
import {dateHelpers} from '../utils/date-helper'

const renderGeneralInfo = ({title, info}, idx) => {
    let _title = title || 'General Info';
    return (
        <Card key={idx}>
            <CardItem> 
                <Text>{ _title}</Text>                        
            </CardItem>
            <CardItem> 
                <Text>{info}</Text>                        
            </CardItem>
        </Card>
    );
}

const GeneralInfo = () =>  {
    let date = dateHelpers.simpleHumanDate(NoticesData.date);
    return (  
        <Container style={styles.container}>  
            <Content>               
                <Text style={styles.title}> Week starting - {date} </Text>         
                {NoticesData.notices.map((data, idx) => renderGeneralInfo({title, info} = data, idx))}
            </Content>
        </Container>
    )
}

const Bans = () =>  {
    return (
        <Container style={styles.container}>  
            <Content>        
                <Text style={styles.title}> 
                Bans of marriage
                </Text>
            </Content>
        </Container>
    )
}

const Bereavements = () =>  {
    return (
        <Container style={styles.container}>  
            <Content>        
                <Text style={styles.title}> 
                Bereavements
                </Text>
            </Content>
        </Container>
    )
}

import myTheme from './theme';

class Notices extends Component{
    render () {
        return (
            <Container>
                    <Content>
                    <Header style={{ elevation: 0 }}>                                    
                    </Header>
                      <View>
                            <Tabs>
                                <GeneralInfo tabLabel='General Info' />
                                <Bans tabLabel='Bans' />                        
                                <Bereavements tabLabel="Bereavements" />
                            </Tabs>
                        </View>
                        
                    </Content>
                </Container>
            );    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'        
    },
    title: {
        fontSize: 18,
        color: '#4285f4',
        marginBottom: 10,
        marginTop: 10
    }
})

export default connect(({routes}) => ({ routes }))(Notices)