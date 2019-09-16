import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import {
  Text,
  Form,
  Item,
  Input,
} from "native-base";
import ActionBar from "../../components/ActionBar";
import AddWorkModal from "./AddWorkModal";
import AddEducationModal from "./AddEducationModal";

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <ActionBar navigation={this.props.navigation} name="Settings" />
        <ScrollView style={{padding: "1%"}}>
          <View style={{marginTop: "1%"}}>
          <Text>About</Text>
          <Form>
          
              <Input placeholder="First Name" />
                    
              <Input placeholder="Last Name" />
          
          </Form>
          </View>

          <View style={{ marginTop: "1%",display: "flex", flexDirection: "row" }}>
            <Text>Work</Text>
            <View style={{ flexGrow: 1 }} />
            <AddWorkModal />
          </View>

          <View style={{ marginTop: "1%",display: "flex", flexDirection: "row" }}>
            <Text>Education</Text>
            <View style={{ flexGrow: 1 }} />
            <AddEducationModal />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SettingsScreen;
