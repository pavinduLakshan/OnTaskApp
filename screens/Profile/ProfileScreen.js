import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import ActionBar from "../../components/ActionBar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text,  Body,  Card, CardItem } from "native-base";
import AddEducationModal from './AddEducationModal'
import AddWorkModal from './AddWorkModal'

const Item = props => {
  return (
            <View style={{padding: "1%"}}>
                <Text style={{fontSize: 15}}>{props.place}</Text>
                <Text style={{color: "gray"}}>From {props.from.slice(0,10)} - {props.to ? props.to.slice(0,10) : "Present"}</Text>

                <Text style={{marginTop: "2%"}}>{props.description}</Text>
            </View>
  )
}

class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      education: [],
      work: [],
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
            this.setState({
              fname: res.data.fname,
              lname: res.data.lname ? res.data.lname : "",
              emailHash: res.data.emailHash
            });
          })
          .catch(err => console.log(err));

          axios.get('/users/'+res.data.id+'/education').then(
            res => this.setState({education: res.data})
          )

          axios.get('/users/'+res.data.id+'/work').then(
            res => this.setState({work: res.data})
          )
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

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
              // borderWidth: 5,
              // borderColor: "white",
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
              <View style={{flexGrow: 1}} />
              <AddWorkModal />
            </Body>
          </CardItem>
        </Card>
        {this.state.work.map(w => 
            <Item 
              key={w.id}
              place={w.title+ " at "+w.place}
              from={w.startDate}
              to={w.endDate}
              description={w.description}
            />)}

        <Card style={{marginBottom: 0}}>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <Icon name="school" size={15} color="black" />
              <Text style={{marginLeft: 5}}>Education</Text>
              <View style={{flexGrow: 1}} />
              <AddEducationModal />
            </Body>
          </CardItem>
         
        </Card>
        {this.state.education.map(e => 
            <Item 
              key={e.id}
              place={e.institute}
              from={e.startDate}
              to={e.endDate}
              description={e.description}
            />)}
      </View>
    );
  }
}

export default ProfileScreen;
