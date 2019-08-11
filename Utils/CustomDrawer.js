import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios'

export default class drawerContentComponents extends Component {

    state={
        fname: "",
        lname: ""
    }

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

    componentDidMount(){
        axios.get("/auth/user/me")
        .then(res => {
          axios.get('/users/'+res.data.id).then(res => {
            console.log("Users : ")
            console.log(res.data)
            this.setState({fname: res.data.fname,lname: res.data.lname ? res.data.lname : ""})
          }).catch(err => console.log(err))
        
        })
        .catch(err => {console.log(err);throw err});
      }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{this.state.fname+" "+this.state.lname}</Text>
                {/* <ImageBackground source={{uri: "https://source.unsplash.com/featured/?morning,light"}} style={{flex: 1, width: 280,justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Pavindu Lakshan</Text>
                </ImageBackground> */}

            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, (this.props.activeItemKey=='Dashboard') ? styles.activeBackgroundColor : null]}>
                    <Icon name="home" size={30} style={{width: 50}}/>
                    <Text style={[styles.screenTextStyle, (this.props.activeItemKey=='Dashboard') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Dashboard')}>Dashboard</Text>
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
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: '#82E17B'
    },
    headerText: {
        paddingTop: 30,
        fontSize: 30,
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
        color: 'black'
    },
    activeBackgroundColor: {
        backgroundColor: '#40C237',
    }
});