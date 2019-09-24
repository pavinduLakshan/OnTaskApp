import React, { Component } from "react";
import { Modal, TouchableHighlight, View, ScrollView, Alert } from "react-native";
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

class AddEducationModal extends Component {
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

  addEducation = () => {
    axios.get("/auth/user/me")
      .then(res => {
        axios.post('/user/education',{
          userId: res.data.id,
          institute: this.state.institute,
          description: this.state.description,
          from: this.state.startDate,
          to: this.state.dueDate
        }).then(res => {
          if(res.status === 200){
            Alert.alert("New education created")
            this.setModalVisible(false)
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
            <ScrollView>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={{ textAlign: "right" }}>Close</Text>
              </TouchableHighlight>

              <Form>
                <Item>
                <Text style={{ fontSize: 20 }}>Add School</Text>
                </Item>
                <Item floatingLabel>
                  <Label>Institute</Label>
                  <Input
                    onChangeText={text => this.setState({ institute: text })}
                    value={this.state.institute}
                  />
                </Item>

                <Item style={{display: "flex",flexDirection: "row"}}>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                //   maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Start date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setStartDate}
                  disabled={false}
                />
                </Item>
                

                <Item>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                //   maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Due date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setStartDate}
                  disabled={false}
                />
                </Item>

                <Item floatingLabel>
                  <Label>Description</Label>
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
                onPress={this.addEducation}
              >
                <Text>Add School</Text>
              </Button>
            </ScrollView>
          </View>
        </Modal>

        <Text
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={{ marginLeft: 15,marginBottom: 0,color: "blue" }}
          success

        >
          Add Institute
        </Text>
      </View>
    );
  }
}

export default AddEducationModal;
