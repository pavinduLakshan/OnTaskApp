import React from "react";
import { View, Text } from "react-native";
import Layout from '../components/Layout'
import {  Body,  Card, CardItem } from "native-base";
import ActionBar from '../components/ActionBar'
import AsyncStorage from "@react-native-community/async-storage";

export default class Home extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    }

    state={
      mood: ""
    }

  
    async componentDidMount(){
      //await AsyncStorage.removeItem('token')
  }

    render() {
      return (
        <View>
                          <ActionBar navigation={this.props.navigation} name="OnTask" />
          <View>
          <Card>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "column",padding: 0}}>
            <Text style={{fontSize: 25,padding: 0,fontWeight: "bold"}}>My Day</Text>
            <Text style={{fontSize: 15,padding: 0}}>{new Date().toJSON().slice(0,10)}</Text>
            </Body>
          </CardItem>
        </Card>
        </View>
        </View>
      );
    }
  }