import React, { Component } from "react";
import { Modal, TouchableHighlight, View, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Foundation';
import {
  Container,
  Text,
  Header,
  Button,
  DatePicker,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import axios from 'axios'

class CreateNoticeModal extends Component {
  state = {
    modalVisible: false,
    startDate: new Date().toJSON().slice(0, 10),
    dueDate: new Date().toJSON().slice(0, 10),
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setStartDate(date) {
    this.setState({ startDate: date });
  }

  setDueDate(date) {
    this.setState({ dueDate: date });
  }

  createNoticeForGroup = () => {
    axios.get("/auth/user/me")
      .then(res => {
        axios.post('/notices',{
          userId: res.data.id,
          groupId: this.props.gid,
          title: this.state.name,
          content: this.state.description
        }).then(res => {
          if(res.status === 200){
            Alert.alert("New notice created")
            this.setModalVisible(false)
            this.props.navigation.navigate('Announcements')
          }
        }).catch(err => console.log(err))
      
      })
      .catch(err => {console.log(err);throw err});
  }

  render() {
    return (
      <View style={{ marginTop: 0 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 0 }}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={{ textAlign: "right" }}>Close</Text>
              </TouchableHighlight>

              <Form>
                <Item>
                <Text style={{ fontSize: 20 }}>New Announcement</Text>
                </Item>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input
                    onChangeText={text => this.setState({ name: text })}
                    value={this.state.name}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Content</Label>
                  <Input
                    multiline={true}
                    numberOfLines={8}
                    onChangeText={text => this.setState({ description: text })}
                    value={this.state.description}
                  />
                </Item>
                
                
              </Form>
              <Button
                style={{ margin: 10 }}
                success
                block
                onPress={this.createNoticeForGroup}
              >
                <Text>Post Notice</Text>
              </Button>
            </View>
          </View>
        </Modal>

        <Icon name="clipboard-notes"  onPress={() => {
            this.setModalVisible(true);
          }} size={35} />
        {/* <Button
         
          style={{ marginTop: 0 }}
          success
        >
          <Text>Add task</Text>
        </Button> */}
      </View>
    );
  }
}

export default CreateNoticeModal;
