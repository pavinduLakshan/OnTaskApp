import React, { Component } from "react";
import { Modal, TouchableHighlight, View, Alert, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
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
import { formatResultsErrors } from "jest-message-util";

class AddWorkModal extends Component {
  state = {
    modalVisible: false,
    w_place: "",
    startDate: new Date().toJSON().slice(0, 10),
    endDate: new Date().toJSON().slice(0, 10)
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setStartDate(date) {
    this.setState({ startDate: date });
  }

  setDueDate(date) {
    this.setState({ endDate: date });
  }

//   addWork = () => {
//     axios.get("/auth/user/me")
//       .then(res => {
//         axios.post('/user/work',{
//           userId: res.data.id,
//           w_place: this.state.w_place, 
//           from: this.state.startDate,
//           to: this.state.endDate,
//           title: this.state.title,
//           description: this.state.description
//         }).then(res => {
//           if(res.status === 200){
//             Alert.alert("New work created")
//             this.setModalVisible(false)
//             this.props.navigation.navigate('Settings')
//           }
//         }).catch(err => console.log(err))
      
//       })
//       .catch(err => {console.log(err);throw err});
//   }

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
                <Icon style={{ textAlign: "right",padding: "3%" }} name="close" size={25}></Icon>
              </TouchableHighlight>

              <Form>
                <Item>
                <Text style={{ fontSize: 20 }}>Add new Workplace</Text>
                </Item>
                <Item floatingLabel>
                  <Label>Place</Label>
                  <Input
                    onChangeText={text => this.setState({ w_place: text })}
                    value={this.state.w_place}
                  />
                </Item>

                <Item floatingLabel>
                  <Label>Title</Label>
                  <Input
                    onChangeText={text => this.setState({ title: text })}
                    value={this.state.title}
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
                onPress={this.addWork}
              >
                <Text>Add work</Text>
              </Button>
            </View>
          </ScrollView>
        </Modal>

        <Icon name="work"  onPress={() => {
            this.setModalVisible(true);
          }} size={25} />
      </View>
    );
  }
}

export default AddWorkModal;
