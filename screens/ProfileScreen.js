import React, { Component } from 'react';
import {View,Text} from 'react-native'
import ActionBar from '../components/ActionBar'

class ProfileScreen extends Component {
    render() {
        return (
           <View>
               <ActionBar navigation={this.props.navigation} name="Profile" />
               <Text>Pro</Text>
            </View>
        );
    }
}

export default ProfileScreen;