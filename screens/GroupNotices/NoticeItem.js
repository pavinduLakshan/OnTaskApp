import React, { Component } from 'react';
import { Alert,View } from 'react-native' 
import { Card, CardItem, Body, Text } from "native-base";

class TaskItem extends Component {
    render() {
        return (
            <CardItem  button onPress={() => Alert.alert("New task created")} style={{backgroundColor: "#26BE1C"}}>
                <View>
                <Text style={{fontSize: 20,color: "white"}}>{this.props.name}</Text>
                <Text style={{color: "white"}}>{this.props.addedDate}</Text>
                </View>
            </CardItem>
        );

    }
}

export default TaskItem