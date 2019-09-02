import React, { Fragment } from "react";
import { Text } from "react-native";
import ActionBar from "../components/ActionBar";

export default class TaskScreen extends React.Component {
  render() {
    const gid = this.props.navigation.getParam("id", " ");
    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name="Group Members" />
        <Text
          onPress={() =>
            this.props.navigation.navigate("Group", {
              id: gid,
            })
          }
        >
          Return to group
        </Text>
        <Text>{this.props.navigation.getParam("id", " ")}</Text>
      </Fragment>
    );
  }
}
