import React, { Component } from 'react';
import { Alert} from 'react-native'
import {
    Text,
    Form,
    Item,
    Input,
    Label,
    Button
  } from "native-base";
  import axios from 'axios'

class GeneralInfoSettings extends Component {
    state={
        fname: "",
        lname: "",
        bio: ""
    }

    updateUserInfo = () => {
      axios.get("/auth/user/me")
      .then(res => {
        axios.post("/user/"+res.data.id+"/basic-info",{
          fname: this.state.fname,
          lname: this.state.lname,
          bio: this.state.bio
        }).then(
          res => {
            if(res.status === 200){
              Alert.alert("User Info updated")
            }
          }
        ).catch(err => console.log(err))
      }).catch(err => console.log(err))
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
                numberOfLines={4}
                onChangeText={text => this.setState({ bio: text })}
                value={this.state.bio}
              />
            </Item>
            <Item style={{marginTop: "2%"}}>
            <Button success onPress={this.updateUserInfo}>
            <Text>update</Text>
          </Button>
            </Item>
          </Form>
            </>
        );
    }
}

export default GeneralInfoSettings;