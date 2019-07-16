import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import ActionBar from "../components/ActionBar";

const styles = {
  item: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
    borderTopWidth: 1,
    borderColor: "green",
  },
};

export default class Groups extends React.Component {
  static navigationOptions = {
    drawerLabel: "Groups",
  };

  render() {
    return (
      <View>
        <ActionBar navigation={this.props.navigation} name={"Groups"} />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ fontSize: 30,margin: 10}}>Groups</Text>
          <Icon style={{marginLeft: "auto",margin: 10}} onPress={() => {this.props.navigation.navigate('CreateGroup')}} name="group-add" size={40} color="#900" />
        </View>
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
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.props.navigation.navigate("Group", {
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
