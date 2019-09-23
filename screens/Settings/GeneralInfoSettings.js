import React, { Component } from 'react';
import { View} from 'react-native'
import {
    Text,
    Form,
    Item,
    Input,
    Label,
    Header,
    Left,
    Right
  } from "native-base";

class GeneralInfoSettings extends Component {
    state={
        fname: "",
        lname: "",
        bio: ""
    }

    render() {
        return (
            <>
                <Text style={{marginLeft: 10,marginTop: 5,fontSize: 20}}>About me</Text>
                <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input
                onChangeText={text => this.setState({ fname: text })}
                value={this.state.fname}
              />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                onChangeText={text => this.setState({ lname: text })}
                value={this.state.lname}
              />
            </Item>
            <Item floatingLabel>
              <Label>Bio</Label>
              <Input
                multiline={true}
                numberOfLines={8}
                onChangeText={text => this.setState({ bio: text })}
                value={this.state.bio}
              />
            </Item>
          </Form>
            </>
        );
    }
}

export default GeneralInfoSettings;