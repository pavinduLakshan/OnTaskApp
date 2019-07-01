import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import Tasks from '../screens/TasksScreen'
import Group from '../screens/GroupScreen';
import Profile from '../screens/ProfileScreen';

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={{uri: "https://source.unsplash.com/featured/?morning,forest"}} style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Pavindu Lakshan</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Dashboard') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Dashboard') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Dashboard')}>Dashboard</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Profile') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Profile') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Profile')}>Profile</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Tasks') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Tasks') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Tasks')}>Tasks</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Groups') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Groups') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Groups')}>Groups</Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: { 
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 30,
        marginLeft: 20, 
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'blue',
    }
});