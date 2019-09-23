import React, { Component } from "react";
import { View, Image, FlatList,TouchableOpacity } from "react-native";
import axios from "axios";
import ActionBar from "../components/ActionBar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text, ListItem, Left, Body, Right, Title, Card, CardItem } from "native-base";

class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Preferences", header: false },
        { name: "Account", header: false },
        { name: "Help Center", header: false },
      ],
      userData: [],
      stickyHeaderIndices: [],
      fname: "",
      lname: "",
      emailHash: ""
    };
  }

  componentDidMount() {
    axios
      .get("/auth/user/me")
      .then(res => {
        axios
          .get("/users/" + res.data.id)
          .then(res => {
            console.log("Users : ");
            console.log(res.data);
            this.setState({
              fname: res.data.fname,
              lname: res.data.lname ? res.data.lname : "",
              emailHash: res.data.emailHash
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          </Body>
          <Right />
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <Text>{item.name}</Text>
          </Body>
        </ListItem>
      );
    }
  };

  render() {
    return (
      <View>
        <ActionBar navigation={this.props.navigation} name="Profile" />
        <View
          style={{
            width: "100%",
            backgroundColor: "#82E17B",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditProPic')}>
          <Image
            style={{
              borderWidth: 5,
              borderColor: "white",
              borderRadius: 100,
              margin: 10,
              marginLeft: 10,
              width: 80,
              height: 80,
            }}
            source={{ uri: `https://www.gravatar.com/avatar/${this.state.emailHash}?d=retro&s=80` }}
          />
</TouchableOpacity>
          <Text style={{ fontSize: 20, color: "white" }}>
            {this.state.fname + " " + this.state.lname}
          </Text>
        </View>
        <Card style={{marginBottom: 0}}>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <Icon name="contacts" size={15} color="black" />
              <Text style={{marginLeft: 5}}>Contact</Text>
            </Body>
          </CardItem>
        </Card>

        <Card style={{marginBottom: 0}}>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <Icon name="work" size={15} color="black" />
              <Text style={{marginLeft: 5}}>Work</Text>
            </Body>
          </CardItem>
        </Card>

        <Card style={{marginBottom: 0}}>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <Icon name="school" size={15} color="black" />
              <Text style={{marginLeft: 5}}>Education</Text>
            </Body>
          </CardItem>
        </Card>
        {/* <FlatList
               style={{marginTop: "40%"}}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      /> */}
      </View>
    );
  }
}

export default ProfileScreen;
