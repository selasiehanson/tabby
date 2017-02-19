
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    return (
        <Container style={styles.container}>
            <Content >
            
                <Card style={{ flex: 1 }}>
                    <CardItem>
                        <Text>All church workers meeting</Text>
                        
                    </CardItem>

                    <CardItem >
                        <Image style={{ resizeMode: 'cover', width: null }} source={{
                            uri: "https://pbs.twimg.com/media/C1XqFdaXgAAfeGr.jpg:small" 
                        }}/>
                    </CardItem> 

                    <CardItem>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. 
                         </Text>
                    </CardItem>
                </Card>
                <Card style={{ flex: 1 }}>
                    <CardItem>
                        <Text>Agape Lunch</Text>
                        
                    </CardItem>

                    <CardItem >
                        <Image style={{ resizeMode: 'cover', width: null }} source={{
                            uri: "https://pbs.twimg.com/media/Cx2QHhTWQAASOnW.jpg:small" 
                        }}/>
                    </CardItem> 

                    <CardItem>
                        <Text>
                         Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </CardItem>
                </Card>
                <Card style={{ flex: 1 }}>
                    <CardItem>
                        <Text>Labone area fellowship</Text>                        
                    </CardItem>            
                    <CardItem>
                        <Text>
                         Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {        
        justifyContent: 'center',
        padding: 0,
        backgroundColor: 'white',
        marginTop: 60,
        marginBottom: 30
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    }
})

export default connect(({routes}) => ({ routes }))(Home)