import React, { Component } from 'react';
import { Alert } from 'react-native' 
import { Card, CardItem, Body, Text } from "native-base";

class ActivityItem extends Component {
    render() {
        return (
            <CardItem  button onPress={() => Alert.alert("New task created")} style={{backgroundColor: "#26BE1C"}}>
                <Text style={{fontSize: 20,color: "white"}}>{this.props.description}</Text>
                <Text style={{color: "white"}}>{this.props.createdAt}</Text>
            </CardItem>
        );

    }
}

export default ActivityItem