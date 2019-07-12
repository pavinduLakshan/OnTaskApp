import React, { Component } from 'react';
import {View,Image,FlatList } from 'react-native'
import ActionBar from '../components/ActionBar'
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";

class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
          data: [
            { name: "Preferences", header: false },
            { name: "Account", header: false },
            { name: "Help Center", header: false }
          ],
          stickyHeaderIndices: []
        };
      }

      renderItem = ({ item }) => {
        if (item.header) {
          return (
            <ListItem itemDivider>
              <Left />
              <Body style={{ marginRight: 40 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {item.name}
                </Text>
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
               <ActionBar navigation={this.props.navigation} name="Settings" />
               <View style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
               <Image
                  style={{borderWidth: 5,borderColor: "#21e6ec",borderRadius: 100,margin: 20,width: 200, height: 200}}
                  source={{uri: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}}
               ></Image>
               <Text style={{fontSize: 40}}>Pavindu Lakshan</Text>
               </View>
               <FlatList
               style={{marginTop: "40%"}}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      />
            </View>
        );
    }
}

export default ProfileScreen;