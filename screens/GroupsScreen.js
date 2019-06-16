import React from "react";
import { View, Text, Button, FlatList } from "react-native";

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
        <Button
          title="Menu"
          onPress={() => this.props.navigation.openDrawer()}
        />
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
            <View style={styles.item}>
              <View>
                <Text>Image</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20 }}>{item.key}</Text>
                <Text>Last activity</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
