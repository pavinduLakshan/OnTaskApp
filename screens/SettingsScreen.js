import React, { Component } from 'react';
import { View } from 'react-native'
import ActionBar from '../components/ActionBar'

class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <ActionBar navigation={this.props.navigation} name="Settings" />
            </View>
        );
    }
}

export default SettingsScreen;