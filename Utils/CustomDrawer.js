import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
                <ImageBackground source={{uri: "https://source.unsplash.com/featured/?morning,light"}} style={{flex: 1, width: 280,justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Pavindu Lakshan</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Dashboard') ? styles.activeBackgroundColor : null]}>
                    <Icon name="home" size={30} style={{width: 50}}/>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Dashboard') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Dashboard')}>Home</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Profile') ? styles.activeBackgroundColor : null]}>
                    <Icon name="user" size={30} style={{width: 50}}/>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Profile') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Profile')}>Profile</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Tasks') ? styles.activeBackgroundColor : null]}>
                    <Icon name="tasks" size={30} style={{width: 50}}/>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Tasks') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Tasks')}>Tasks</Text>
                </View>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Groups') ? styles.activeBackgroundColor : null]}>
                    <Icon name="group" size={30} style={{width: 50}}/>
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
        width: '100%'
    },
    screenStyle: {
        height: 30,
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
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