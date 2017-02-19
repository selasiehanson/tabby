import React, { Component } from 'react';
import {
    View,    
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Tabs, Text, Button, Icon, Header,Title } from 'native-base';

const Meditation = () =>  {
    return (  
        <Container style={styles.container}>  
            <Content>        
                <View >
                    <Text style={styles.title}>GOD’S PROVISION </Text>
                </View>
                <Text> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Content>
        </Container>
    )
}

const MonthlyPrayer = () =>  {
    return (
        <Container style={styles.container}>  
            <Content>        
                <Text style={styles.title}> 
                Daily Prayers
                </Text>
            </Content>
        </Container>
    )
}

import myTheme from './theme';

class Prayer extends Component{
    render () {
        return (
            <Container>
                    <Content>
                    <Header style={{ elevation: 0 }}>                                    
                    </Header>
                      <View>
                            <Tabs locked>
                                <Meditation tabLabel='Meditation' />
                                <MonthlyPrayer tabLabel='Daily Prayers' />                        
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
        alignItems: 'center',
        padding: 16        
    },
    title: {
        fontSize: 18,
        color: '#4285f4',
        marginBottom: 10
    }
})

export default connect(({routes}) => ({ routes }))(Prayer)