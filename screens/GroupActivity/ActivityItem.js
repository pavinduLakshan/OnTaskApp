import React, { Component } from 'react';
import { Alert,View } from 'react-native' 
import { Card, CardItem, Body, Text } from "native-base";
import HTML from 'react-native-render-html';

class ActivityItem extends Component {
    render() {
        return (
            <CardItem  button style={{backgroundColor: "#26BE1C"}}>
                <View style={{display: "flex",flexDirection: "column"}}>
                <HTML emSize={1.5} html={this.props.description} />
                <Text style={{color: "white"}}>{this.props.createdAt}</Text>
                </View>
            </CardItem>
        );

    }
}

export default ActivityItem