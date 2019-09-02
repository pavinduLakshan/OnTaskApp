import React, { Component } from "react";
import { View, Image, Platform } from "react-native";
import ActionBar from "../components/ActionBar";
import { Button, Text } from "native-base";
import axios from 'axios'

class EditProPicScreen extends Component {
  state={
    photo: null
  }

  updateProfilePicture = () => {
    const data = new FormData();
   
    data.append('image', {
      file: Platform.OS === "android" ? this.state.photo.uri : this.state.photo.uri.replace("file://", ""),
      type: this.state.photo.type,  // <-  Did you miss that one?
      name: encodeURIComponent(this.state.photo.fileName),
  });
    
    axios.get("/auth/user/me")
      .then(res => {

        axios.post(
          "/user/" + res.data.id + "/change-propic",null,{
            params: {
              file: data 
            }
          }
        )
        .then(res => {
          Alert.alert("Profile Picture Updated")
          this.props.navigation.navigate('Dashboard')
      }).catch(err => console.log(err))
      })
      .catch(err => {console.log(err);throw err});
  };

  render() {
    return (
      <>
        <ActionBar
          navigation={this.props.navigation}
          name="Edit Profile Picture"
        />
        <View id="parentView" style={{ flex: 1 }}>
          <View
            id="childView"
            style={{
              flex: 1,
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
            {this.state.photo && (
          <Image
            source={{ uri: this.state.photo.uri }}
            style={{ width: 300, height: 300,                  borderWidth: 5,
              borderColor: "white",
              borderRadius: 100,
              marginTop: 30,
              width: 200,
              height: 200, }}
          />
        )}
            
            </View>
          </View>
          <View id="childViewTwo">
           
          </View>
        </View>
      </>
    );
  }
}

export default EditProPicScreen;
