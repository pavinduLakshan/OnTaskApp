import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Card, CardItem, Body, Text } from "native-base";
import ActionBar from "../../components/ActionBar";
import GeneralSettings from "./GeneralInfoSettings";

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <ActionBar navigation={this.props.navigation} name="Settings" />
        <ScrollView>
          <GeneralSettings />
        </ScrollView>
      </View>
    );
  }
}

export default SettingsScreen;
