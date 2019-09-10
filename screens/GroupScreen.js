import React, { Component, Fragment } from "react";
import { View,FlatList, TouchableOpacity,StyleSheet } from "react-native";
import ActionBar from "../components/ActionBar";
import axios from "axios";
import { Card, CardItem, Body, Text } from "native-base";
import Icon from "react-native-vector-icons/dist/FontAwesome";

const styles = StyleSheet.create(
  {
    item: {
      padding: "3%",
    }
  }
)

class GroupScreen extends Component {
  state = {
    id: null,
    description: "",
    submenus: [
      {
        name: "Tasks",
        screen: "GroupTasks",
        icon: "tasks"
      },
      {
        name: "Announcements",
        screen: "Announcements",
        icon: "sticky-note"
      },
      {
        name: "Activity",
        screen: "GroupActivity",
        icon: "user"
      },
      {
        name: "Members",
        screen: "GroupMembers",
        icon: "users"
      },
      {
        name: "Settings",
        screen: "GroupSettings",
        icon: "cog"
      }
    ]
  };
  
  componentDidMount() {
    const id = this.props.navigation.getParam("id", " ");
    this.setState({id: id})
    console.log(id);
    axios
      .get("/groups/" + id)
      .then(res => {
        console.log(res.data);
        this.setState({ description: res.data.description });
      })
      .catch(err => console.log(err));
  }

  render() {
    const name = this.props.navigation.getParam("name", " ");

    return (
      <View>
        <ActionBar navigation={this.props.navigation} name={name} />

        <View
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Card style={{ width: "33%", backgroundColor: "#26BE1C",display: "flex",justifyContent: "center",alignItems: "center",height: 100 }}>
          <CardItem style={{display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "#26BE1C"}}>
              <Text style={{fontSize: 35,color: "white"}}>0%</Text>
          </CardItem>
        </Card>
        <Card style={{ width: "33%", backgroundColor: "red",display: "flex",justifyContent: "center",alignItems: "center",height: 100 }}>
          <CardItem style={{display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "red"}}>
              <Text style={{fontSize: 35,color: "white"}}>4</Text>
          </CardItem>
        </Card>
        <Card style={{ width: "33%", backgroundColor: "#26BE1C",display: "flex",justifyContent: "center",alignItems: "center",height: 100 }}>
          <CardItem style={{display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "#26BE1C"}}>
              <Text style={{fontSize: 35,color: "white"}}>0%</Text>
          </CardItem>
        </Card>
       
        </View>
        <Card style={{ width: "100%", height: 100 }}>
          <CardItem>
            <Body>
              <Text>Description</Text>
              <Text>{this.state.description}</Text>
            </Body>
          </CardItem>
        </Card>
        <FlatList
          data={this.state.submenus}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(item.screen, {
                  id: this.state.id,
                });
              }}
            >
          <CardItem style={{ padding: "2%",width: "100%" }}>
            <Body style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <Icon name={item.icon} size={15} color="#000" />
              <Text style={{ fontSize: 16,marginLeft: "2%" }}>{item.name}</Text>
            </Body>
          </CardItem>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default GroupScreen;
