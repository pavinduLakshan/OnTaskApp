import React, { Component } from "react";
import { Modal, TouchableHighlight, View, Alert, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
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
import axios from "axios";

class AddEducationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      institute: "",
      description: "",
      startDate: new Date().toJSON().slice(0, 10),
      endDate: new Date().toJSON().slice(0, 10),
    }; 
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setStartDate(date) {
    this.setState({ startDate: date });
  }

  setEndDate(date) {
    this.setState({ endDate: date });
  }

  addEducation = () => {
    axios
      .get("/auth/user/me")
      .then(res => {
        axios
          .post("/user/education", {
            userId: res.data.id,
            institute: this.state.institute,
            from: this.state.startDate,
            to: this.state.endDate,
            description: this.state.description,
          })
          .then(res => {
            if (res.status === 200) {
              Alert.alert("New Education added");
              this.setModalVisible(false);
              this.props.navigation.navigate("Settings");
            }
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  };

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
          <ScrollView style={{ marginTop: 0 }}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Icon
                  style={{ textAlign: "right",padding: "3%" }}
                  name="close"
                  size={25}
                ></Icon>
              </TouchableHighlight>

              <Form>
                <Item>
                <Text style={{ fontSize: 20 }}>Add new Education</Text>
                </Item>
                <Item floatingLabel underline={false}>
                <Label>Institute</Label>
                <Input
                  onChangeText={text => this.setState({ institute: text })}
                  value={this.state.institute}
                />
                </Item>

                <View style={{padding: "6%"}}>
                <View>
                    <Label>From</Label>
                    <DatePicker
                      maximumDate={new Date()}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Select date"
                      textStyle={{ color: "green" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.setStartDate}
                      disabled={false}
                    />
                  </View>

                 <View>
                    <Label>To</Label>
                    <DatePicker
                      minimumDate={new Date(this.state.startDate)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="To"
                      textStyle={{ color: "green" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.setEndDate}
                      disabled={false}
                    />
                 </View>   
                </View>
                  
                <Item floatingLabel>
                <Label>Description</Label>
                <Input
                  multiline={true}
                  numberOfLines={4}
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
                <Text>Save</Text>
              </Button>
            </View>
          </ScrollView>
        </Modal>

        <Icon
          name="school"
          onPress={() => {
            this.setModalVisible(true);
          }}
          size={25}
        />
      </View>
    );
  }
}

export default AddEducationModal;
