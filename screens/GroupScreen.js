import React, { Component,Fragment } from 'react';
import {Text} from 'react-native'
import ActionBar from '../components/ActionBar'

class GroupScreen extends Component {
    render() {
        const name = this.props.navigation.getParam('name', ' ');
        return (
            <Fragment>
                <ActionBar navigation = {this.props.navigation} name={name}/>
                <Text style={{fontSize: 30}}>{name}</Text>
            </Fragment>
        );
    }
}

export default GroupScreen;