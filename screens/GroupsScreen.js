import React from "react";
import { View, Text, Button, FlatList,  TouchableOpacity } from "react-native";
import Layout from '../components/Layout'
import ActionBar from '../components/ActionBar'

const styles = {
  item: { 
      flex: 1, 
      flexDirection: "row", 
      padding: "2%",
      borderTopWidth: 1,
      borderColor: "green" },
};

export default class Groups extends React.Component {
  static navigationOptions = {
    drawerLabel: "Groups",
  };

  render() {
    return (
      <View>
        <ActionBar navigation = {this.props.navigation} name={"Groups"}/>
        <Text style={{ fontSize: 40,padding: "2%" }}>Groups</Text>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} 
            onPress={() => {
              this.props.navigation.navigate('Group', {
                name: item.key,
              });
            }}
            >
             <View>
                <Text>Image</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>{item.key}</Text>
                <Text>Last activity</Text>
              </View>
          </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
