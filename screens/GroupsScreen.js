import React from "react";
import { View, Text,Button } from "react-native";

export default class Groups extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Groups'
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Groups</Text>
          <Button
          title="Back to signup"
          onPress={() =>
            this.props.navigation.openDrawer()
          }
        />
        </View>
      );
    }
  }