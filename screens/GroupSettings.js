import React, { Fragment } from "react";
import { View, ScrollView, Switch, Keyboard } from "react-native";
import {
  Container,
  Text,
  Header,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import ActionBar from "../components/ActionBar";

export default class TaskScreen extends React.Component {
  constructor(props) {
    super(props);
    const gid = this.props.navigation.getParam("id", " ");
    this.state = {
      name: "",
      description: "",
      gid: gid,
      isVisibleToSearch: false,
    };
  }

  saveGroupSettings = () => {};

  render() {
    return (
      <Fragment>
        <ActionBar navigation={this.props.navigation} name="Group Settings" />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            onPress={() =>
              this.props.navigation.navigate("Group", {
                id: this.state.gid,
              })
            }
          >
            Return to group
          </Text>
          <View style={{ flexGrow: 1 }} />
          <Button onPress={this.saveGroupSettings}>
            <Text>Save Settings</Text>
          </Button>
        </View>
        <ScrollView>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input
                  onChangeText={text => this.setState({ name: text })}
                  value={this.state.name}
                />
              </Item>
              <Item floatingLabel>
                <Label>Description</Label>
                <Input
                  keyboardType="default"
                  returnKeyType="done"
                  multiline={true}
                  onChangeText={text => this.setState({ description: text })}
                  value={this.state.description}
                  blurOnSubmit={true}
                />
              </Item>
              <Item style={{marginTop: "8%",border: 0}}>
                <Text>Visible to search</Text>
                <Switch
                  style={{marginLeft: "auto"}}
                  onValueChange={() =>
                    this.setState(prevState => ({
                      isVisibleToSearch: !prevState.isVisibleToSearch,
                    }))
                  }
                  value={this.state.isVisibleToSearch}
                />
              </Item>
            </Form>
          </Content>
        </ScrollView>
      </Fragment>
    );
  }
}
