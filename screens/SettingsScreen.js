import React, { Component } from 'react';
import { ScrollView,View } from 'react-native'
import { Card, CardItem, Body, Text } from "native-base";
import ActionBar from '../components/ActionBar'

class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <ActionBar navigation={this.props.navigation} name="Settings" />
                <ScrollView>
                
                <Card style={{ width: "100%", height: 400 }}>
          <CardItem>
            <Body>
              <Text>Basic Info</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ width: "100%", height: 400 }}>
          <CardItem>
            <Body>
              <Text>Work</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ width: "100%", height: 400 }}>
          <CardItem>
            <Body>
              <Text>Education</Text>
            </Body>
          </CardItem>
        </Card>
            </ScrollView>
            </View>
        );
    }
}

export default SettingsScreen;