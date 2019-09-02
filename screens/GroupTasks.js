import React, { Fragment } from "react";
import { View } from "react-native";
import { Button, Text } from 'native-base';
import ActionBar from "../components/ActionBar";

export default class TaskScreen extends React.Component {
  render() {
    const gid = this.props.navigation.getParam("id", " ");
    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name="Group Tasks" />
        <View style={{marginTop: "1%",display: "flex",flexDirection: "row",alignItems: "center"}}>
        <Text
          onPress={() =>
            this.props.navigation.navigate("Group", {
              id: gid,
            })
          }
        >
          Return to group
        </Text>
        <View style={{flexGrow: 1}}></View>
        <Button success>
            <Text>Add Task</Text>
          </Button>
        </View>
        
        <Text>{this.props.navigation.getParam("id", " ")}</Text>
      </Fragment>
    );
  }
}
