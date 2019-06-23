import React from "react";
import { View, Text,Button,Image } from "react-native";
import { DrawerActions } from 'react-navigation';
import Layout from '../components/Layout'

export default class Home extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    }

    state={
      mood: ""
    }

    componentDidMount(){
      var today = new Date()
      var curHr = today.getHours()
      
      if (curHr < 12) {
        this.setState({mood: "morning"})
      } else if (curHr < 18) {
        this.setState({mood: "evening"})
      } else {
        this.setState({mood: "night"})
    }
  }

    render() {
      return (
        <Layout navigation = {this.props.navigation}>
          <View>
         <Image
         resizeMode = 'cover'
                   style={{ height: 250}}
          source={{ uri: `https://source.unsplash.com/featured/?${this.state.mood},nature`}}
        />

        </View>
        </Layout>
      );
    }
  }